"use client";

import { useRef } from "react";
import { useCardTilt } from "@/hooks/useCardTilt";
import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "./MagneticButton";
import { BASE_PATH } from "@/config";

function ProjectCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  useCardTilt(cardRef);

  return (
    <div ref={cardRef} className={`project-card ${className}`}>
      {children}
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-tag reveal">{t.projects.tag}</div>
        <h2 className="section-title reveal">{t.projects.title}</h2>
        <div className="projects-grid">
          {/* SAGESPRA - Featured */}
          <ProjectCard className="border-gradient featured glass reveal">
            <div className="card-header">
              <div className="card-icon">&#127970;</div>
              <MagneticButton
                href="https://github.com/IngJefersonGil"
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8599;
              </MagneticButton>
            </div>
            <div className="gallery">
              <img src={`${BASE_PATH}/img/sagespra_1.png`} alt="SAGESPRA Login" />
              <img src={`${BASE_PATH}/img/sagespra_2.png`} alt="SAGESPRA Dashboard" />
              <img src={`${BASE_PATH}/img/sagespra_3.png`} alt="SAGESPRA Form" />
              <img src={`${BASE_PATH}/img/sagespra_4.png`} alt="SAGESPRA Metrics" />
            </div>
            <div className="card-body">
              <h3>{t.projects.sagespra.title}</h3>
              <p>{t.projects.sagespra.desc}</p>
              <div className="card-tags">
                {t.projects.sagespra.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </ProjectCard>

          {/* CRM */}
          <ProjectCard className="border-gradient glass reveal">
            <div className="card-header">
              <div className="card-icon">&#128202;</div>
              <span className="card-link">&#8599;</span>
            </div>
            <div className="card-body">
              <h3>{t.projects.crm.title}</h3>
              <p>{t.projects.crm.desc}</p>
              <div className="card-tags">
                {t.projects.crm.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </ProjectCard>

          {/* E-commerce */}
          <ProjectCard className="border-gradient glass reveal">
            <div className="card-header">
              <div className="card-icon">&#128722;</div>
              <MagneticButton
                href={`${BASE_PATH}/e-commerce-demo/e-com.html`}
                className="card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                &#8599;
              </MagneticButton>
            </div>
            <div className="card-body">
              <h3>{t.projects.ecommerce.title}</h3>
              <p>{t.projects.ecommerce.desc}</p>
              <div className="card-tags">
                {t.projects.ecommerce.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <a
                href={`${BASE_PATH}/e-commerce-demo/e-com.html`}
                className="btn-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.projects.ecommerce.demo} <span>&rarr;</span>
              </a>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
