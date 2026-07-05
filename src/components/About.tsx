export default function About() {
  return (
    <section id="about">
      <div className="section-inner">
        <div className="section-tag reveal">Perfil</div>
        <h2 className="section-title reveal">Sobre mí</h2>
        <div className="bento-grid about-bento">
          <div
            className="bento-item border-gradient glass about-main reveal"
            style={{ gridColumn: "span 2", gridRow: "span 2" }}
          >
            <h3>Mi Filosofía</h3>
            <p>
              Ingeniero de software enfocado en crear soluciones reales para
              negocios. Especializado en plataformas de gestión empresarial, CRM
              y arquitectura escalable.
            </p>
            <p>
              Creo que el mejor software es aquel que resuelve problemas reales
              con elegancia técnica y sin fricciones para el usuario final.
            </p>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">3+</span>
            <span className="stat-label">Años de Exp.</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">10+</span>
            <span className="stat-label">Proyectos</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">1</span>
            <span className="stat-label">Premio</span>
          </div>
          <div className="bento-item border-gradient glass stat-card reveal">
            <span className="stat-number">8+</span>
            <span className="stat-label">Tech Stack</span>
          </div>
        </div>
      </div>
    </section>
  );
}
