import { useTranslation } from '../i18n'
import PageMeta from '../components/PageMeta'
import contactHero from '../assets/picha.jpeg'

function ContactPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta
        title={t('page.contact.page.contacto')}
        description={t('page.contact.page.contacte.a.zan.excursions.para.reservas.orientacao.de')}
      />

      <section className="contact-hero" style={{ '--contact-hero-image': `url(${contactHero})` }}>
        <div className="container contact-hero__content">
          <h1>{t('page.contact.page.contacto')}</h1>
        </div>
      </section>

      <section className="section contact-page-section">
        <div className="container contact-page-container">
          <div className="contact-page-grid">
            <div className="contact-info-box contact-info-box--wide">
              <h2>{t('page.contact.page.fale.com.a.zan.excursions')}</h2>
              <p>{t('page.contact.page.envie.os.detalhes.da.sua.viagem.pelo.formulario')}</p>

              <div className="contact-info-item">
                <strong>{t('page.contact.page.email')}:</strong>
                <p>
                  <a href="mailto:info@zanexcursions.com">{t('page.contact.page.info.zanexcursions.com')}</a>
                </p>
              </div>

              <div className="contact-info-item">
                <strong>{t('page.contact.page.telefone')}:</strong>
                <p>+255 792 692 084</p>
              </div>

              <div className="contact-info-item">
                <strong>{t('page.contact.page.localizacao')}:</strong>
                <p>{t('page.contact.page.zanzibar.tanzania')}</p>
              </div>

              <div className="contact-info-item">
                <strong>{t('page.contact.page.horario.de.atendimento')}:</strong>
                <p>{t('page.contact.page.seg.dom.8.00.20.00')}</p>
              </div>
            </div>

            <div className="contact-form-box">
              <h2>{t('page.contact.page.partilhe.os.detalhes.da.sua.viagem')}</h2>
              <form className="contact-page-form">
                <div className="contact-form-group">
                  <label htmlFor="contact-fullname">{t('page.contact.page.nome.completo')}</label>
                  <input id="contact-fullname" type="text" placeholder={t('page.contact.page.o.seu.nome.completo')} required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">{t('page.contact.page.email')}</label>
                  <input id="contact-email" type="email" placeholder="you@example.com" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">{t('page.contact.page.numero.de.telefone')}</label>
                  <input id="contact-phone" type="tel" placeholder="+255 7XX XXX XXX" required />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-message">{t('page.contact.page.mensagem')}</label>
                  <textarea
                    id="contact-message"
                    rows="4"
                    placeholder={t('page.contact.page.fale.nos.das.datas.preferidas.tamanho.do.grupo')}
                    required
                  />
                </div>
                <button className="contact-submit-btn" type="submit">
                  {t('page.contact.page.enviar.informacoes.de.viagem')}
                </button>
              </form>
            </div>
          </div>

          <div className="contact-map-box">
            <iframe
              title={t('page.contact.page.mapa.de.zanzibar')}
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
