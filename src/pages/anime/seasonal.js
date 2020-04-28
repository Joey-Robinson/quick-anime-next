import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SeasonalList from "../../components/seasonal/seasonal.list"
import SEO from "../../components/seo"

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
    <Layout className="seasonal">
      <SEO title="Seasonal Anime" description="Anime for this season" />
      <div className="container">
        <h2>
          Listing Anime for {seasonalName} {seasonalYear}
        </h2>
        <ul className="list search">
          {seasonalData &&
            seasonalData.anime.map(
              ({ synopsis, mal_id, title, image_url, url }) => {
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
              }
            )}
        </ul>
      </div>
    </Layout>
  )
}
export default Seasonal
