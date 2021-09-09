import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

const Page = ({ data }) => {
  console.log("This is line 5", data)
  // Putting props in a const to avoid extra typing
  // const results = props.anime
  // const nameEnglish = results.name
  // const nameKanji = results.name_kanji
  // const image = results.image_url
  // const about = results.about
  // const favorites = results.member_favorites
  // const nicknames = results.nicknames
  // const animeography = results.animeography
  // const mangaography = results.mangaography
  return (
    <Layout>
      <SEO title="i" />
      <div>
        <p style={{ padding: "1rem 1.5rem" }}>pp</p>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log("This is line 27", context)
  // const result = await fetch(`https://api.jikan.moe/v3/character/`)
  const result = await fetch(`https://api.jikan.moe/v3/${context.resolvedUrl}`)
  const data = await result.json()
  const anime = data
  console.log(anime)
  return {
    props: { data },
  }
}

// Page.getInitialProps = async function (context) {
//   console.log(context)
//   const { id, name } = context.query
//   // console.log(context.query)
//   const result = await fetch(`https://api.jikan.moe/v3/character/${id}/${name}`)
//   const anime = await result.json()
//   return { anime }
// }

export default Page
