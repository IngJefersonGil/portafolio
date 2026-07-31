"use client";

import { useScrambleText } from "@/hooks/useScrambleText";
import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  useScrambleText();
  const { t } = useLanguage();

  return (
    <header className="hero">
      <div className="hero-bg-elements">
        <div className="glow-1" data-parallax="0.15" />
        <div className="glow-2" data-parallax="0.25" />
        <div className="glow-3" data-parallax="0.1" />
      </div>
      <div className="hero-content" data-parallax="0.05">
        <h1>
          {t.hero.line1}<br />
          <span className="line2">{t.hero.line2}</span>
        </h1>
        <p>
          {t.hero.description}
        </p>
        <div className="hero-cta">
          <MagneticButton href="#projects" className="btn-primary">
            {t.hero.ctaProjects} <span>&rarr;</span>
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            {t.hero.ctaContact}
          </MagneticButton>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>{t.hero.scroll}</span>
      </div>
    </header>
  );
}
