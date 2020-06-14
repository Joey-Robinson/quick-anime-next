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
    synopsisClassNameContainer,
  }) => {
    return (
      <li key={mal_id} className={liClassName}>
        <h3>{title}</h3>
        <div className={imageClassName}>
          <Link href={href} as={as}>
            <LazyLoadImage effect="blur" alt={title} src={image_url} />
          </Link>
        </div>
        <div className={synopsisClassNameContainer}>
          <div className={synopsisClassName}>
            <p>
              {!synopsis ? "No synopsis is available for this title" : synopsis}
            </p>
          </div>
        </div>
        <ul className={genreClassName}>{genres}</ul>
      </li>
    )
  }
)

export default GlobalList
