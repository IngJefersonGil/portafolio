export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <div className="contact-inner">
          <div className="section-tag reveal">Contacto</div>
          <h2 className="section-title reveal">Hablemos</h2>
          <p className="contact-sub reveal">
            ¿Tienes un proyecto en mente o quieres trabajar juntos? Estoy
            disponible para nuevas oportunidades.
          </p>
          <div className="contact-links reveal">
            <a href="mailto:ing.jefersongil@gmail.com" className="contact-card">
              <span className="icon">&#9993;</span>
              Email
            </a>
            <a
              href="https://github.com/IngJefersonGil"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">&#9000;</span>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jeferson-gil-b2241b270"
              className="contact-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">&#128279;</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
