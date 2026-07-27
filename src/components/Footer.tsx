"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <p>{t.footer.copyright}</p>
      <div className="footer-dot" />
      <p>{t.footer.designed} &#9829;</p>
    </footer>
  );
}
