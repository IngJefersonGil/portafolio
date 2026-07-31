"use client";

import { useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Skills() {
  const { t } = useLanguage();

  useEffect(() => {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chips = entry.target.querySelectorAll(".skill-chip");
            chips.forEach((chip, i) => {
              setTimeout(() => {
                chip.classList.add("revealed");
              }, i * 100);
            });
            skillObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    document
      .querySelectorAll(".skill-items")
      .forEach((el) => skillObserver.observe(el));

    return () => skillObserver.disconnect();
  }, []);

  return (
    <section id="skills">
      <div className="section-inner">
        <div className="section-tag reveal" data-parallax="0.08">{t.skills.tag}</div>
        <h2 className="section-title reveal" data-parallax="0.05">{t.skills.title}</h2>
        <div className="bento-grid skills-bento">
          <div
            className="bento-item border-gradient glass skill-group reveal"
            style={{ gridColumn: "span 2" }}
          >
            <h4>{t.skills.frontendMobile}</h4>
            <div className="skill-items">
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">React</span>
              <span className="skill-chip">HTML / CSS</span>
              <span className="skill-chip">{t.skills.mobileApps}</span>
            </div>
          </div>

          <div
            className="bento-item border-gradient glass skill-group reveal"
            style={{ gridRow: "span 2", gridColumn: "span 2" }}
          >
            <h4>{t.skills.backendInfra}</h4>
            <div className="skill-items">
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">REST APIs</span>
              <span className="skill-chip">{t.skills.databases}</span>
              <span className="skill-chip">{t.skills.softwareArch}</span>
              <span className="skill-chip">Docker</span>
              <span className="skill-chip">CI/CD</span>
              <span className="skill-chip">Redis</span>
            </div>
          </div>

          <div className="bento-item border-gradient glass skill-group reveal">
            <h4>{t.skills.specialties}</h4>
            <div className="skill-items">
              <span className="skill-chip">{t.skills.cybersecurity}</span>
              <span className="skill-chip">{t.skills.webDev}</span>
              <span className="skill-chip">{t.skills.enterpriseSystems}</span>
            </div>
          </div>

          <div className="bento-item border-gradient glass skill-group reveal">
            <h4>{t.skills.languages}</h4>
            <div className="skill-items">
              <span className="skill-chip">{t.skills.spanish}</span>
              <span className="skill-chip">{t.skills.english}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
