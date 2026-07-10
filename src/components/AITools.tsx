import { BASE_PATH } from "@/config";

export default function AITools() {
  return (
    <section id="ai-tools">
      <div className="section-inner">
        <div className="section-tag reveal">Productividad</div>
        <h2 className="section-title reveal">Herramientas de IA</h2>
        <p className="arch-desc reveal">
          Integro agentes de IA en mi flujo de trabajo para acelerar el
          desarrollo, depurar código más rápido y mantener la calidad del
          software.
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
            <h4>OpenCode</h4>
            <p>
              Agente de codificación AI open-source que ejecuto en la terminal.
              Asiste en refactorización, debugging y generación de código con
              contexto completo del proyecto.
            </p>
            <div className="ai-card-tags">
              <span className="tag">Terminal AI</span>
              <span className="tag">Multi-proveedor</span>
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#128161;</div>
            <h4>Asistencia Contextual</h4>
            <p>
              Uso Context7 para obtener documentación actualizada de
              librerías en tiempo real, evitando depender de mi conocimiento
              obsoleto y asegurando código con APIs correctas.
            </p>
            <div className="ai-card-tags">
              <span className="tag">Docs en vivo</span>
              <span className="tag">Context7</span>
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#9881;</div>
            <h4>Automatización</h4>
            <p>
              Agentes especializados que ejecutan tareas repetitivas:
              análisis de codebase, búsqueda de archivos, generación de
              tests y verificación de builds automáticamente.
            </p>
            <div className="ai-card-tags">
              <span className="tag">MCP</span>
              <span className="tag">Agents</span>
            </div>
          </div>

          <div className="ai-card bento-item border-gradient glass reveal">
            <div className="ai-card-icon">&#128640;</div>
            <h4>Velocidad de Desarrollo</h4>
            <p>
              Combinación de IA + buenas prácticas: la IA acelera la
              implementación mientras yo me enfoco en la arquitectura,
              decisiones de diseño y calidad del código.
            </p>
            <div className="ai-card-tags">
              <span className="tag">Flujo ágil</span>
              <span className="tag">Resultados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
