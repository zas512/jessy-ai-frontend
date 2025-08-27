'use client';

import React from 'react';
import Image from 'next/image';
import AuthButtons from '@/components/AuthButtons';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  const handleGoogleClick = () => {
    // Handle Google authentication
    console.log('Google sign-up clicked');
  };

  const handleYahooClick = () => {
    // Handle Yahoo authentication
    console.log('Yahoo sign-up clicked');
  };

  const handleEmailClick = () => {
    // Navigate to email sign-up form
    router.push('/sign-up/email');
  };

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

      {/* Welcome Message */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">
          Join Jessy!
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Create your account to get started with your AI-powered health and safety assistant
        </p>
      </div>

      {/* Authentication Buttons */}
      <div className="pt-8">
        <AuthButtons
          onGoogleClick={handleGoogleClick}
          onYahooClick={handleYahooClick}
          onEmailClick={handleEmailClick}
        />
      </div>

      {/* Additional Links */}
      <div className="pt-8 space-y-4">
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
    </div>
  );
}
