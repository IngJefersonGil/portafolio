"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import MagneticButton from "./MagneticButton";
import { BASE_PATH } from "@/config";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-tag reveal" data-parallax="0.08">{t.projects.tag}</div>
        <h2 className="section-title reveal" data-parallax="0.05">{t.projects.title}</h2>
        <div className="projects-grid">
          {/* SAGESPRA - Featured */}
          <div className="project-card border-gradient featured glass reveal">
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
          </div>

          {/* CRM */}
          <div className="project-card border-gradient glass reveal">
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
          </div>

          {/* E-commerce */}
          <div className="project-card border-gradient glass reveal">
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
          </div>
        </div>
      </div>
    </section>
  );
}
