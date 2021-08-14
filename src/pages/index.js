import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
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

  const seasonName = seasonalData.season_name
  const seasonYear = seasonalData.season_year

  return (
    <Layout>
      <SEO title="Home" description="Quck Anime - Home Page" />
      <div className="seasonal">
        <div className="seasonal--heading">
          <h2>
            <Link href="/anime/seasonal">
              <a>
                {seasonName} {seasonYear} Anime
              </a>
            </Link>
          </h2>
        </div>
        <hr />
        <ul className="home--container">
          {seasonalData.anime.map(({ title, image_url, mal_id }) => {
            // console.log(index)
            return (
              <li className="scroll--content">
                <div className="card">
                  <div className="card--container">
                    <Link
                      style={{ cursor: "pointer" }}
                      href={`/anime/[id]/`}
                      as={`/anime/${mal_id}/`}
                    >
                      <motion.div
                        animate={{ x: 0, opacity: 1 }}
                        initial={{ x: 200, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Image
                          className="card--container__img"
                          src={image_url}
                          alt={`Thumb for ${title}`}
                          layout="fixed"
                          width={160}
                          height={220}
                        />
                        <h3 className="card--container__heading">{title}</h3>
                      </motion.div>
                    </Link>
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
