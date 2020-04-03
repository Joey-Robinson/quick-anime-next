import React from "react"

const AnimeList = ({ mal_id, image_url, url, title }) => (
  <li key={mal_id}>
    <h5>{title}</h5>
    <div>
      <a href={url} target="_blank" rel="noopner noreferrer">
        <img src={image_url} alt={title} />
      </a>
    </div>
  </li>
)

export default AnimeList
