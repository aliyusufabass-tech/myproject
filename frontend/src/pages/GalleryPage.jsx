import PageMeta from '../components/PageMeta'
import { galleryImages } from '../data/tours'

function GalleryPage() {
  return (
    <>
      <PageMeta
        title="Gallery"
        description="Explore Zanzibar Excursion Company Ltd moments through beaches, island scenery, and memorable travel experiences."
      />

      <section className="gallery-page-hero">
        <div className="container gallery-page-hero__content">
          <p className="section-tag">Gallery</p>
          <h1>See the coastline, colours, and calm that define every Zanzibar journey.</h1>
          <p>
            Explore a visual collection of beaches, ocean scenes, and island moments
            that shape our tours, transfers, and travel experiences.
          </p>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <div className="gallery-page-intro">
            <h2>Island moments worth remembering</h2>
            <p>
              From turquoise waters and dhow rides to peaceful beach afternoons, this
              gallery offers a glimpse of the experiences we help create across Zanzibar.
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
