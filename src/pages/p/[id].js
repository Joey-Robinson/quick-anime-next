import React from "react"
import Layout from "../../components/layout"
import fetch from "isomorphic-unfetch"
import Head from "next/head"
import SEO from "../../components/seo"

const Post = (props) => {
  console.log(props)
  const results = props.anime
  const synopsis = results.synopsis
  const title = results.title
  const titlejp = results.title_japanese
  const image = results.image_url
  const episodes = results.episodes
  const rating = results.rated
  const url = results.url
  const airing = results.airing
  const score = results.score
  // const id = results.mal_id
  // fetch(`https://api.jikan.moe/v3/anime/${id}/news/`)
  //   .then((data) => data.json())
  //   .then((response) => console.log(response))

  // console.log(title)
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const result = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
  const anime = await result.json()
  return { anime }
}

export default Post
