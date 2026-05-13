import PageMeta from '../components/PageMeta'
import contactHero from '../assets/picha.jpeg'

function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contacto"
        description="Contacte a Zan Excursions para reservas, orientacao de viagem e planeamento personalizado em Zanzibar."
      />

      <section className="contact-hero" style={{ '--contact-hero-image': `url(${contactHero})` }}>
        <div className="container contact-hero__content">
          <h1>Contacto</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-page-grid">
            <div className="contact-info-box contact-info-box--wide">
              <h2>Fale com a Zan Excursions</h2>
              <p>Envie os detalhes da sua viagem pelo formulario ou contacte-nos diretamente.</p>

              <div className="contact-info-item">
                <strong>Email:</strong>
                <p>
                  <a href="mailto:info@zanexcursions.com">info@zanexcursions.com</a>
                </p>
              </div>

              <div className="contact-info-item">
                <strong>Telefone:</strong>
                <p>+255 792 692 084</p>
              </div>

              <div className="contact-info-item">
                <strong>Localizacao:</strong>
                <p>Zanzibar, Tanzania</p>
              </div>

              <div className="contact-info-item">
                <strong>Horario de Atendimento:</strong>
                <p>Seg - Dom: 8:00 - 20:00</p>
              </div>
            </div>

            <div className="contact-form-box">
              <h2>Partilhe os detalhes da sua viagem</h2>
              <form className="contact-page-form">
                <div className="contact-form-group">
                  <label htmlFor="contact-fullname">Nome completo</label>
                  <input id="contact-fullname" type="text" placeholder="O seu nome completo" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Numero de telefone</label>
                  <input id="contact-phone" type="tel" placeholder="+255 7XX XXX XXX" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message">Mensagem</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    placeholder="Fale-nos das datas preferidas, tamanho do grupo e pedidos especiais."
                    required
                  />
                </div>
                <button className="contact-submit-btn" type="submit">
                  Enviar informacoes de viagem
                </button>
              </form>
            </div>
          </div>

          <div className="contact-map-box">
            <iframe
              title="Mapa de Zanzibar"
              src="https://www.google.com/maps?q=Zanzibar&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
