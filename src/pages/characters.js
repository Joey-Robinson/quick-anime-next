import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"
import { trimString } from "../utils/trim.utils"

const Characters = () => {
  const [popularCharacters, setPopularCharacters] = useState({ top: [] })
  const [nextPage, setNextPage] = useState(1)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const characterCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/characters/${nextPage}`
    )
    const data = await response.json()
    setPopularCharacters(data)
  }

  // const nextFifty = async () => {
  //   const response = await fetch(
  //     `https://api.jikan.moe/v3/top/characters/${nextPage}`
  //   )
  //   const data = await response.json()
  //   setPopularCharacters(data)
  //   setNextPage(nextPage + 1)
  //   console.log(nextPage)
  // }

  // const previousFifty = async () => {
  //   const response = await fetch(
  //     `https://api.jikan.moe/v3/top/characters/${nextPage}`
  //   )
  //   const data = await response.json()
  //   setPopularCharacters(data)
  //   setNextPage(nextPage - 1)
  // }

  useEffect(() => {
    characterCall()
  }, [nextPage])

  // console.log(popularCharacters.top)
  return (
    <Layout>
      <SEO title="Characters" />
      <div className="characters">
        <ul className="characters--alphabet">
          {alphabet.split("").map((l) => (
            <li>{l}</li>
          ))}
        </ul>
        {/* <div className="characters--search">Search</div> */}
        <div className="characters--heading pagination">
          <h2>Most Favorited</h2>
          {/* {nextPage <= 1 ? (
            ""
          ) : (
            <button onClick={previousFifty}>Prev 50</button>
          )}
          <button onClick={nextFifty} className="pagination--next">
            Next 50 &gt;
          </button> */}
          <div className="pagination--next">Next 50 &gt;</div>
        </div>
        <div className="characters--container ul">
          <div className="chars--rank  chars">Rank</div>
          <div className="chars--character  chars">Character</div>
          <div className="chars--animeography  chars">Animeography</div>
          <div className="chars--mangaography  chars">Mangaography</div>
          <div className="chars--favorites  chars">Favorites</div>
        </div>
        <ul className="ul--main">
          {popularCharacters.top.map(
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
              const animeCatalog = animeography.map(({ name }) => {
                const shortName = trimString(name, 22)
                return (
                  <div>
                    <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
                      {shortName}
                    </Link>
                  </div>
                )
              })
              const mangaCatalog = mangaography.map(({ name }) => {
                const shortName = trimString(name, 23)
                return (
                  <>
                    <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
                      {shortName}
                    </Link>
                  </>
                )
              })
              const favoriteValue = favorites
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              // console.log(animeCatalog)
              return (
                <li className="char">
                  <span className="char--rank">{rank}</span>
                  <div className="char--image">
                    <Image
                      width={50}
                      height={78}
                      src={image_url}
                      alt={`Thumb for ${title}`}
                      layout="fixed"
                    />
                  </div>
                  <hgroup className="char--name">
                    <h4>{title}</h4>
                    <h5>{name_kanji}</h5>
                  </hgroup>

                  <div className="char--animeography">{animeCatalog}</div>
                  <div className="char--mangaography">{mangaCatalog}</div>
                  <div className="char--favorites">{favoriteValue}</div>
                </li>
              )
            }
          )}
        </ul>
        {/* <button onClick={() => setNextPage(nextPage + 1)}>Next 50 &gt;</button> */}
      </div>
    </Layout>
  )
}

export default Characters
