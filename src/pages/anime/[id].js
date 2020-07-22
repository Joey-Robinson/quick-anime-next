// import { motion } from "framer-motion"
import fetch from "isomorphic-unfetch"
import React, { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"
import AnimeTemplate from "../../template/anime.template"
import RecommendationsTemplate from "../../template/recommendations.template"

// let easing = [0.6, -0.05, 0.01, 0.99]

// const fadeInUp = {
//   initial: {
//     y: 60,
//     opacity: 0,
//     transition: { duration: 0.6, ease: easing },
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: easing,
//     },
//   },
// }

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
  const genreNames = genres.map(({ name }) => <li>{name}</li>)

  // Anime recommendations
  const id = results.mal_id
  const [animeRecs, setAnimeRecs] = useState({ recommendations: [] })

  const recommendationsCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/recommendations`
    )
    const data = await response.json()
    setAnimeRecs(data)
  }

  useEffect(() => {
    recommendationsCall()
  }, [])

  // No background information
  // const smugkaguya = (
  //   <img src="/static/smugkaguya.jpg" alt="Kagyua being smug." />
  // )

  // const noBackground = (
  //   <>
  //     There is currently no background information given for this anime.
  //     {smugkaguya}
  //   </>
  // )

  return (
    <Layout className="pp">
      <SEO title={title} />
      <AnimeTemplate
        synopsis={synopsis}
        title={title}
        titlejp={titlejp}
        background={background}
        synopsis={synopsis}
        image={image}
        episodes={episodes}
        rating={rating}
        duration={duration}
        source={source}
        genres={genreNames}
      />
      <ul className="info">
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
            <RecommendationsTemplate
              key={`${mal_id}/${title}`}
              title={title}
              recommendation_url={recommendation_url}
              image_url={!image_url ? <Spinner /> : image_url}
              url={url}
              recommendation_count={recommendation_count}
              href={`/anime/[id]/`}
              as={`/anime/${mal_id}/`}
            />
          )
        )}
      </ul>
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
