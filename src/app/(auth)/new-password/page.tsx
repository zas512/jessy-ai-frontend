"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NewPasswordPage() {
  const router = useRouter();
  const t = useTranslations("NewPassword");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setIsLoading(true);
    // Handle password reset logic here
    console.log("New password set:", { password, confirmPassword });

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
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

        {/* Sign In Button */}
        <Button
          onClick={() => router.push("/sign-in")}
          className="w-full bg-purple h-16 text-xl flex items-center justify-center gap-2 font-medium hover:bg-purple-800 hover:shadow-md"
        >
          <p>{t("signInButton")}</p>
          <ArrowRight className="size-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="text-center space-y-10">
      {/* New Password Form */}
      <div className="space-y-3">
        <h1 className="text-5xl font-semibold">{t("title")}</h1>
        <p className="text-2xl text-[#1F1F1F] font-[400] tracking-wider">
          {t("subtitle")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-3">
          <label
            htmlFor="password"
            className="block text-xl font-semibold text-left"
          >
            {t("passwordLabel")}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("passwordPlaceholder")}
            required
            className="w-full bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg h-16 px-6 placeholder:text-xl placeholder:text-[#1F1F1F]/10"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="confirmPassword"
            className="block text-xl font-semibold text-left"
          >
            {t("confirmPasswordLabel")}
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t("confirmPasswordPlaceholder")}
            required
            className="w-full bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg h-16 px-6 placeholder:text-xl placeholder:text-[#1F1F1F]/10"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading || !password || !confirmPassword}
          className="w-full bg-purple h-16 text-xl flex items-center justify-center gap-2 font-medium hover:bg-purple-800 hover:shadow-md disabled:bg-gray-300"
        >
          <p>{isLoading ? t("resetting") : t("resetButton")}</p>
          <ArrowRight className="size-6" />
        </Button>
      </form>

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
