import React from "react"
import Link from "next/link"
import { LazyLoadImage } from "react-lazy-load-image-component"

const AnimeList = ({ href, as, mal_id, image_url, url, title, synopsis }) => {
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
        <LazyLoadImage alt={title} src={image_url} />
        <p>
          {!synopsis ? "No synopsis is available for this title" : synopsis}
        </p>
        <div
          style={{
            gridColumn: "2",
            gridRow: "-1",
            justifySelf: "center",
            alignSelf: "start",
            padding: "0 0 3rem 0",
          }}
        >
          <Link href={href} as={as}>
            <a>Read More about it here.</a>
          </Link>
        </div>
      </div>
    </li>
  )
}
export default AnimeList
