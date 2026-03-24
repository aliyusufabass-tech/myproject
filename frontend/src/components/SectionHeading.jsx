function SectionHeading({ eyebrow, title, text, align = 'left', className = '' }) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      {eyebrow ? <p className="section-tag">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

export default SectionHeading
