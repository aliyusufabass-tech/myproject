import PageMeta from '../components/PageMeta'
import { galleryImages } from '../data/tours'

function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Browse Zanzibar Excursion moments from beaches, island views, and unforgettable experiences."
      />

      <section className="gallery-page-hero">
        <div className="container gallery-page-hero__content">
          <p className="section-tag">Gallery</p>
          <h1>See the coast, colors, and calm behind every Zanzibar journey.</h1>
          <p>
            A quick visual look at the beaches, ocean scenes, and island atmosphere
            that shape our tours and transfers.
          </p>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <div className="gallery-page-intro">
            <h2>Island moments worth remembering</h2>
            <p>
              From turquoise water and dhow rides to quiet beach afternoons, this
              gallery gives a glimpse of the experiences we help create across Zanzibar.
            </p>
          </div>

          <div className="gallery-page-grid">
            {galleryImages.concat(galleryImages).map((image, index) => (
              <div
                key={`${image}-${index}`}
                className={`gallery-page-grid__item gallery-page-grid__item--${(index % 5) + 1}`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default GalleryPage
