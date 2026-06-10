import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { translateText } from '../utils/i18nText'

function TourFormatCard({ card }) {
  const { i18n } = useTranslation()
  const isInternal = card.detailUrl?.startsWith('/')
  const tr = (text) => translateText(text, i18n.language)

  return (
    <article className="tour-format-card">
      <div className="tour-format-card__media">
        <img src={card.image} alt={tr(card.title)} />
        <div className="tour-format-card__overlay">
          <span className="tour-format-pill">{tr(card.badge)}</span>
          <span className="tour-rating-pill">
            <span className="tour-rating-pill__star">{'\u2605'}</span>
            {card.rating}
          </span>
        </div>
      </div>

      <div className="tour-format-card__body">
        <h3>{tr(card.title)}</h3>
        <p>{tr(card.summary)}</p>
        <div className="tour-format-card__footer">
          <strong>{tr(card.price)}</strong>
          {isInternal ? (
            <Link to={card.detailUrl}>{tr('Ver Detalhes')}</Link>
          ) : (
            <a href={card.detailUrl} target="_blank" rel="noreferrer">
              {tr('Ver Detalhes')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default TourFormatCard
