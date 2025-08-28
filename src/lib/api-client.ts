import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import toast from "react-hot-toast";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL!,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // This enables HttpOnly cookies
});

// Request interceptor to add access token to headers
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get access token from sessionStorage
    const accessToken = getAccessTokenFromStorage();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

// Helper functions to reduce cognitive complexity
const handleServerError = (error: AxiosError) => {
  toast.error("Server error");
  return Promise.reject(
    error instanceof Error ? error : new Error(String(error))
  );
};

const extractErrorMessage = (data: unknown): string => {
  if (data && typeof data === "object" && "message" in data) {
    return data.message as string;
  }
  return "Something went wrong";
};

const handleTokenRefresh = async (
  originalRequest: InternalAxiosRequestConfig & { _retry?: boolean }
) => {
  try {
    const refreshResponse = await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );

    const newAccessToken = refreshResponse.data.accessToken;
    setAccessTokenInStorage(newAccessToken);
    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

    return apiClient(originalRequest);
  } catch (refreshError) {
    toast.error("Session expired. Please log in again.");
    if (typeof window !== "undefined") {
      window.location.href = "/sign-in";
    }
    return Promise.reject(
      refreshError instanceof Error
        ? refreshError
        : new Error(String(refreshError))
    );
  }
};

const handleOtherErrors = (status: number, errorMessage: string) => {
  if (status === 403) {
    toast.error("Access denied");
  } else if (status !== 401) {
    toast.error(errorMessage);
  }
};

// Response interceptor for automatic token refresh
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!error.response) {
      return handleServerError(error);
    }

    const { status, data } = error.response;
    const errorMessage = extractErrorMessage(data);

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return handleTokenRefresh(originalRequest);
    }

    handleOtherErrors(status, errorMessage);

    return Promise.reject(
      error instanceof Error ? error : new Error(String(error))
    );
  }
);

// SessionStorage for access token (persists across page refreshes, cleared when tab closes)
const getAccessTokenFromStorage = (): string | null => {
  if (typeof window !== "undefined") {
    return sessionStorage.getItem("accessToken");
  }
  return null;
};

const setAccessTokenInStorage = (token: string): void => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("accessToken", token);
  }
};

const clearAccessTokenFromStorage = (): void => {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem("accessToken");
  }
};

// Export functions for Redux auth slice to use
export const setAccessToken = setAccessTokenInStorage;
export const getAccessToken = getAccessTokenFromStorage;
export const clearAccessToken = clearAccessTokenFromStorage;

export default apiClient;
