import Link from "next/link"
import React, { memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const GenreList = memo(({ href, as, mal_id, image_url, title, synopsis }) => (
  <li key={mal_id}>
    <div className="li--title">
      <h5>{title}</h5>
    </div>

    <div aria-label={`${title}'s image`} className="genre">
      <LazyLoadImage effect="blur" alt={title} src={image_url} />
      <p className="genre--synopsis">
        {!synopsis ? "No synopsis is available for this title" : synopsis}
      </p>
      <div className="genre--link">
        <Link href={href} as={as}>
          <a>Read More about it here.</a>
        </Link>
      </div>
    </div>
  </li>
))

export default GenreList
