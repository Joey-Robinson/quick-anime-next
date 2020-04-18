import React from "react"

const AnimeButton = ({ message, onClick, className }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {message}
  </button>
)

export default AnimeButton
