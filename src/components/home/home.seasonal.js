import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import HomeHeading from "./home.heading"

const HomeSeasonal = () => {
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
    <div className="home--seasonal">
      <HomeHeading seasonName={seasonName} seasonYear={seasonYear} />
      <ul>
        {seasonalData.anime.map(({ title, image_url, mal_id }) => {
          return (
            <li>
              <div className="card">
                <div className="card--container">
                  <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
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
  )
}

export default HomeSeasonal
