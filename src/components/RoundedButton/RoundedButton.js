import React from 'react'
import './styles.scss'

const RoundedButton = (props) => {
  const { text, pressed, raised, onClick, className, disabled } = props
  const containerStyles = []

  if (disabled) {
    containerStyles.push(`rounded-button-pressed rounded-button-disabled ${className}`)
  } else if (raised) {
    containerStyles.push(`rounded-button-container raised ${className}`)
  } else {
    containerStyles.push(`rounded-button-container ${className}`)
  }

  return (
    <div
      disabled={disabled}
      className={`${containerStyles} ${pressed ? 'rounded-button-pressed' : ''}`}
      pressed={disabled === false ? pressed.toString() : 'false'}
      onClick={() => {
        if (!disabled && onClick) {
          onClick()
        }
      }}
    >
      {text}
    </div>
  )
}

export default RoundedButton
