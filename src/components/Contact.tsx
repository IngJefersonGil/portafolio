"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div className="section-tag reveal">{t.contact.tag}</div>
          <h2 className="section-title reveal">{t.contact.title}</h2>
          <p className="contact-sub reveal">
            {t.contact.subtitle}
          </p>
          <div className="contact-links reveal">
            <a href="mailto:ing.jefersongil@gmail.com" className="contact-card">
              <span className="icon">&#9993;</span>
              {t.contact.email}
            </a>
            <a
              href="https://github.com/IngJefersonGil"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">&#9000;</span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeferson-gil-b2241b270"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">&#128279;</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
