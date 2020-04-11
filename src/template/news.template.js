import React from "react"
import Spinner from "../components/spinner"
import { LazyLoadImage } from "react-lazy-load-image-component"

const NewsTemplate = ({ forum_url, image_url, intro, title, url }) => (
  <li key={title} className="info">
    <div className="info--title">
      <h5>
        {title}
        <hr />
      </h5>
    </div>
    <div className="info--image">
      <a href={forum_url} target="_blank" rel="noopner noreferrer">
        {!image_url ? (
          <Spinner />
        ) : (
          <LazyLoadImage alt={title} src={image_url} />
        )}
      </a>
    </div>
    <div className="info--intro">
      <p>{intro}</p>
    </div>

    <div className="info--external">
      <p>Read more about:</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
    <br />
  </li>
)

export default NewsTemplate
