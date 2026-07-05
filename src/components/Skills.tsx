"use client";

import { useEffect } from "react";

export default function Skills() {
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
        <div className="section-tag reveal">Stack</div>
        <h2 className="section-title reveal">Habilidades Técnicas</h2>
        <div className="bento-grid skills-bento">
          <div
            className="bento-item border-gradient glass skill-group reveal"
            style={{ gridColumn: "span 2" }}
          >
            <h4>Frontend &amp; Mobile</h4>
            <div className="skill-items">
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">React</span>
              <span className="skill-chip">HTML / CSS</span>
              <span className="skill-chip">Aplicaciones móviles</span>
            </div>
          </div>

          <div
            className="bento-item border-gradient glass skill-group reveal"
            style={{ gridRow: "span 2", gridColumn: "span 2" }}
          >
            <h4>Backend &amp; Infraestructura</h4>
            <div className="skill-items">
              <span className="skill-chip">Node.js</span>
              <span className="skill-chip">REST APIs</span>
              <span className="skill-chip">Bases de datos</span>
              <span className="skill-chip">Arquitectura de Software</span>
              <span className="skill-chip">Docker</span>
              <span className="skill-chip">CI/CD</span>
              <span className="skill-chip">Redis</span>
            </div>
          </div>

          <div className="bento-item border-gradient glass skill-group reveal">
            <h4>Especialidades</h4>
            <div className="skill-items">
              <span className="skill-chip">Ciberseguridad</span>
              <span className="skill-chip">Desarrollo Web</span>
              <span className="skill-chip">Sistemas empresariales</span>
            </div>
          </div>

          <div className="bento-item border-gradient glass skill-group reveal">
            <h4>Idiomas</h4>
            <div className="skill-items">
              <span className="skill-chip">Español — Nativo</span>
              <span className="skill-chip">Inglés — C1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
