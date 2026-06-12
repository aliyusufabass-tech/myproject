import { useMemo, useState, useCallback } from 'react'
import { useTranslation } from '../i18n'
import PageMeta from '../components/PageMeta'
import { galleryImages } from '../data/tours'
import galleryHero from '../assets/33.jpeg'

function GalleryPage() {
  const { t } = useTranslation()
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
        title={t('page.gallery.page.galeria')}
        description={t('page.gallery.page.explore.momentos.da.zan.excursions.entre.praias.paisagens')}
      />

      <section
        className="gallery-page-hero"
        style={{ '--gallery-hero-image': `url(${galleryHero})` }}
      >
        <div className="container gallery-page-hero__content">
          <h1>{t('page.gallery.page.galeria.zan.excursions')}</h1>
        </div>
      </section>

      <section className="section gallery-page-section">
        <div className="container">
          <div className="gallery-page-intro">
            <h2>{t('page.gallery.page.momentos.da.ilha.que.valem.a.pena.recordar')}</h2>
            <p>
              {t('page.gallery.page.das.aguas.turquesa.e.passeios.de.dhow.aos')}
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
                aria-label={t('page.gallery.page.abrir.visualizador.de.foto')}
              />
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="gallery-modal" role="dialog" aria-modal="true">
          <button className="gallery-modal__close" onClick={closeModal} aria-label={t('page.gallery.page.fechar.visualizador.de.galeria')}>
            Ã—
          </button>
          <button className="gallery-modal__nav gallery-modal__nav--left" onClick={goPrev} aria-label={t('page.gallery.page.foto.anterior')}>
            â€¹
          </button>
          <img
            className="gallery-modal__image"
            src={galleryImages[currentIndex]}
            alt={`${t('page.gallery.page.imagem.da.galeria')} ${currentIndex + 1}`}
          />
          <button className="gallery-modal__nav gallery-modal__nav--right" onClick={goNext} aria-label={t('page.gallery.page.proxima.foto')}>
            â€º
          </button>
        </div>
      )}
    </>
  )
}

export default GalleryPage
