import { Link } from 'react-router-dom'

function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  ...props
}) {
  const buttonClassName = `button button--${variant} ${className}`.trim()

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={buttonClassName} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={buttonClassName} type={type} {...props}>
      {children}
    </button>
  )
}

export default Button
