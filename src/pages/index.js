import Image from "next/image"
import React, { useEffect, useState } from "react"
// import HomeSignup from "../components/home/home.signup"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"

const Index = () => {
  const [seasonalData, setSeasonalData] = useState({ anime: [] })

  const seasonalCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/season")
    const data = await response.json()
    setSeasonalData(data)
  }

  useEffect(() => {
    seasonalCall()
  }, [])
  console.log(seasonalData)
  return (
    <Layout>
      <SEO title="Home" description="Quck Anime - Home Page" />
      <div className="seasonal">
        <ul>
          {seasonalData.anime.map(({ title, image_url }) => {
            return (
              <li>
                <div className="card">
                  <div className="card--container">
                    <h3 className="card--container__heading">{title}</h3>
                    <Image
                      className="card--container__img"
                      src={image_url}
                      alt={`Thumb for ${title}`}
                      layout="fixed"
                      width={160}
                      height={220}
                    />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Index
