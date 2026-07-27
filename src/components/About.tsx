"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-tag reveal">{t.about.tag}</div>
        <h2 className="section-title reveal">{t.about.title}</h2>
        <div className="bento-grid about-bento">
          <div
            className="bento-item border-gradient glass about-main reveal"
            style={{ gridColumn: "span 2", gridRow: "span 2" }}
          >
            <h3>{t.about.philosophy}</h3>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">3+</span>
            <span className="stat-label">{t.about.exp}</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">10+</span>
            <span className="stat-label">{t.about.projects}</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">1</span>
            <span className="stat-label">{t.about.award}</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">8+</span>
            <span className="stat-label">{t.about.techStack}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
