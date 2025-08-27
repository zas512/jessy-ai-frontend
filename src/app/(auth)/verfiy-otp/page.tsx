'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function VerifyOTPPage() {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length === 6) {
      // Handle OTP verification logic here
      console.log('OTP submitted:', otpString);
      setIsVerified(true);
    }
  };

  const handleResend = () => {
    // Handle resend OTP logic
    console.log('Resend OTP clicked');
  };

  if (isVerified) {
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
            Email verified!
          </h1>
          <p className="text-gray-600">
            Your email has been successfully verified. You can now access your account.
          </p>
        </div>

        {/* Continue Button */}
        <Button
          onClick={() => router.push('/dashboard')}
          className="w-full bg-purple-600 hover:bg-purple-700"
        >
          Continue to Jessy
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

      {/* Verify OTP Form */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-black">
          Verify your email
        </h1>
        <p className="text-gray-600">
          We've sent a 6-digit code to your email address. Enter it below to verify your account.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-2">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
            />
          ))}
        </div>

        <Button
          type="submit"
          disabled={otp.join('').length !== 6}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Verify Email
        </Button>
      </form>

      {/* Resend OTP */}
      <div className="pt-4">
        <p className="text-sm text-gray-500">
          Didn't receive the code?{' '}
          <button 
            onClick={handleResend}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Resend
          </button>
        </p>
      </div>

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
