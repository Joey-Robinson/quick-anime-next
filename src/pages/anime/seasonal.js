import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import GlobalSearch from "../../components/global/global.search"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Spinner from "../../components/spinner"

const SeasonalList = dynamic(
  () => import("../../components/seasonal/seasonal.list"),
  {
    loading: () => <Spinner />,
  }
)

const Seasonal = () => {
  const [seasonalData, setSeasonalData] = useState({ anime: [] })

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
    const filteredData = posts.filter((post) => {
      const { title, tags } = post
      return title.toLowerCase().includes(query.toLowerCase())
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
      <div className="container">
        <hgroup style={{ textAlign: "center" }}>
          <h2>
            Listing Anime for {seasonalName} {seasonalYear}
          </h2>
          <h5>Displaying {seasonalData.anime.length} Results</h5>
        </hgroup>
        <GlobalSearch
          onSubmit={(event) => event.preventDefault()}
          value={query}
          onChange={handleInputChange}
        />
        <ul className="list search">
          {posts &&
            posts.map(({ synopsis, mal_id, title, image_url, url }) => {
              const shortenedSynopsis = synopsis
                .slice(0, 125)
                .replace("[Written by MAL Rewrite]", "")
              return (
                <SeasonalList
                  key={mal_id}
                  title={title}
                  image_url={image_url}
                  url={url}
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  synopsis={shortenedSynopsis}
                />
              )
            })}
        </ul>
      </div>
    </Layout>
  )
}
export default Seasonal
