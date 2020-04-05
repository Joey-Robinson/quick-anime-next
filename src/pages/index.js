import React, { useState } from "react"
import Layout from "../components/layout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const Index = (props) => {
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
    <Layout>
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
        </form>
      </div>
      <ul className="search--list">
        {animeData.results.map(
          ({ synopsis, mal_id, title, image_url, url }) => (
            <li key={mal_id} className="card">
              <>
                {" "}
                <h2 style={{ textAlign: "center" }}>{title}</h2>
                <img src={image_url} alt={title} />
                <Link href="/p/[id]/" as={`/p/${mal_id}/`}>
                  <a>{title}</a>
                </Link>
              </>
            </li>
          )
        )}
      </ul>
    </Layout>
  )
}

// Index.getInitialProps = async function () {
//   const [animeData, setAnimeData] = useState({ results: [] })
//   const [searchedAnime, setSearchedAnime] = useState("")

//   const result = await fetch(
//     `https://api.jikan.moe/v3/search/anime?q=${searchedAnime}`
//   )
//   const data = await result.json()
//   const results = data.results
//   return {
//     anime: results.map((title) => title),
//   }
// }

export default Index
