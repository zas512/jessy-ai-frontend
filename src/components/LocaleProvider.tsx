"use client";

import { useState, useEffect } from "react";
import { Providers } from "@/providers/Providers";

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const savedLocale = localStorage.getItem("language") || "en";
    setLocale(savedLocale);
  }, []);

  return <Providers locale={locale}>{children}</Providers>;
};
