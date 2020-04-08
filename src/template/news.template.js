import React from "react"
import Spinner from "../components/spinner"
import { LazyLoadImage } from "react-lazy-load-image-component"

const NewsTemplate = ({ forum_url, image_url, intro, title, url }) => (
  <li key={title} className="search--container search--li li">
    <div className="li--title">
      <h5>{title}</h5>
    </div>
    <div>
      <p>{intro}</p>
    </div>
    <div className="li--image">
      <a href={forum_url} target="_blank" rel="noopner noreferrer">
        {!image_url ? (
          <Spinner />
        ) : (
          <LazyLoadImage alt={title} src={image_url} />
        )}
      </a>
    </div>
    <div className="li--link">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  </li>
)

export default NewsTemplate
