export default function Achievements() {
  return (
    <section id="achievements">
      <div className="section-inner">
        <div className="section-tag reveal">Trayectoria</div>
        <h2 className="section-title reveal">Logros</h2>
        <div className="achievements-list">
          <div className="achievement-item border-gradient glass reveal-left">
            <span className="achievement-icon">&#127891;</span>
            <div>
              <div className="achievement-text">Ingeniero en Software</div>
              <div className="achievement-sub">
                Título profesional con enfoque en arquitectura y sistemas
                distribuidos.
              </div>
            </div>
          </div>

          <div className="achievement-item border-gradient glass reveal-right">
            <span className="achievement-icon">&#128272;</span>
            <div>
              <div className="achievement-text">Máster en Ciberseguridad</div>
              <div className="achievement-sub">
                Especialización en desarrollo de software seguro.
              </div>
            </div>
          </div>

          <div className="achievement-item border-gradient glass reveal-left">
            <span className="achievement-icon">&#127942;</span>
            <div>
              <div className="achievement-text">
                Ganador — Concurso Programación
              </div>
              <div className="achievement-sub">
                Primer lugar en competencia de algoritmia y desarrollo ágil.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
