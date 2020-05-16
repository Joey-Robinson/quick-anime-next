import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
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
        <h5>Displaying {seasonalData.anime.length} Results</h5>
      </hgroup>
      <ul className="list search">
        {posts &&
          posts.map(({ synopsis, mal_id, title, image_url, url }) => {
            const shortenedSynopsis = synopsis
              .slice(0, 125)
              .replace("[Written by MAL Rewrite]", "")
            return (
              <GlobalList
                liClassName="search--li li"
                titleClassName="li--title"
                imageCLassName="li--image"
                href={`/anime/[id]/`}
                as={`/anime/${mal_id}/`}
                synopsis={shortenedSynopsis}
                mal_id={mal_id}
                title={title}
                image_url={image_url}
                url={url}
              />
            )
          })}
      </ul>
    </Layout>
  )
}
export default Seasonal
