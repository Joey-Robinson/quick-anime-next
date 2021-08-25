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

  // console.log(popularCharacters.top)
  return (
    <Layout>
      <SEO title="Characters" />
      <div className="characters">
        {/* <div className="characters--search">Search</div> */}
        <div className="characters--container ul">
          <div className="chars--rank  chars">Rank</div>
          <div className="chars--character  chars">Character</div>
          <div className="chars--animeography  chars">Animeography</div>
          <div className="chars--mangaography  chars">Mangaography</div>
          <div className="chars--favorites  chars">Favorites</div>
        </div>
        <ul className="ul--main">
          {popularCharacters.top
            .slice(0, 1)
            .map(
              ({
                mal_id,
                rank,
                title,
                url,
                image_url,
                name_kanji,
                animeography,
                mangaography,
                favorites,
              }) => {
                const animeCatalog = animeography.map(({ name }) => (
                  <p>{name}</p>
                ))
                const mangaCatalog = mangaography.map(({ name }) => (
                  <p>{name}</p>
                ))
                const favoriteValue = favorites
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                // console.log(animeCatalog)
                return (
                  <li className="char">
                    <span className="char--rank">{rank}</span>
                    <div className="char--container">
                      <Image
                        width={50}
                        height={78}
                        src={image_url}
                        alt={`Thumb for ${title}`}
                        layout="fixed"
                      />
                      <hgroup>
                        <h4>{title}</h4>
                        <h5>{name_kanji}</h5>
                      </hgroup>
                    </div>
                    <div className="char--animeography">{animeCatalog}</div>
                    <div className="char--mangaography">{mangaCatalog}</div>
                    <div className="char--favorites">{favoriteValue}</div>
                  </li>
                )
              }
            )}
        </ul>
      </div>
    </Layout>
  )
}

export default Characters
