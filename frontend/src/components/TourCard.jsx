import Button from './Button'

function TourCard({ tour }) {
  return (
    <article className="tour-card">
      <div
        className="tour-card__media"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(4, 36, 46, 0.12), rgba(4, 36, 46, 0.52)), url(${tour.image})`,
        }}
      />
      <div className="tour-card__content">
        <div className="tour-card__meta">
          <span>{tour.category}</span>
        </div>
        <h3>{tour.title}</h3>
        <p>{tour.description}</p>
        <div className="tour-card__footer">
          <span className="tour-card__price">{tour.price}</span>
          <Button to={`/tours/${tour.id}`}>View Details</Button>
        </div>
      </div>
    </article>
  )
}

export default TourCard
