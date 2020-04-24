import React from "react"

const AnimeTemplate = ({
  title,
  titlejp,
  synopsis,
  image,
  episodes,
  rating,
  url,
  airing,
  duration,
  background,
  genres,
  source,
}) => (
  <>
    <div className="results--heading">
      <h1>{title}</h1>
    </div>
    <div className="results--image">
      <img src={image} alt={title} />
    </div>
    <div className="results--alternative">
      <h3>
        Alternatives:
        <hr />
      </h3>
      <p>
        <span>English: </span>
        {title}
      </p>
      <p>
        <span>Japanese: </span>
        {titlejp}
      </p>
    </div>
    <div className="results--synopsis">
      <p>
        <span>Synopsis: </span> {synopsis}
      </p>
    </div>
    <div className="results--background">
      <p>
        <span>Background: </span> {background}
      </p>
    </div>
    <div className="results--information">
      <h3>
        Additional Informaiton:
        <hr />
      </h3>
      <p>
        <span>Episodes: </span>
        {episodes}
      </p>
      <p>
        <span>Status: </span>
        {airing}
      </p>
      <p>
        <span>Duration: </span> {duration}
      </p>
      <p>
        <span>Genres: </span>
        {genres}
      </p>
      <p>
        <span>Rating: </span>
        {rating}
      </p>
      <p>
        <span>Source: </span> {source}
      </p>
    </div>
    <div className="results--external">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {title} - View On MAL
      </a>
    </div>
  </>
)

export default AnimeTemplate
