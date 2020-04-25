import fetch from "isomorphic-unfetch"
import React, { useEffect, useState } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AnimeTemplate from "../../template/anime.template"
import NewsTemplate from "../../template/news.template"

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
  const genres = results.genres
  const genreNames = genres.map(({ name }) => ` ${name}, `)

  // Anime news
  const id = results.mal_id
  const [animeRecs, setAnimeRecs] = useState({ recommendations: [] })

  const newsCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/recommendations`
    )
    const data = await response.json()
    setAnimeRecs(data)
  }

  useEffect(() => {
    newsCall()
  }, [])

  // No background information
  const noBackgroundInformation =
    "There is currently no background information given for this anime."

  return (
    <Layout>
      <SEO title={title} />
      <div className="results">
        <AnimeTemplate
          genres={genreNames}
          title={title}
          titlejp={titlejp}
          synopsis={synopsis}
          duration={duration}
          background={!background ? noBackgroundInformation : background}
          image={image}
          source={source}
          episodes={episodes}
          rating={rating}
          url={url}
          airing={airing}
        />
        <ul className="results--news">
          {animeRecs.recommendations.map(
            ({
              mal_id,
              href,
              as,
              image_url,
              recommendation_count,
              recommendation_url,
              title,
            }) => (
              <NewsTemplate
                key={title}
                title={title}
                recommendation_url={recommendation_url}
                image_url={image_url}
                url={url}
                recommendation_count={recommendation_count}
                href={`/anime/[id]/`}
                as={`/anime/${mal_id}/`}
              />
            )
          )}
        </ul>
      </div>
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
