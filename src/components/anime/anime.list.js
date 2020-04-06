import React from "react"
import Link from "next/link"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Spinner from "../spinner"

const AnimeList = ({ href, as, mal_id, image_url, url, title, synopsis }) => {
  return (
    <li key={mal_id} className="search--container search--li li">
      <div className="li--title">
        <h5>{title}</h5>
      </div>
      <div className="li--image">
        <a href={url} target="_blank" rel="noopner noreferrer">
          {!image_url ? (
            <Spinner />
          ) : (
            <LazyLoadImage alt={title} src={image_url} />
          )}
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
}
export default AnimeList
