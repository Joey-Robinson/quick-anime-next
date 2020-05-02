import React from "react"

const HeaderTop = ({ imagesource, alt }) => (
  <div>
    <img
      style={{
        margin: "0",
        padding: "0",
        gridRow: "1",
        display: "block",
        height: "auto",
        width: "100%",
      }}
      src={imagesource}
      alt={alt}
    />
  </div>
)

export default HeaderTop