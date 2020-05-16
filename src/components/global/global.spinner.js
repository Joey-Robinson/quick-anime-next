import React from "react"

const Spinner = () => (
  <div>
    <style jsx>{`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      div {
        border: 0.5em solid rgba(171, 211, 61, 0.1);
        border-top: 1em solid red;
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
        margin: 1.5rem 0;
        animation: spin 0.6s linear infinite;
      }
    `}</style>
  </div>
)

export default Spinner
