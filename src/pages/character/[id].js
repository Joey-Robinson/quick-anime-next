import Image from "next/image"
// import { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

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
      <div className="character">
        <div className="character--right">{about}</div>
        <div className="character--left">
          <div>
            <Image
              width={225}
              height={350}
              layout="fixed"
              src={image}
              alt={`Character portrait for ${nameEnglish}`}
            />
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
