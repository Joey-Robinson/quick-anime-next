import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AnimeTemplate = ({
  title,
  titlejp,
  synopsis,
  image,
  episodes,
  rating,
  url,
  airing,
  score,
}) => (
  <Layout>
    <SEO title={title} />
    <div className="results">
      <hgroup>
        <h1>{title}</h1>
        <h2>{titlejp}</h2>
      </hgroup>
      <p>
        <strong>Synopsis:</strong> {synopsis}
      </p>
      <>
        <img src={image} alt={title} />
      </>
      <p>
        <strong>Episodes:</strong> {episodes}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title} - View On MAL
        </a>
      </p>
      <p>
        <strong>Airing:</strong> {airing}
      </p>
      <p>
        <strong>Score:</strong> {score}
      </p>
    </div>
  </Layout>
)
