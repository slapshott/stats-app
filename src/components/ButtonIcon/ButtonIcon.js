import React from 'react'
import './styles.scss'

const ButtonIcon = (props) => {
  const { name, size, color, className, iconStyles, onClick } = props

  return (
    <div
      className={className ? `icon-container ${this.props.className}` : 'icon-container'}
      onClick={onClick}
    >
      <i
        className={name ? `icon-${name} ${iconStyles}` : 'icon-download'}
        style={{ fontSize: size || '20px', color: color }}
      />
    </div>
  )
}

export default ButtonIcon
