import Link from "next/link"
import React, { memo } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const AnimeList = memo(({ href, as, mal_id, image_url, title, synopsis }) => {
  return (
    <li key={mal_id} className="search--li li">
      <div className="li--title">
        <h5>{title}</h5>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "13rem 1fr",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <LazyLoadImage effect="blur" alt={title} src={image_url} />
        <p style={{ gridColumn: "2", gridRow: "1", alignSelf: "start" }}>
          {!synopsis ? "No synopsis is available for this title" : synopsis}
        </p>
        <div
          style={{
            gridColumn: "2",
            gridRow: "1",
            justifySelf: "left",
            alignSelf: "end",
            padding: "0 0 0 6rem",
          }}
        >
          <Link href={href} as={as}>
            <a>Read More about it here.</a>
          </Link>
        </div>
      </div>
    </li>
  )
})

export default AnimeList
