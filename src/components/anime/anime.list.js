import React from "react"
import Link from "next/link"

const AnimeList = ({ href, as, mal_id, image_url, url, title }) => (
  <li key={mal_id} className="search--container list--li li">
    <div>
      <div className="li--title">
        <h5>{title}</h5>
      </div>
      <div>
        <a href={url} target="_blank" rel="noopner noreferrer">
          <img src={image_url} alt={title} />
        </a>
      </div>
      <Link href={href} as={as}>
        <a>Read More about {title}</a>
      </Link>
    </div>
  </li>
)

export default AnimeList
