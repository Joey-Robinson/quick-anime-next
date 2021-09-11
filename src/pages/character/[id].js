import Image from "next/image"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

const Page = ({ anime }) => {
  console.log(anime)
  // Putting props in a const to avoid extra typing
  const results = anime
  const nameEnglish = results.name
  const nameKanji = results.name_kanji
  const image = results.image_url
  const about = results.about
  console.log(JSON.stringify(about))
  const favorites = results.member_favorites
  const nicknames = results.nicknames
  const animeography = results.animeography
  const mangaography = results.mangaography
  return (
    <Layout>
      <SEO title={nameEnglish} />
      <div className="character">
        {about}
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
