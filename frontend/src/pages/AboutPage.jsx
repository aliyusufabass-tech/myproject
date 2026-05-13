import { Link } from 'react-router-dom'
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
  return (
    <>
      <PageMeta
        title="Sobre Nos"
        description="Conheca a Zan Excursions, a nossa historia, servicos e experiencia de viagem de confianca."
      />

      <section
        className="about-hero"
        style={{ '--about-hero-image': `url(${aboutHeroImage})` }}
      >
        <div className="container about-hero__content">
          <h1>Descubra Zanzibar Connosco</h1>
          <p>O seu parceiro de viagem de confianca para experiencias memoraveis</p>
        </div>
      </section>

      <section className="section about-page-section">
        <div className="container about-page-container">
          <div className="about-grid">
            <img src={aboutGridImage} alt="Zanzibar ocean experience" />

            <div className="about-text">
              <h2>Sobre a Zan Excursions</h2>
              <p>
                A Zan Excursions e uma empresa profissional de turismo que oferece experiencias
                de viagem cuidadosamente planeadas em Zanzibar e na Tanzania. De ferias de praia
                a safaris de vida selvagem, o nosso objetivo e tornar cada viagem inesquecivel.
              </p>
              <p>
                Focamo-nos na qualidade do servico, seguranca e satisfacao dos clientes, mostrando
                o melhor da natureza, cultura e aventura costeira.
              </p>
            </div>
          </div>

          <div className="about-stats">
            {stats.map((stat) => (
              <div className="about-stat" key={stat.label}>
                <h2>{stat.value}</h2>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="about-services">
            <h2>O Que Oferecemos</h2>
            <div className="about-service-boxes">
              {services.map((service) => (
                <article className="about-service-card" key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="about-cta">
            <h2>Comece a Sua Viagem Hoje</h2>
            <p>Reserve a sua experiencia hoje e descubra Zanzibar com confianca.</p>
            <Link className="about-cta__button" to="/tours">
              Reservar Agora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage

