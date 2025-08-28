"use client";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import enMessages from "../../messages/en.json";
import spMessages from "../../messages/sp.json";

interface ProvidersProps {
  children: ReactNode;
  locale?: string;
}

export const Providers = ({ children, locale = "en" }: ProvidersProps) => {
  const messages = locale === "sp" ? spMessages : enMessages;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Provider store={store}>{children}</Provider>
    </NextIntlClientProvider>
  );
};
