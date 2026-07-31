"use client";

import { BASE_PATH } from "@/config";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Certificates() {
  const { t } = useLanguage();

  return (
    <section id="certificates">
      <div className="section-inner">
        <div className="section-tag reveal" data-parallax="0.08">{t.certificates.tag}</div>
        <h2 className="section-title reveal" data-parallax="0.05">{t.certificates.title}</h2>
        <div className="certificates-grid">
          <div className="certificate-card border-gradient glass reveal-left">
            <div className="certificate-img">
              <img src={`${BASE_PATH}/img/Certificado_DevOps.jpg`} alt="DevOps" />
            </div>
            <div className="card-body">
              <h3>Hard Devs</h3>
              <p>{t.certificates.devops}</p>
            </div>
          </div>
          <div className="certificate-card border-gradient glass reveal-right">
            <div className="certificate-img">
              <img
                src={`${BASE_PATH}/img/Certificado_OBS.jpg`}
                alt="Creative Thinking & Innovation — OBS"
              />
            </div>
            <div className="card-body">
              <h3>OBS Business School</h3>
              <p>{t.certificates.obs}</p>
            </div>
          </div>
          <div className="certificate-card border-gradient glass reveal-left">
            <div className="certificate-img">
              <img
                src={`${BASE_PATH}/img/MASTER.jpg`}
                alt="Master in Cybersecurity"
              />
            </div>
            <div className="card-body">
              <h3>Master in Cybersecurity</h3>
              <p>{t.certificates.master}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
