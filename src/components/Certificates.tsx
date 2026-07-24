import { BASE_PATH } from "@/config";

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="section-inner">
        <div className="section-tag reveal">Certificados</div>
        <h2 className="section-title reveal">Certificados</h2>
        <div className="certificates-grid">
          <div className="certificate-card border-gradient glass reveal-left">
            <div className="certificate-img">
              <img src={`${BASE_PATH}/img/Certificado_DevOps.jpg`} alt="DevOps" />
            </div>
            <div className="card-body">
              <h3>Hard Devs</h3>
              <p>Introducción a DevOps</p>
            </div>
          </div>
          <div className="certificate-card border-gradient glass reveal-right">
            <div className="certificate-img">
              <img
                src={`${BASE_PATH}/img/Certificado_OBS.jpg`}
                alt="Pensamiento creativo e innovación — OBS"
              />
            </div>
            <div className="card-body">
              <h3>OBS Business School</h3>
              <p>Pensamiento creativo e innovación</p>
            </div>
          </div>
          <div className="certificate-card border-gradient glass reveal-left">
            <div className="certificate-img">
              <img
                src={`${BASE_PATH}/img/MASTER.jpg`}
                alt="Máster en Ciberseguridad"
              />
            </div>
            <div className="card-body">
              <h3>Máster en Ciberseguridad</h3>
              <p>Especialización en desarrollo seguro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
