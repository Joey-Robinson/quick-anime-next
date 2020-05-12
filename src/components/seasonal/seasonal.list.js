import Link from "next/link"
import React, { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

const SeasonalList = ({
  genres,
  href,
  as,
  mal_id,
  image_url,
  title,
  synopsis,
}) => {
  const [isHidden, setIsHidden] = useState(false)

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
        <button
          style={{ padding: "1.5rem", margin: ".75rem 3rem", width: "100%" }}
          onClick={() => setIsHidden(!isHidden)}
        >
          Show Genres
        </button>
        {isHidden ? (
          <ul
            key={mal_id}
            style={{
              padding: "0 3rem",
              fontSize: "8px",
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {genres}
          </ul>
        ) : (
          ""
        )}
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
}
export default SeasonalList
