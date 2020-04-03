import Layout from "../../components/layout"
import fetch from "isomorphic-unfetch"

const Post = (props) => {
  const title = props.anime.title
  return (
    <Layout>
      <h1>{title}</h1>
    </Layout>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  console.log(id)
  const result = await fetch(`https://api.jikan.moe/v3/search/anime?q=${id}`)
  const anime = await result.json()
  return { anime: anime.results }
}

export default Post
