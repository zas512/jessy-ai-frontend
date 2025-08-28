import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAccessToken } from "@/lib/api-client";

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  accessToken: getAccessToken(), // Get from sessionStorage
  isAuthenticated: !!getAccessToken(), // Check if token exists
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { clearError, setLoading } = authSlice.actions;
export default authSlice.reducer;
