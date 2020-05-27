import Link from "next/link"
import React, { memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const GlobalList = memo(
  ({
    liClassName,
    titleClassName,
    imageClassName,
    linkClassName,
    synopsisClassName,
    href,
    as,
    mal_id,
    image_url,
    title,
    synopsis,
    genres,
    genreClassName,
  }) => {
    return (
      <li key={mal_id} className={liClassName}>
        <div className={titleClassName}>
          <h5>{title}</h5>
        </div>
        <div className={genreClassName}>{genres}</div>
        <div className={imageClassName}>
          <Link href={href} as={as}>
            <LazyLoadImage effect="blur" alt={title} src={image_url} />
          </Link>
        </div>
        <div className={synopsisClassName}>
          <p>
            {!synopsis ? "No synopsis is available for this title" : synopsis}
          </p>
        </div>
      </li>
    )
  }
)

export default GlobalList
