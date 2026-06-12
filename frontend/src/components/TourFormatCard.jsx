import { Link } from 'react-router-dom'
import { useTranslation } from '../i18n'

function TourFormatCard({ card }) {
  const { t } = useTranslation()
  const isInternal = card.detailUrl?.startsWith('/')

  return (
    <article className="tour-format-card">
      <div className="tour-format-card__media">
        <img src={card.image} alt={t(card.title)} />
        <div className="tour-format-card__overlay">
          <span className="tour-format-pill">{t(card.badge)}</span>
          <span className="tour-rating-pill">
            <span className="tour-rating-pill__star">{'\u2605'}</span>
            {card.rating}
          </span>
        </div>
      </div>

      <div className="tour-format-card__body">
        <h3>{t(card.title)}</h3>
        <p>{t(card.summary)}</p>
        <div className="tour-format-card__footer">
          <strong>{t(card.price)}</strong>
          {isInternal ? (
            <Link to={card.detailUrl}>{t('common.viewDetails')}</Link>
          ) : (
            <a href={card.detailUrl} target="_blank" rel="noreferrer">
              {t('common.viewDetails')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default TourFormatCard
