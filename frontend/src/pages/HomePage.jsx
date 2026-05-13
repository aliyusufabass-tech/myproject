import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import TourFormatCard from '../components/TourFormatCard'
import { testimonials, zanzibarTours, safariTours } from '../data/tours'
import homeHeroImage from '../assets/image.jpeg'

const reasons = [
  {
    title: 'Conhecimento Local',
    text: 'A nossa equipa combina hospitalidade genuina com profundo conhecimento local e recomendacoes bem pensadas.',
  },
  {
    title: 'Planeamento Flexivel',
    text: 'Escolha experiencias privadas, itinerarios para familias ou transfers diretos com total confianca.',
  },
  {
    title: 'Servico de Confianca',
    text: 'Conte com comunicacao clara, pontualidade e apoio atencioso desde a chegada ate a partida.',
  },
]

const buildHomeCards = () => {
  const excursionCards = zanzibarTours.slice(0, 3).map((tour) => ({
    id: tour.id,
    badge: tour.type === 'half' ? 'Meio dia' : 'Dia inteiro',
    title: tour.title,
    summary: tour.summary,
    image: tour.image,
    price: tour.price,
    rating: tour.rating,
    detailUrl: `/tours/${tour.id}`,
  }))

  const safariCard = safariTours.slice(0, 1).map((tour) => ({
    id: tour.id,
    badge: 'Safari',
    title: tour.title,
    summary: tour.summary,
    image: tour.image,
    price: tour.price,
    rating: tour.rating,
    detailUrl: `/tours/${tour.id}`,
  }))

  return [...excursionCards, ...safariCard]
}

function HomePage() {
  const homeTourCards = useMemo(buildHomeCards, [])
  return (
    <>
      <PageMeta
        title="Início"
        description="Descubra tours, transfers e experiencias personalizadas na ilha com a Zan Excursions."
      />
      <section
        className="hero hero--home"
        style={{ '--home-hero-image': `url(${homeHeroImage})` }}
      >
        <div className="container hero__content">
          <h1>Descubra Zanzibar: onde cada onda conta uma historia e cada passo leva ao encanto.</h1>
          <p>
            A Zan Excursions cria experiencias autenticas na ilha - escapadelas de praia, rotas das especiarias e transfers que fluem tao suavemente quanto as marés.
          </p>
          <div className="hero__actions">
            <Button to="/tours">Explorar Tours</Button>
            <Button
              href="https://wa.me/255792692084"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Fale Connosco no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <section className="section tours-format-section">
        <div className="container">
          <SectionHeading
            eyebrow="Tours em Destaque"
            title="Tours selecionados que refletem as experiencias do nosso catalogo completo"
            text="Descubra a variedade de Zanzibar com experiencias escolhidas que combinam cultura, vida selvagem e momentos no oceano."
            align="center"
          />

          <div className="tour-format-grid">
            {homeTourCards.map((card) => (
              <TourFormatCard card={card} key={card.id} />
            ))}
          </div>

          <div className="tour-format-cta">
            <Button to="/tours" variant="secondary">
              Ver todos os tours
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            eyebrow="Por Que Escolher-nos"
            title="Apoio de viagem pessoal, confiavel e profundamente enraizado no conhecimento local"
            className="section-heading--compact"
            align="center"
          />
          <div className="grid grid--three">
            {reasons.map((reason, index) => (
              <article className="info-card" key={reason.title}>
                <span className="info-card__icon">{`0${index + 1}`}</span>
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="section-tag">Planeie com confianca</p>
            <h2 className="home-section-title--compact">
              Precisa de transfers, tours e orientacao local rapida num so lugar?
            </h2>
            <p className="muted">
              Ajudamos os visitantes a deslocarem-se sem complicacoes desde a chegada ao aeroporto ate ao check-in no hotel, e depois
              para experiencias inesqueciveis na ilha sem o stress habitual de coordenacao.
            </p>
            <Link className="text-link" to="/transfers">
              Ver opcoes de transfer
            </Link>
          </div>
          <div className="feature-panel">
            <div>
              <strong>Recolha no aeroporto</strong>
              <p>Servico profissional de rececao com apoio de bagagem e transporte direto para o hotel.</p>
            </div>
            <div>
              <strong>Combinacoes personalizadas</strong>
              <p>Combine snorkeling, visitas culturais e experiencias ao por do sol num unico itinerario.</p>
            </div>
            <div>
              <strong>Resposta rapida</strong>
              <p>Apoio agil para reservas de ultima hora, mudancas de horario e atualizacoes de viagem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            eyebrow="Testemunhos"
            title="O que os nossos clientes mais valorizam ao viajar connosco"
            align="center"
          />
          <div className="grid grid--three">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{item.quote}"</p>
                <strong>{item.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
