import { useMemo, useState, useCallback } from 'react'
import PageMeta from '../components/PageMeta'
import { galleryImages } from '../data/tours'
import galleryHero from '../assets/33.jpeg'

function GalleryPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const duplicatedGallery = useMemo(
    () => galleryImages.concat(galleryImages),
    [galleryImages]
  )

  const openModalAt = useCallback(
    (index) => {
      setCurrentIndex(index % galleryImages.length)
      setModalOpen(true)
    },
    [galleryImages.length]
  )

  const closeModal = useCallback(() => setModalOpen(false), [])

  const goNext = useCallback(
    () => setCurrentIndex((idx) => (idx + 1) % galleryImages.length),
    [galleryImages.length]
  )

  const goPrev = useCallback(
    () =>
      setCurrentIndex((idx) =>
        idx === 0 ? galleryImages.length - 1 : idx - 1
      ),
    [galleryImages.length]
  )

  return (
    <>
      <PageMeta
        title="Gallery"
        description="Explore Zanzibar Excursion Company Ltd moments through beaches, island scenery, and memorable travel experiences."
      />

      <section
        className="gallery-page-hero"
        style={{ '--gallery-hero-image': `url(${galleryHero})` }}
      >
        <div className="container gallery-page-hero__content">
          <h1>ZANZIBAR EXCURSION COMPANY LTD GALLERY</h1>
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
            {duplicatedGallery.map((image, index) => (
              <button
                type="button"
                key={`${image}-${index}`}
                className={`gallery-page-grid__item gallery-page-grid__item--${(index % 5) + 1}`}
                style={{ backgroundImage: `url(${image})` }}
                onClick={() => openModalAt(index)}
                aria-label="Open photo viewer"
              />
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button className="gallery-modal__close" onClick={closeModal} aria-label="Close gallery viewer">
            ×
          </button>
          <button className="gallery-modal__nav gallery-modal__nav--left" onClick={goPrev} aria-label="Previous photo">
            ‹
          </button>
          <img
            className="gallery-modal__image"
            src={galleryImages[currentIndex]}
            alt={`Gallery image ${currentIndex + 1}`}
          />
          <button className="gallery-modal__nav gallery-modal__nav--right" onClick={goNext} aria-label="Next photo">
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default GalleryPage
