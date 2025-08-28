"use client";
import { useState, useEffect } from "react";

export const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState<"en" | "sp">("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as "en" | "sp";
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "sp" : "en";
    setCurrentLang(newLang);
    localStorage.setItem("language", newLang);
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm"
    >
      {currentLang === "en" ? "🇪🇸 Español" : "🇺🇸 English"}
    </button>
  );
};
