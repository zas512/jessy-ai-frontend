'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function EmailSignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Handle email sign-up logic here
    console.log('Email sign-up:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/verfiy-otp'); // Navigate to OTP verification
    }, 2000);
  };

  const isFormValid = formData.firstName && formData.lastName && 
                     formData.email && formData.password && 
                     formData.password === formData.confirmPassword;

  return (
    <div className="text-center space-y-8">
      {/* Jessy Logo */}
      <div className="flex justify-center">
        <Image
          src="/jessy-logo.svg"
          alt="Jessy"
          width={120}
          height={40}
          className="mb-4"
        />
      </div>

      {/* Sign Up Form */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-black">
          Create your account
        </h1>
        <p className="text-gray-600">
          Fill in your details to create your Jessy account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 text-left">
              First name
            </label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              required
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 text-left">
              Last name
            </label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              required
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
            Email address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
            Password
          </label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Create a password"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 text-left">
            Confirm password
          </label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            className="w-full"
          />
          {formData.confirmPassword && formData.password !== formData.confirmPassword && (
            <p className="text-red-500 text-sm text-left">Passwords do not match</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading || !isFormValid}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300"
        >
          {isLoading ? 'Creating account...' : 'Create Account'}
        </Button>
      </form>

      {/* Additional Links */}
      <div className="pt-4 space-y-4">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <button 
            onClick={() => router.push('/sign-in')}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Sign in
          </button>
        </p>
        <p className="text-xs text-gray-400 max-w-sm mx-auto">
          By creating an account, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>

      {/* Back to Sign Up Options */}
      <div className="pt-4">
        <button 
          onClick={() => router.push('/sign-up')}
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          ← Back to sign-up options
        </button>
      </div>
    </div>
  );
}
