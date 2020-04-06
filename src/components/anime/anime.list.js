import React from "react"
import Link from "next/link"
import Spinner from "../spinner"
import { LazyLoadImage } from "react-lazy-load-image-component"

const AnimeList = ({ href, as, mal_id, image_url, url, title, synopsis }) => (
  <li key={mal_id} className="search--container search--li li">
    <div className="li--title">
      <h5>{title}</h5>
    </div>
    <div className="li--image">
      <a href={url} target="_blank" rel="noopner noreferrer">
        <LazyLoadImage
          alt={title}
          src={image_url} // use normal <img> attributes as props
        />
      </a>
    </div>
    <p>{!synopsis ? "No synopsis is available for this title" : synopsis}</p>

    <div className="li--link">
      <Link href={href} as={as}>
        <a>Read More about it here.</a>
      </Link>
    </div>
  </li>
)

export default AnimeList
