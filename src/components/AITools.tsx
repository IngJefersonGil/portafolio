"use client";

import { BASE_PATH } from "@/config";
import { useLanguage } from "@/i18n/LanguageContext";

export default function AITools() {
  const { t } = useLanguage();

  return (
    <section id="ai-tools">
      <div className="section-inner">
        <div className="section-tag reveal">{t.aiTools.tag}</div>
        <h2 className="section-title reveal">{t.aiTools.title}</h2>
        <p className="arch-desc reveal">
          {t.aiTools.desc}
        </p>
        <div className="ai-grid">
          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">
              <img
                src={`${BASE_PATH}/img/opencode-logo.svg`}
                alt="OpenCode"
                width="32"
                height="32"
              />
            </div>
            <h4>{t.aiTools.opencode.title}</h4>
            <p>{t.aiTools.opencode.desc}</p>
            <div className="ai-card-tags">
              {t.aiTools.opencode.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#128161;</div>
            <h4>{t.aiTools.contextual.title}</h4>
            <p>{t.aiTools.contextual.desc}</p>
            <div className="ai-card-tags">
              {t.aiTools.contextual.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#9881;</div>
            <h4>{t.aiTools.automation.title}</h4>
            <p>{t.aiTools.automation.desc}</p>
            <div className="ai-card-tags">
              {t.aiTools.automation.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#128640;</div>
            <h4>{t.aiTools.speed.title}</h4>
            <p>{t.aiTools.speed.desc}</p>
            <div className="ai-card-tags">
              {t.aiTools.speed.tags.map((tag) => (
                <span className="tag" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
