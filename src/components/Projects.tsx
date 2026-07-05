"use client";

import { useRef } from "react";
import { useCardTilt } from "@/hooks/useCardTilt";
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
  return (
    <section id="projects">
      <div className="section-inner">
        <div className="section-tag reveal">Trabajo</div>
        <h2 className="section-title reveal">Proyectos Destacados</h2>
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
              <img src={`${BASE_PATH}/img/sagespra_3.png`} alt="SAGESPRA Formulario" />
              <img src={`${BASE_PATH}/img/sagespra_4.png`} alt="SAGESPRA Metricas" />
            </div>
            <div className="card-body">
              <h3>SAGESPRA</h3>
              <p>
                Sistema de gestión empresarial para centralizar operaciones y
                procesos administrativos. Diseñado para escalar con el
                crecimiento del negocio.
              </p>
              <div className="card-tags">
                <span className="tag">Gestión empresarial</span>
                <span className="tag">Dashboard</span>
                <span className="tag">Reportes</span>
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
              <h3>CRM Empresarial</h3>
              <p>
                Plataforma para gestión de clientes, seguimiento de ventas y
                control de operaciones.
              </p>
              <div className="card-tags">
                <span className="tag">CRM</span>
                <span className="tag">Ventas</span>
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
              <h3>Plataforma E-commerce</h3>
              <p>
                Sistema de comercio electrónico diseñado para digitalizar
                negocios tradicionales.
              </p>
              <div className="card-tags">
                <span className="tag">E-commerce</span>
                <span className="tag">Pagos</span>
              </div>
              <a
                href={`${BASE_PATH}/e-commerce-demo/e-com.html`}
                className="btn-demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Demo Online <span>&rarr;</span>
              </a>
            </div>
          </ProjectCard>
        </div>
      </div>
    </section>
  );
}
