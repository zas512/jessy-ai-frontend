"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function VerifyOTPPage() {
  const router = useRouter();
  const t = useTranslations("VerifyOTP");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join("");
    if (otpString.length === 6) {
      setIsLoading(true);
      // Handle OTP verification logic here
      console.log("OTP submitted:", otpString);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsVerified(true);
      }, 2000);
    }
  };

  const handleResend = () => {
    // Handle resend OTP logic
    console.log("Resend OTP clicked");
  };

  if (isVerified) {
    return (
      <div className="text-center space-y-10">
        {/* Success Message */}
        <div className="space-y-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold">{t("successTitle")}</h1>
            <p className="text-2xl text-[#1F1F1F] font-[400] tracking-wider">
              {t("successSubtitle")}
            </p>
          </div>
        </div>

        {/* Continue Button */}
        <Button
          onClick={() => router.push("/sign-in")}
          className="w-full bg-purple h-16 text-xl flex items-center justify-center gap-2 font-medium hover:bg-purple-800 hover:shadow-md"
        >
          <p>{t("continueButton")}</p>
          <ArrowRight className="size-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-10">
      {/* Verify OTP Form */}
      <div className="space-y-3">
        <h1 className="text-5xl font-semibold">{t("title")}</h1>
        <p className="text-2xl text-[#1F1F1F] font-[400] tracking-wider">
          {t("subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* OTP Input Fields */}
        <div className="flex justify-center space-x-3">
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
              className="w-16 h-16 text-center text-2xl font-semibold bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg focus:border-purple focus:ring-2 focus:ring-purple/20 outline-none"
            />
          ))}
        </div>

        <Button
          type="submit"
          disabled={otp.join("").length !== 6 || isLoading}
          className="w-full bg-purple h-16 text-xl flex items-center justify-center gap-2 font-medium hover:bg-purple-800 hover:shadow-md disabled:bg-gray-300"
        >
          <p>{isLoading ? t("verifying") : t("verifyButton")}</p>
          <ArrowRight className="size-6" />
        </Button>
      </form>

      {/* Resend OTP */}
      <div className="pt-4">
        <p className="text-lg font-medium text-gray-500">
          {t("resendText")}{" "}
          <button
            onClick={handleResend}
            className="text-purple hover:text-purple-800 font-medium"
          >
            {t("resendButton")}
          </button>
        </p>
      </div>

      {/* Back to Sign In */}
      <div className="pt-4">
        <Link
          href="/sign-in"
          className="text-purple hover:text-purple-800 font-medium text-lg"
        >
          {t("backToSignIn")}
        </Link>
      </div>
    </div>
  );
}
