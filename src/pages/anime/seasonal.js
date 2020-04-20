import React, { useState, useEffect } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import SeasonalList from "../../components/seasonal/seasonal.list"

// https://api.jikan.moe/v3/season

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
    <Layout>
      <SEO title="Seasonal Anime" description="Anime for this season" />
      <h2
        style={{
          gridRow: "1",
          justifySelf: "center",
          gridColumn: "1 / -1",
          margin: "3rem 0 0 0",
          fontSize: "3rem",
        }}
      >
        Listing Anime for {seasonalName} {seasonalYear}
      </h2>
      <ul className="list search">
        {seasonalData.anime.map(
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
    </Layout>
  )
}
export default Seasonal
