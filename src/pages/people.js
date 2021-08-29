import Image from "next/image"
import { useEffect, useState } from "react"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"

const People = () => {
  const [popularPeople, setPopularPeople] = useState({ top: [] })
  const [nextPage, setNextPage] = useState(1)

  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  const peopleCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/top/people/${nextPage}`
    )
    const data = await response.json()
    setPopularPeople(data)
  }

  // const nextFifty = async () => {
  //   const response = await fetch(
  //     `https://api.jikan.moe/v3/top/people/${nextPage}`
  //   )
  //   const data = await response.json()
  //   setPopularpeople(data)
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
    peopleCall()
  }, [])

  // console.log(popularCharacters.top)
  return (
    <Layout>
      <SEO title="People" />
      <div className="people">
        {/* <ul className="people--alphabet">
          {alphabet.split("").map((l) => (
            <li>{l}</li>
          ))}
        </ul> */}
        {/* <div className="people--search">Search</div> */}
        {/* <div className="people--heading pagination">
          <h2>Most Favorited</h2> */}
        {/* {nextPage <= 1 ? (
            ""
          ) : (
            <button onClick={previousFifty}>Prev 50</button>
          )}
          <button onClick={nextFifty} className="pagination--next">
            Next 50 &gt;
          </button> */}
        {/* <div className="pagination--next">Next 50 &gt;</div> */}
        {/* </div> */}
        <div className="people--container ul">
          <div className="peeps--rank  peeps">Rank</div>
          <div className="peeps--character  peeps">Person</div>
          <div className="peeps--birthday  peeps">Birthday</div>
          <div className="peeps--favorites  peeps">Favorites</div>
        </div>
        <ul className="ul--main">
          {popularPeople.top.map(
            ({
              mal_id,
              rank,
              title,
              url,
              image_url,
              name_kanji,
              favorites,
              birthday,
            }) => {
              const formattedBirthday = new Date(birthday)
                .toDateString()
                .split(4, 4)
              const favoriteValue = favorites
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              // console.log(animeCatalog)
              return (
                <li className="peep">
                  <div className="peep--rank">{rank}</div>
                  <div className="peep--image">
                    <Image
                      width={50}
                      height={78}
                      src={image_url}
                      alt={`Thumb for ${title}`}
                      layout="fixed"
                    />
                  </div>
                  <hgroup className="peep--name">
                    <h4>{title}</h4>
                    <h5>{name_kanji}</h5>
                  </hgroup>
                  <div className="peep--birthday">{formattedBirthday}</div>

                  <div className="peep--favorites">{favoriteValue}</div>
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

export default People
