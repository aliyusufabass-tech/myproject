import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'
import PageMeta from '../components/PageMeta'
import aboutHeroImage from '../assets/40 - Copy.jpeg'
import aboutGridImage from '../assets/38.jpeg'

const stats = [
  { value: '500+', label: 'Clientes Satisfeitos' },
  { value: '50+', label: 'Pacotes de Tours' },
  { value: '5+', label: 'Anos de Experiencia' },
]

const services = [
  {
    title: 'Tours de Praia',
    text: 'Descubra praias de Zanzibar, bancos de areia e escapadelas na ilha com tours costeiros cuidadosamente planeados.',
  },
  {
    title: 'Viagens de Safari',
    text: 'Conheca a vida selvagem da Tanzania com safaris bem organizados nos principais parques e reservas.',
  },
  {
    title: 'Transfers',
    text: 'Viaje com conforto atraves de Transfers confiaveis entre aeroporto e hotel, com coordenacao local atenciosa.',
  },
]

function AboutPage() {
  const { t } = useTranslation()

  return (
    <>
      <PageMeta
        title={t('page.about.page.sobre.nos')}
        description={t('page.about.page.conheca.a.zan.excursions.a.nossa.historia.servicos')}
      />

      <section
        className="about-hero"
        style={{ '--about-hero-image': `url(${aboutHeroImage})` }}
      >
        <div className="container about-hero__content">
          <h1>{t('page.about.page.descubra.zanzibar.connosco')}</h1>
          <p>{t('page.about.page.o.seu.parceiro.de.viagem.de.confianca.para')}</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container about-page-container">
          <div className="about-grid">
            <img src={aboutGridImage} alt={t('page.about.page.zanzibar.ocean.experience')} />

            <div className="about-text">
              <h2>{t('page.about.page.sobre.a.zan.excursions')}</h2>
              <p>
                {t('page.about.page.a.zan.excursions.e.uma.empresa.profissional.de')}
              </p>
              <p>
                {t('page.about.page.focamo.nos.na.qualidade.do.servico.seguranca.e')}
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{t(stat.label)}</p>
              </div>
            ))}
          </div>

          <div className="about-services">
            <h2>{t('page.about.page.o.que.oferecemos')}</h2>
            <div className="about-service-boxes">
              {services.map((service) => (
                <article className="about-service-card" key={service.title}>
                  <h3>{t(service.title)}</h3>
                  <p>{t(service.text)}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <h2>{t('page.about.page.comece.a.sua.viagem.hoje')}</h2>
            <p>{t('page.about.page.reserve.a.sua.experiencia.hoje.e.descubra.zanzibar')}</p>
            <Link className="about-cta__button" to="/tours">
              {t('page.about.page.reservar.agora')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

