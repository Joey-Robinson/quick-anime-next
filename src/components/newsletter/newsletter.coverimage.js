import React from "react"
import Link from "next/link"
import { LazyLoadImage } from "react-lazy-load-image-component"

const CoverImage = ({ title, src, slug }) => {
  const image = <LazyLoadImage src={src} alt={`Cover Image for ${title}`} />
  return (
    <>
      {slug ? (
        <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
