import { useMemo } from 'react'
import { useTranslation } from '../i18n'
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
  const { t } = useTranslation()
  const homeTourCards = useMemo(buildHomeCards, [])

  return (
    <>
      <PageMeta
        title={t('page.home.page.inicio')}
        description={t('page.home.page.descubra.tours.transfers.e.experiencias.personalizadas.na.ilha')}
      />
      <section
        className="hero hero--home"
        style={{ '--home-hero-image': `url(${homeHeroImage})` }}
      >
        <div className="container hero__content">
          <h1>{t('page.home.page.descubra.zanzibar.onde.cada.onda.conta.uma.historia')}</h1>
          <p>
            {t('page.home.page.a.zan.excursions.cria.experiencias.autenticas.na.ilha')}
          </p>
          <div className="hero__actions">
            <Button to="/tours">{t('page.home.page.explorar.tours')}</Button>
            <Button
              href="https://wa.me/255792692084"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              {t('page.home.page.fale.connosco.no.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      <section className="section tours-format-section">
        <div className="container">
          <SectionHeading
            eyebrow={t('page.home.page.tours.em.destaque')}
            title={t('page.home.page.tours.selecionados.que.refletem.as.experiencias.do.nosso')}
            text={t('page.home.page.descubra.a.variedade.de.zanzibar.com.experiencias.escolhidas')}
            align="center"
          />

          <div className="tour-format-grid">
            {homeTourCards.map((card) => (
              <TourFormatCard card={card} key={card.id} />
            ))}
          </div>

          <div className="tour-format-cta">
            <Button to="/tours" variant="secondary">
              {t('page.home.page.ver.todos.os.tours')}
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--accent">
        <div className="container">
          <SectionHeading
            eyebrow={t('page.home.page.por.que.escolher.nos')}
            title={t('page.home.page.apoio.de.viagem.pessoal.confiavel.e.profundamente.enraizado')}
            className="section-heading--compact"
            align="center"
          />
          <div className="grid grid--three">
            {reasons.map((reason, index) => (
              <article className="info-card" key={reason.title}>
                <span className="info-card__icon">{`0${index + 1}`}</span>
                <h3>{t(reason.title)}</h3>
                <p>{t(reason.text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="section-tag">{t('page.home.page.planeie.com.confianca')}</p>
            <h2 className="home-section-title--compact">
              {t('page.home.page.precisa.de.transfers.tours.e.orientacao.local.rapida')}
            </h2>
            <p className="muted">
              {t('page.home.page.ajudamos.os.visitantes.a.deslocarem.se.sem.complicacoes')}
            </p>
            <Link className="text-link" to="/transfers">
              {t('page.home.page.ver.opcoes.de.transfer')}
            </Link>
          </div>
          <div className="feature-panel">
            <div>
              <strong>{t('page.home.page.recolha.no.aeroporto')}</strong>
              <p>{t('page.home.page.servico.profissional.de.rececao.com.apoio.de.bagagem')}</p>
            </div>
            <div>
              <strong>{t('page.home.page.combinacoes.personalizadas')}</strong>
              <p>{t('page.home.page.combine.snorkeling.visitas.culturais.e.experiencias.ao.por')}</p>
            </div>
            <div>
              <strong>{t('page.home.page.resposta.rapida')}</strong>
              <p>{t('page.home.page.apoio.agil.para.reservas.de.ultima.hora.mudancas')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <SectionHeading
            eyebrow={t('page.home.page.testemunhos')}
            title={t('page.home.page.o.que.os.nossos.clientes.mais.valorizam.ao')}
            align="center"
          />
          <div className="grid grid--three">
            {testimonials.map((item) => (
              <article className="testimonial-card" key={item.name}>
                <p>"{t(item.quote)}"</p>
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
