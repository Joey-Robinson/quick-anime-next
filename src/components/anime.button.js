import React from "react"

const AnimeButton = ({ message, onClick, className }) => (
  <button onClick={onClick} className={`button ${className}`}>
    {message}
    <style jsx>
      {`
        @keyframes ripple {
          0% {
            background-size: 1% 1%;
            opacity: 0.5;
          }

          70% {
            background-size: 1000% 1000%;
            opacity: 0.2;
          }

          100% {
            opacity: 0;
            background-size: 1000% 1000%;
          }
        }
      `}
    </style>
  </button>
)

export default AnimeButton
