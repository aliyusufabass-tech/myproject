import { Link } from 'react-router-dom'
import { pt } from '../utils/i18nPt'

function TourFormatCard({ card }) {
  const isInternal = card.detailUrl?.startsWith('/')

  return (
    <article className="tour-format-card">
      <div className="tour-format-card__media">
        <img src={card.image} alt={pt(card.title)} />
        <div className="tour-format-card__overlay">
          <span className="tour-format-pill">{pt(card.badge)}</span>
          <span className="tour-rating-pill">
            <span className="tour-rating-pill__star">{'\u2605'}</span>
            {card.rating}
          </span>
        </div>
      </div>

      <div className="tour-format-card__body">
        <h3>{pt(card.title)}</h3>
        <p>{pt(card.summary)}</p>
        <div className="tour-format-card__footer">
          <strong>{card.price}</strong>
          {isInternal ? (
            <Link to={card.detailUrl}>Ver Detalhes</Link>
          ) : (
            <a href={card.detailUrl} target="_blank" rel="noreferrer">
              Ver Detalhes
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default TourFormatCard
