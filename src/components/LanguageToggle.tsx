"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();
  const [isFloated, setIsFloated] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsFloated(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      className={`lang-toggle${isFloated ? " floating" : ""}`}
      onClick={toggleLanguage}
      aria-label={language === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
