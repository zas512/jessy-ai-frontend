"use client";

import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { 
  checkAuthStatus, 
  login, 
  signup, 
  verifyOTP, 
  requestPasswordReset, 
  resetPassword, 
  logout, 
  refreshToken,
  clearError 
} from '@/redux/authSlice';

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  // Check auth status on mount
  useEffect(() => {
    if (!auth.isAuthenticated && !auth.isLoading) {
      dispatch(checkAuthStatus());
    }
  }, [dispatch, auth.isAuthenticated, auth.isLoading]);

  return {
    // State
    user: auth.user,
    accessToken: auth.accessToken,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    error: auth.error,

    // Actions
    login: (email: string, password: string) => 
      dispatch(login({ email, password })),
    
    signup: (email: string, password: string, confirmPassword: string) => 
      dispatch(signup({ email, password, confirmPassword })),
    
    verifyOTP: (email: string, otp: string) => 
      dispatch(verifyOTP({ email, otp })),
    
    requestPasswordReset: (email: string) => 
      dispatch(requestPasswordReset({ email })),
    
    resetPassword: (token: string, password: string, confirmPassword: string) => 
      dispatch(resetPassword({ token, password, confirmPassword })),
    
    logout: () => dispatch(logout()),
    
    refreshToken: () => dispatch(refreshToken()),
    
    clearError: () => dispatch(clearError()),
  };
};
