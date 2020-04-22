import React, { useState } from "react"
import AnimeList from "../../components/anime/anime.list"
import AnimeSearch from "../../components/anime/anime.search"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

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

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

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
      <SEO title="Search" />
      <div className="post">
        <AnimeSearch
          onSubmit={onSubmitHandler}
          value={searchedAnime}
          onChange={onChangeHandler}
        />
        <ul className="list search">
          {animeData.results.map(
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
      </div>
    </Layout>
  )
}

export default Search
