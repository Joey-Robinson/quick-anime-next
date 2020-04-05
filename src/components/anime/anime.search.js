import React, { useState } from "react"
// ! Check to see if a label is needed for <TextField />

const AnimeSearch = () => {
  const [animeData, setAnimeData] = useState({ results: [] })
  const [searchedAnime, setSearchedAnime] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const searchCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${searchedAnime}&page=${currentPage}`
    )
    const data = await response.json()
    setAnimeData(data)
  }

  const onChangeHandler = (event) => {
    setSearchedAnime(event.target.value)
    setCurrentPage(1)
  }

  // const nextPage = () => {
  //   setCurrentPage(currentPage + 1)
  // }

  // const previousPage = () => {
  //   setCurrentPage(currentPage - 1)
  // }

  const onSubmitHandler = (event) => {
    if (event.key === 13) {
      event.preventDefault()
      searchCall()
    } else {
      event.preventDefault()
      searchCall()
    }
  }

  return (
    <section className="search">
      <div className="search--input">
        <form
          className="field"
          onSubmit={onSubmitHandler}
          autoComplete="off"
          noValidate
        >
          <input
            id="anime-search"
            label="Search Anmie"
            aria-label="Search For Anime"
            type="text"
            value={searchedAnime}
            className="field--input"
            onChange={onChangeHandler}
          />
          {/* <button
            className="search--input__submit field--submit"
            value="Search For Anime"
          >
            Search For Anime
          </button> */}
          {/* Fix This */}
          {/* {animeData.results === 0 || currentPage < 1 ? (
            ""
          ) : (
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className="field--previous btns ripple"
            >
              <span style={{ fontSize: "20px" }}>&larr;</span>
              Previous Page
            </button>
          )}
          <button onClick={nextPage} className="field--next btns ripple">
            Next Page &nbsp;&nbsp;{" "}
            <span style={{ fontSize: "20px" }}>&rarr;</span>
          </button> */}
        </form>
      </div>
      <ul className="search--list">
        {animeData.results.map(
          ({ synopsis, mal_id, title, image_url, url }) => (
            <li key={mal_id} className="card">
              {" "}
              <h2 style={{ textAlign: "center" }}>{title}</h2>
              <img src={image_url} alt={title} />
              <a
                style={{ color: "#f50057" }}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View on MAL
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  )
}

export default AnimeSearch
