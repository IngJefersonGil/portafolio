"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Architecture() {
  const { t } = useLanguage();

  return (
    <section id="architecture">
      <div className="section-inner">
        <div className="section-tag reveal" data-parallax="0.08">{t.architecture.tag}</div>
        <h2 className="section-title reveal" data-parallax="0.05">{t.architecture.title}</h2>
        <p className="arch-desc reveal">
          {t.architecture.desc}
        </p>
        <div className="arch-grid">
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128421;</span>
            <h4>{t.architecture.frontend}</h4>
            <p>{t.architecture.frontendDesc}</p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#9881;</span>
            <h4>{t.architecture.backend}</h4>
            <p>{t.architecture.backendDesc}</p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128452;</span>
            <h4>{t.architecture.database}</h4>
            <p>{t.architecture.databaseDesc}</p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128268;</span>
            <h4>{t.architecture.external}</h4>
            <p>{t.architecture.externalDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
