import Image from "next/image"
import { useEffect, useState } from "react"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"

const Characters = () => {
  const [popularCharacters, setPopularCharacters] = useState({ top: [] })

  const upcomingCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/characters")
    const data = await response.json()
    setPopularCharacters(data)
  }

  useEffect(() => {
    upcomingCall()
  }, [])

  console.log(popularCharacters)
  return (
    <Layout>
      <SEO title="Characters" />
      <div className="characters">
        <div className="characters--search">Search</div>
        <div className="characters--container ul chars">
          <div className="chars--rank">Rank</div>
          <div className="chars--character">Character</div>
          <div className="chars--animeography">Animeography</div>
          <div className="chars--mangaography">Mangaography</div>
          <div className="chars--favorites">Favorites</div>
        </div>
        <ul className="ul--main">
          {popularCharacters.top
            .slice(0, 1)
            .map(({ mal_id, rank, title, url, image_url, name_kanji }) => (
              <li>
                <span>{rank}</span>
                <div>
                  <Image
                    width={50}
                    height={78}
                    src={image_url}
                    alt={`Thumb for ${title}`}
                    layout="fixed"
                  />
                </div>
                <hgroup>
                  <h4>{title}</h4>
                  <h5>{name_kanji}</h5>
                </hgroup>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  )
}

export default Characters
