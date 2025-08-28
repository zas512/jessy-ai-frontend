import type { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export default function AuthLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const t = useTranslations("AuthLanding");

  return (
    <div className="min-h-screen flex">
      <LanguageSwitcher />
      <section className="hidden w-1/2 min-h-screen lg:flex flex-col bg-light-pink">
        <div className="flex h-2/3 items-center justify-center">
          <Image
            src="/jessy_logo.svg"
            alt="Healthcare Professional"
            width={450}
            height={450}
            priority
          />
        </div>
        {/* Purple overlay with text */}
        <div className="bg-purple h-1/3 flex flex-col items-center justify-center text-white p-10">
          <p className="text-xl font-semibold text-center mb-6">
            {t("tagline")}
          </p>
          <section className="bg-white/5 w-[460px] space-y-1 p-10 border-l-2 border-white text-xl font-semibold text-white">
            <p>{t("features.healthMonitoring")}</p>
            <p>{t("features.medicationReminder")}</p>
            <p>{t("features.emergencySupport")}</p>
            <p>{t("features.voiceInteractions")}</p>
          </section>
        </div>
      </section>
      {/* Right Panel - Authentication Form */}
      <section className="w-1/2 flex items-center justify-center p-4 sm:p-8 flex-1">
        <div className="w-full max-w-md">{children}</div>
      </section>
    </div>
  );
}
