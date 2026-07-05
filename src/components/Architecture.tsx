export default function Architecture() {
  return (
    <section id="architecture">
      <div className="section-inner">
        <div className="section-tag reveal">Diseño técnico</div>
        <h2 className="section-title reveal">Arquitectura de Sistemas</h2>
        <p className="arch-desc reveal">
          Mis proyectos se estructuran con arquitecturas modulares y APIs REST,
          con capas claramente separadas para máxima escalabilidad.
        </p>
        <div className="arch-grid">
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128421;</span>
            <h4>Frontend</h4>
            <p>
              Interfaces reactivas, accesibles y optimizadas para el usuario
              final.
            </p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#9881;</span>
            <h4>Backend</h4>
            <p>
              Lógica de negocio robusta, APIs REST documentadas y seguras.
            </p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128452;</span>
            <h4>Base de datos</h4>
            <p>
              Modelos relacionales y no relacionales según el caso de uso.
            </p>
          </div>
          <div className="arch-layer reveal">
            <span className="arch-icon">&#128268;</span>
            <h4>Servicios externos</h4>
            <p>
              Integración con APIs de terceros, pagos, notificaciones y más.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
