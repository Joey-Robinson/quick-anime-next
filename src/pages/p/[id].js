import React, { useState } from "react"
import fetch from "isomorphic-unfetch"
import AnimeTemplate from "../../template/anime.template"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

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
  const id = results.mal_id
  const [animeNews, setAnimeNews] = useState({ articles: [] })
  const newsCall = async () => {
    const response = await fetch(`https://api.jikan.moe/v3/anime/${id}/news/`)
    const data = await response.json()
    setAnimeNews(data)
  }
  console.log(animeNews.articles)
  return (
    <Tabs defaultIndex={0}>
      {" "}
      <TabList>
        <Tab>{title} Information</Tab>
        <Tab onClick={newsCall}>{title} News</Tab>
      </TabList>
      <TabPanel>
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
      </TabPanel>
      <TabPanel></TabPanel>
    </Tabs>
  )
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const result = await fetch(`https://api.jikan.moe/v3/anime/${id}`)
  const anime = await result.json()
  return { anime }
}

export default Post
