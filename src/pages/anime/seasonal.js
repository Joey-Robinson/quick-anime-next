import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import GlobalSearch from "../../components/global/global.search"
import SEO from "../../components/global/global.seo"
import Spinner from "../../components/global/global.spinner"
import { renderEffect } from "../../utils/renders.utils"

const GlobalList = dynamic(
  () => import("../../components/global/global.list"),
  {
    loading: () => <Spinner />,
  }
)

const Seasonal = () => {
  const [seasonalData, setSeasonalData] = useState({ anime: [] })

  renderEffect()

  const seasonalCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/season")
    const data = await response.json()
    setSeasonalData(data)
  }

  useEffect(() => {
    seasonalCall()
  }, [])

  const seasonalYear = seasonalData.season_year
  const seasonalName = seasonalData.season_name

  // Filter
  const morePosts = seasonalData.anime
  const emptyQuery = ""
  const [filteredPosts, setFilteredPosts] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event) => {
    const query = event.target.value
    const posts = morePosts || []

    const filteredData = posts.filter(({ genres }) => {
      const genreName = genres.map(({ name }) => name)
      return genreName.join("").toLowerCase().includes(query.toLowerCase())
    })

    setFilteredPosts({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = filteredPosts
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : morePosts

  return (
    <Layout className="seasonal post">
      <SEO title="Seasonal Anime" description="Anime for this season" />
      <GlobalSearch
        onSubmit={(event) => event.preventDefault()}
        value={query}
        onChange={handleInputChange}
        placeholder="Search By Genre"
        id="genre--search"
        ariaLabel="Search By Genre"
        label="Search By Genre"
        spanText="Search By Genre"
        idFor="genre--search"
        submitStyle={{ display: "none" }}
      />
      <hgroup style={{ textAlign: "center" }}>
        <h2>
          Listing Anime for {seasonalName} {seasonalYear}
        </h2>
        <h5>Displaying {seasonalData.anime.length} Results</h5>
      </hgroup>
      <ul className="list search">
        {posts &&
          posts.map(({ genres, synopsis, mal_id, title, image_url, url }) => {
            const genreList = genres.slice(0, 2).map(({ name }) => {
              // prettier-ignore
              return <li key={name}>{name}</li>
            })
            const shortenedSynopsis = synopsis.replace(
              "[Written by MAL Rewrite]",
              ""
            )
            return (
              <GlobalList
                liClassName="search--li season"
                synopsisClassName="season--synopsis"
                synopsisClassNameContainer="season--container"
                genreClassName="li--genres"
                titleClassName="li--title"
                imageClassName="season--image"
                href={`/anime/[id]/`}
                as={`/anime/${mal_id}/`}
                synopsis={shortenedSynopsis}
                mal_id={mal_id}
                genres={genreList}
                genreClassName="season--genre"
                title={title}
                image_url={image_url}
                url={url}
                key={mal_id}
              />
            )
          })}
      </ul>
    </Layout>
  )
}
export default Seasonal
