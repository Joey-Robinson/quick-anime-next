import Image from "next/image"
import Link from "next/link"
// import { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"
import { MapUtil } from "../../utils/map.util"

const Page = ({ anime }) => {
  // const [images, setImages] = useState([])
  // console.log(anime)
  // Putting props in a const to avoid extra typing
  const results = anime
  const nameEnglish = results.name
  const id = results.mal_id
  const nameKanji = results.name_kanji
  const image = results.image_url
  const about = results.about
  const favorites = results.member_favorites
  const nicknames = results.nicknames
  const animeography = results.animeography
  const mangaography = results.mangaography
  const voiceActors = results.voice_actors
  // const Pictures = async () => {
  //   const url = `https://api.jikan.moe/v3/character/${id}/pictures`
  //   const result = await fetch(url)
  //   const data = await result.json()
  //   setImages(data)
  // }
  // useEffect(() => {
  //   Pictures()
  // }, [])
  // console.log(images)
  return (
    <Layout>
      <SEO title={nameEnglish} />
      {/* Character container */}
      <div className="character">
        {/* Nav/Stepper above HGroup */}
        <nav className="character--nav">
          <ul>
            <li>
              {/* Will need to add "AS" prop near deployment */}
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/characters">Characters</Link>
            </li>
            <li>
              <Link href="/">{nameEnglish}</Link>
            </li>
          </ul>
        </nav>

        {/*  */}
        <div className="character--right cright">
          <div className="cright--heading">
            <hgroup>
              <h2>{nameEnglish}</h2>
              <h3>{nameKanji}</h3>
            </hgroup>
          </div>
        </div>
        <div className="character--right__about ">
          <p>{about}</p>
        </div>

        {/* Left side */}
        <div className="character--left">
          {/* Left Image */}
          <div className="character--left__image">
            <Image
              width={225}
              height={350}
              layout="fixed"
              src={image}
              alt={`Character portrait for ${nameEnglish}`}
            />
          </div>
          {/* Left Animeography */}
          <div className="character--left__animeography">
            {/* <h4>Animeography</h4> */}
            <ul className="cl--anime">{MapUtil(animeography)}</ul>
            <h4>Mangaography</h4>
            <ul className="cl--manga">{MapUtil(mangaography)}</ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.params
  const url = `https://api.jikan.moe/v3/character/${id}`
  const result = await fetch(url)
  const data = await result.json()
  const anime = data
  return {
    props: { anime },
  }
}

export default Page
