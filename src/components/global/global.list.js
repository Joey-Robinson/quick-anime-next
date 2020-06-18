import Link from "next/link"
import React, { memo } from "react"

const GlobalList = memo(
  ({ href, as, mal_id, image_url, title, synopsis, genres }) => {
    return (
      <li key={mal_id} className="search--li season">
        <div className="season--image">
          <Link href={href} as={as}>
            <img alt={title} src={image_url} />
          </Link>
          <Link href={href} as={as}>
            <h3>{title}</h3>
          </Link>
        </div>
        <div className="season--container">
          <div className="season--synopsis">
            <p>
              {!synopsis ? "No synopsis is available for this title" : synopsis}
            </p>
          </div>
        </div>
        <ul className="season--genre">{genres}</ul>
      </li>
    )
  }
)

export default GlobalList
