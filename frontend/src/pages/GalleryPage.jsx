import { useMemo, useState, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import PageMeta from '../components/PageMeta'
import { galleryImages } from '../data/tours'
import galleryHero from '../assets/33.jpeg'
import { translateText } from '../utils/i18nText'

function GalleryPage() {
  const { i18n } = useTranslation()
  const [modalOpen, setModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const tr = (text) => translateText(text, i18n.language)

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
        title={tr('Galeria')}
        description={tr('Explore momentos da Zan Excursions entre praias, paisagens da ilha e experiencias de viagem inesqueciveis.')}
      />

      <section
        className="gallery-page-hero"
        style={{ '--gallery-hero-image': `url(${galleryHero})` }}
      >
        <div className="container gallery-page-hero__content">
          <h1>{tr('Galeria Zan Excursions')}</h1>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <div className="gallery-page-intro">
            <h2>{tr('Momentos da ilha que valem a pena recordar')}</h2>
            <p>
              {tr('Das aguas turquesa e passeios de dhow aos fins de tarde tranquilos na praia, esta galeria mostra as experiencias que ajudamos a criar em Zanzibar.')}
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
                aria-label={tr('Abrir visualizador de foto')}
              />
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button className="gallery-modal__close" onClick={closeModal} aria-label={tr('Fechar visualizador de galeria')}>
            ×
          </button>
          <button className="gallery-modal__nav gallery-modal__nav--left" onClick={goPrev} aria-label={tr('Foto anterior')}>
            ‹
          </button>
          <img
            className="gallery-modal__image"
            src={galleryImages[currentIndex]}
            alt={`${tr('Imagem da galeria')} ${currentIndex + 1}`}
          />
          <button className="gallery-modal__nav gallery-modal__nav--right" onClick={goNext} aria-label={tr('Proxima foto')}>
            ›
          </button>
        </div>
      )}
    </>
  )
}

export default GalleryPage
