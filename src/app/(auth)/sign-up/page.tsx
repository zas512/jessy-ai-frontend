"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  const t = useTranslations("SignUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Email sign-up:", { email, password, confirmPassword });
    setTimeout(() => {
      setIsLoading(false);
      router.push("/verfiy-otp");
    }, 2000);
  };

  return (
    <div className="text-center space-y-10">
      {/* Welcome Message */}
      <div className="space-y-3">
        <h1 className="text-5xl font-semibold">{t("welcome")}</h1>
        <p className="text-2xl text-[#1F1F1F] font-[400] tracking-wider">
          {t("subtitle")}
        </p>
      </div>

      {/* Email Sign Up Form */}
      <form onSubmit={handleEmailSubmit} className="space-y-6">
        <div className="space-y-3">
          <label
            htmlFor="email"
            className="block text-xl font-semibold text-left"
          >
            {t("emailForm.emailLabel")}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("emailForm.emailPlaceholder")}
            required
            className="w-full bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg h-16 px-6 placeholder:text-xl placeholder:text-[#1F1F1F]/10"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="password"
            className="block text-xl font-semibold text-left"
          >
            {t("emailForm.passwordLabel")}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("emailForm.passwordPlaceholder")}
            required
            className="w-full bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg h-16 px-6 placeholder:text-xl placeholder:text-[#1F1F1F]/10"
          />
        </div>

        <div className="space-y-3">
          <label
            htmlFor="confirmPassword"
            className="block text-xl font-semibold text-left"
          >
            {t("emailForm.confirmPasswordLabel")}
          </label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder={t("emailForm.confirmPasswordPlaceholder")}
            required
            className="w-full bg-[#F9F9F9] border border-[#1F1F1F]/10 rounded-lg h-16 px-6 placeholder:text-xl placeholder:text-[#1F1F1F]/10"
          />
        </div>

        {/* Sign Up Button */}
        <div className="space-y-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-purple h-16 text-xl flex items-center justify-center gap-2 font-medium hover:bg-purple-800 hover:shadow-md disabled:bg-gray-300"
          >
            <p>
              {isLoading
                ? t("emailForm.signingUp")
                : t("emailForm.signUpButton")}
            </p>
            <ArrowRight className="size-6" />
          </Button>
        </div>
      </form>

      {/* Additional Links */}
      <p className="text-lg font-medium text-gray-500">
        {t("hasAccount")}{" "}
        <Link
          href="/sign-in"
          className="text-purple hover:text-purple-800 font-medium"
        >
          {t("signIn")}
        </Link>
      </p>
    </div>
  );
}
