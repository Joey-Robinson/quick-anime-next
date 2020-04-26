import Link from "next/link"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import Spinner from "../components/spinner"

const RecommendationsTemplate = ({
  mal_id,
  href,
  as,
  image_url,
  recommendation_count,
  recommendation_url,
  title,
}) => (
  <>
    <li key={mal_id} className="info">
      <div className="info--title">
        <h5>{title}</h5>
      </div>
      <div className="info--image">
        <a href={recommendation_url} target="_blank" rel="noopner noreferrer">
          {!image_url ? (
            <Spinner />
          ) : (
            <LazyLoadImage alt={title} src={image_url} />
          )}
        </a>
      </div>
      <div className="info--intro">
        <p>{recommendation_count}</p>
      </div>

      <div className="info--external">
        <Link href={href} as={as}>
          <a>Read More about it here.</a>
        </Link>
      </div>
    </li>
  </>
)

export default RecommendationsTemplate
