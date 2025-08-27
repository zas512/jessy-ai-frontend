"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";

export default function EmailSignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Handle email sign-in logic here
    console.log("Email sign-in:", { email, password });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/dashboard"); // Navigate to dashboard
    }, 2000);
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

      {/* Sign In Form */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-black">
          Sign in to your account
        </h1>
        <p className="text-gray-600">
          Enter your email and password to access your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-left"
          >
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

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 text-left"
          >
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="w-full"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300"
        >
          {isLoading ? "Signing in..." : "Sign In"}
        </Button>
      </form>

      {/* Additional Links */}
      <div className="pt-4 space-y-4">
        <p className="text-sm text-gray-500">
          <button
            onClick={() => router.push("/reset-password")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Forgot your password?
          </button>
        </p>
        <p className="text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <button
            onClick={() => router.push("/sign-up")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            Sign up
          </button>
        </p>
      </div>

      {/* Back to Sign In Options */}
      <div className="pt-4">
        <button
          onClick={() => router.push("/sign-in")}
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          ← Back to sign-in options
        </button>
      </div>
    </div>
  );
}
