import React, { useState } from "react"
import Layout from "../components/layout"
import AnimeList from "../components/anime/anime.list"
import AnimeSearch from "../components/anime/anime.search"
import SEO from "../components/seo"

const Index = () => {
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
      <SEO title="Search" />
      <AnimeSearch
        onSubmit={onSubmitHandler}
        value={searchedAnime}
        onChange={onChangeHandler}
      />
      <ul className="search--list list">
        {animeData.results.map(({ mal_id, title, image_url, url }) => (
          <AnimeList
            key={mal_id}
            title={title}
            image_url={image_url}
            url={url}
            href={`/p/[id]/`}
            as={`/p/${mal_id}/`}
          />
        ))}
      </ul>
    </Layout>
  )
}

export default Index
