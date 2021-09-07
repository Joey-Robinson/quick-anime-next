import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

const Page = (props) => {
  console.log(props)
  // Putting props in a const to avoid extra typing
  const results = props.anime
  const nameEnglish = results.name
  const nameKanji = results.name_kanji
  const image = results.image_url
  const about = results.about
  const favorites = results.member_favorites
  const nicknames = results.nicknames
  const animeography = results.animeography
  const mangaography = results.mangaography
  console.log(results)
  return (
    <Layout>
      <SEO title={nameEnglish} />
      <div>
        <p style={{ padding: "1rem 1.5rem" }}>{about}</p>
      </div>
    </Layout>
  )
}

// export const getServerSideProps = async (context) => {
//   const { id, name } = context.query
//   const result = await fetch(`https://api.jikan.moe/v3/character/${id}/${name}`)
//   const data = await result.json()
//   // console.log(data)
//   return {
//     props: data,
//   }
// }

Page.getInitialProps = async function (context) {
  const { id, name } = context.query
  console.log(context.query)
  const result = await fetch(`https://api.jikan.moe/v3/character/${id}/${name}`)
  const anime = await result.json()
  return { anime }
}

export default Page
