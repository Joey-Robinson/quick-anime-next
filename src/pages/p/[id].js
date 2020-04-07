import React from "react"
import Layout from "../../components/layout"
import fetch from "isomorphic-unfetch"
import Head from "next/head"
import SEO from "../../components/seo"
import AnimeTemplate from "../../template/anime.template"

const Post = (props) => {
  const results = props.anime

  // Anime Information
  const synopsis = results.synopsis.replace("[Written by MAL Rewrite]", "")
  const background = results.background
  const title = results.title
  const titlejp = results.title_japanese
  const image = results.image_url
  const episodes = results.episodes
  const rating = results.rating
  const duration = results.duration
  const url = results.url
  const airing = results.status
  const source = results.source
  const genres = results.genres // need to map
  const genreNames = genres.map(({ name }) => ` ${name}, `)

  // Anime news
  // const id = results.mal_id
  // fetch(`https://api.jikan.moe/v3/anime/${id}/news/`)
  //   .then((data) => data.json())
  //   .then((response) => console.log(response))

  // console.log(title)
  return (
    <AnimeTemplate
      genres={genreNames}
      title={title}
      titlejp={titlejp}
      synopsis={synopsis}
      duration={duration}
      background={background}
      image={image}
      source={source}
      episodes={episodes}
      rating={rating}
      url={url}
      airing={airing}
    />
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const result = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
  const anime = await result.json()
  return { anime }
}

export default Post
