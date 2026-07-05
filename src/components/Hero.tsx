"use client";

import { useScrambleText } from "@/hooks/useScrambleText";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  useScrambleText();

  return (
    <header className="hero">
      <div className="hero-bg-elements">
        <div className="glow-1" />
        <div className="glow-2" />
        <div className="glow-3" />
      </div>
      <div className="hero-content">
        <h1>
          Software<br />
          <span className="line2">Engineer</span>
        </h1>
        <p>
          Arquitecto de soluciones digitales y desarrollador full-stack.
          Transformo ideas complejas en interfaces elegantes y sistemas
          escalables.
        </p>
        <div className="hero-cta">
          <MagneticButton href="#projects" className="btn-primary">
            Explorar Proyectos <span>&rarr;</span>
          </MagneticButton>
          <MagneticButton href="#contact" className="btn-ghost">
            Hablemos
          </MagneticButton>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>SCROLL</span>
      </div>
    </header>
  );
}
