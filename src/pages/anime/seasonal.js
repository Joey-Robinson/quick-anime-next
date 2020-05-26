import dynamic from "next/dynamic"
import React, { useState } from "react"
import Layout from "../../components/global/global.layout"
import GlobalSearch from "../../components/global/global.search"
import SEO from "../../components/global/global.seo"
import Spinner from "../../components/global/global.spinner"
import { fetchUtility } from "../../utils/fetch.utils"
import { renderEffect } from "../../utils/renders.utils"

const GlobalList = dynamic(
  () => import("../../components/global/global.list"),
  {
    loading: () => <Spinner />,
  }
)

const Seasonal = () => {
  const newSeasonalData = fetchUtility("https://api.jikan.moe/v3/season")

  renderEffect()

  const seasonalYear = newSeasonalData.data.season_year
  const seasonalName = newSeasonalData.data.season_name

  // Filter
  const morePosts = newSeasonalData.data.anime
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
        placeholder="Search By Genre Or Title"
        id="genre--search"
        ariaLabel="Search By Genre Or Title"
        label="Search By Genre Or Title"
        spanText="Search By Genre Or Title"
        idFor="genre--search"
      />
      <hgroup style={{ textAlign: "center" }}>
        <h2>
          Listing Anime for {seasonalName} {seasonalYear}
        </h2>
        {/* <h5>Displaying {newSeasonalData.anime.length} Results</h5> */}
      </hgroup>
      <ul className="list search">
        {posts &&
          posts.map(({ synopsis, mal_id, title, image_url, url }) => {
            const shortenedSynopsis = synopsis
              .slice(0, 125)
              .replace("[Written by MAL Rewrite]", "")
            return (
              <GlobalList
                genreClassName="li--genres"
                liClassName="search--li li"
                titleClassName="li--title"
                imageClassName="li--image"
                href={`/anime/[id]/`}
                as={`/anime/${mal_id}/`}
                synopsis={shortenedSynopsis}
                mal_id={mal_id}
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
