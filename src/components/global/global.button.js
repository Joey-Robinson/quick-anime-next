import React from "react"

const Button = ({ message, onClick, className, style }) => (
  <button style={style} className={`ripple ${className}`} onClick={onClick}>
    {message}
  </button>
)

export default Button
