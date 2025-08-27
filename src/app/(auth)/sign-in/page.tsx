"use client";

import React from "react";
import Image from "next/image";
import AuthButtons from "@/components/AuthButtons";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();

  const handleGoogleClick = () => {
    // Handle Google authentication
    console.log("Google sign-in clicked");
  };

  const handleYahooClick = () => {
    // Handle Yahoo authentication
    console.log("Yahoo sign-in clicked");
  };

  const handleEmailClick = () => {
    // Navigate to email sign-in form
    router.push("/sign-in/email");
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
          Welcome to Jessy!
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Your AI-powered health and safety assistant
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
          Don&apos;t have an account?{" "}
          <button
            onClick={() => router.push("/sign-up")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Sign up
          </button>
        </p>
        <p className="text-sm text-gray-500">
          <button
            onClick={() => router.push("/reset-password")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Forgot your password?
          </button>
        </p>
      </div>
    </div>
  );
}
