// import Layout from "../../components/Layout"
import fetch from "isomorphic-unfetch"

const Post = props => (
  <>
    <h1>{props.anime.title}</h1>
    {/* <p>{props.anime.mal_id.replace(/<[/]?[pb]>/g, "")}</p> */}
    <p>{props.anime.synopsis}</p>
  </>
)

Post.getInitialProps = async function() {
  // const { id } = context.query
  const result = await fetch(
    `https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1`
  )
  const anime = await result.json()

  return { anime }
}

export default Post
