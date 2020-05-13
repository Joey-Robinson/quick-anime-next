import dynamic from "next/dynamic"
import React, { useState } from "react"
import GlobalSearch from "../../components/global/global.search"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Spinner from "../../components/spinner"

const AnimeList = dynamic(() => import("../../components/anime/anime.list"), {
  loading: () => <Spinner />,
})

const Search = () => {
  const [animeData, setAnimeData] = useState({ results: [] })
  const [searchedAnime, setSearchedAnime] = useState("")
  const [currentPage, setCurrentPage] = useState(1)

  const searchCall = async () => {
    const response = await fetch(
      //&limit=10
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
    <Layout className="post">
      <SEO title="Search" />
      <GlobalSearch
        onSubmit={onSubmitHandler}
        value={searchedAnime}
        onChange={onChangeHandler}
        placeholder="Search For Anime"
        id="anime-search"
        ariaLabel="Search For Anime"
        label="Search Anime"
        spanText="Search For Anime"
        idFor="anime-search"
      />
      {animeData.results == "" ? (
        ""
      ) : (
        <h2
          style={{
            margin: "1.5rem 0",
            textAlign: "center",
            display: "block",
          }}
        >
          Displaying {animeData.results.length} Results
        </h2>
      )}
      <ul className="list search">
        {animeData &&
          animeData.results.map(
            ({ synopsis, mal_id, title, image_url, url }) => {
              return (
                <AnimeList
                  key={mal_id}
                  title={title}
                  image_url={image_url}
                  url={url}
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  synopsis={synopsis}
                />
              )
            }
          )}
      </ul>
    </Layout>
  )
}

export default Search
