import React from "react"
import Link from "next/link"

const CoverImage = ({ title, src, slug }) => {
  const image = (
    <img
      style={{ width: "10rem", height: "10rem" }}
      src={src}
      alt={`Cover Image for ${title}`}
    />
  )
  return (
    <div>
      {slug ? (
        <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
