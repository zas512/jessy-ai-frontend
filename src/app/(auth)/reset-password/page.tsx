'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
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

        {/* Success Message */}
        <div className="space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-black">
            Check your email
          </h1>
          <p className="text-gray-600">
            We've sent a password reset link to <strong>{email}</strong>
          </p>
          <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or try again.
          </p>
        </div>

        {/* Back to Sign In */}
        <Button
          onClick={() => router.push('/sign-in')}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          Back to Sign In
        </Button>
      </div>
    );
  }

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

      {/* Reset Password Form */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-black">
          Reset your password
        </h1>
        <p className="text-gray-600">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          Send reset link
        </Button>
      </form>

      {/* Back to Sign In */}
      <div className="pt-4">
        <button 
          onClick={() => router.push('/sign-in')}
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          ← Back to Sign In
        </button>
      </div>
    </div>
  );
}
