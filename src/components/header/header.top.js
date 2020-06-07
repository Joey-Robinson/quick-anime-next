import React from "react"

const HeaderTop = ({ imagesource, alt }) => (
  <div className="header--image">
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
