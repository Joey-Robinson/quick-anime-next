import dynamic from "next/dynamic"
import React, { useState } from "react"
import Layout from "../../components/global/global.layout"
import GlobalSearch from "../../components/global/global.search"
import SEO from "../../components/global/global.seo"
import Spinner from "../../components/global/global.spinner"

const GlobalList = dynamic(
  () => import("../../components/global/global.list"),
  {
    loading: () => <Spinner />,
  }
)

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
        submitClassName="input--submit"
        submitValue="Search"
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
              {
                /* const shortenedSynopsis = synopsis.replace(
                "[Written by MAL Rewrite]",
                ""
              ) */
              }
              return (
                <GlobalList
                  liClassName="search--li season"
                  synopsisClassName="season--synopsis"
                  synopsisClassNameContainer="season--container"
                  titleClassName="li--title"
                  imageClassName="season--image"
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  mal_id={mal_id}
                  synopsis={synopsis}
                  title={title}
                  image_url={image_url}
                  url={url}
                  key={mal_id}
                />
              )
            }
          )}
      </ul>
    </Layout>
  )
}

export default Search
