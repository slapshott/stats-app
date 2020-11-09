import React from 'react'
import './styles.scss'

const TextInput = (props) => {
  const { value, placeholder, className, inputClassName, onChange, onBlur } = props
  return (
    <div className={`text-input-container ${className}`}>
      <input
        className={`text-input ${inputClassName}`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  )
}

export default TextInput
