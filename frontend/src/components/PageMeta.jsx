import { useEffect } from 'react'

function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Zan Excursions` : 'Zan Excursions'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription && description) {
      metaDescription.setAttribute('content', description)
    }
  }, [description, title])

  return null
}

export default PageMeta
