import Link from "next/link"
import React, { memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const GlobalList = memo(
  ({
    liClassName,
    titleClassName,
    imageCLassName,
    href,
    as,
    mal_id,
    image_url,
    title,
    synopsis,
  }) => {
    return (
      <li key={mal_id} className={liClassName}>
        <div className={titleClassName}>
          <h5>{title}</h5>
        </div>
        <div className={imageCLassName}>
          <LazyLoadImage effect="blur" alt={title} src={image_url} />
          <p>
            {!synopsis ? "No synopsis is available for this title" : synopsis}
          </p>
          <div>
            <Link href={href} as={as}>
              <a>Read More about it here.</a>
            </Link>
          </div>
        </div>
      </li>
    )
  }
)

export default GlobalList
