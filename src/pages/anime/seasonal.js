import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
// import SeasonalList from "../../components/seasonal/seasonal.list"
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
        <ul className="list search">
          {seasonalData &&
            seasonalData.anime.map(
              ({ genres, synopsis, mal_id, title, image_url, url }) => {
                const genreList = genres.map(({ name }) => {
                  return (
                    <li key={mal_id} style={{ padding: "0", margin: "0" }}>
                      {name}
                    </li>
                  )
                })
                const shortenedSynopsis = synopsis
                  .slice(0, 125)
                  .replace("[Written by MAL Rewrite]", "")
                return (
                  <SeasonalList
                    key={mal_id}
                    title={title}
                    genres={genreList}
                    image_url={image_url}
                    url={url}
                    href={`/anime/[id]/`}
                    as={`/anime/${mal_id}/`}
                    synopsis={shortenedSynopsis}
                  />
                )
              }
            )}
        </ul>
      </div>
    </Layout>
  )
}
export default Seasonal
