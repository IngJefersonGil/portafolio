"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Achievements() {
  const { t } = useLanguage();

  return (
    <section id="achievements">
      <div className="section-inner">
        <div className="section-tag reveal">{t.achievements.tag}</div>
        <h2 className="section-title reveal">{t.achievements.title}</h2>
        <div className="achievements-list">
          <div className="achievement-item border-gradient glass reveal-left">
            <span className="achievement-icon">&#127891;</span>
            <div>
              <div className="achievement-text">{t.achievements.engineer}</div>
              <div className="achievement-sub">
                {t.achievements.engineerDesc}
              </div>
            </div>
          </div>

          <div className="achievement-item border-gradient glass reveal-right">
            <span className="achievement-icon">&#128272;</span>
            <div>
              <div className="achievement-text">{t.achievements.master}</div>
              <div className="achievement-sub">
                {t.achievements.masterDesc}
              </div>
            </div>
          </div>

          <div className="achievement-item border-gradient glass reveal-left">
            <span className="achievement-icon">&#127942;</span>
            <div>
              <div className="achievement-text">
                {t.achievements.winner}
              </div>
              <div className="achievement-sub">
                {t.achievements.winnerDesc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
