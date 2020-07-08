import { motion } from "framer-motion"
import fetch from "isomorphic-unfetch"
import React, { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"
// import RecommendationsTemplate from "../../template/recommendations.template"

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

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
  const smugkaguya = (
    <img src="/static/smugkaguya.jpg" alt="Kagyua being smug." />
  )

  const noBackground = (
    <>
      There is currently no background information given for this anime.
      {smugkaguya}
    </>
  )

  return (
    <Layout>
      <SEO title={title} />
      <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
        <div className="fullscreen">
          <div className="product">
            <motion.div
              className="img"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
            >
              <motion.img
                key={image}
                src={image}
                animate={{ x: 0, opacity: 1 }}
                initial={{ x: 200, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
              />
            </motion.div>
            <div className="product-details">
              <motion.div variants={stagger} className="inner">
                <motion.div variants={fadeInUp}>
                  <span className="category">{titlejp}</span>
                </motion.div>
                <motion.h1 variants={fadeInUp}>{title}</motion.h1>
                <motion.p variants={fadeInUp}>{background}</motion.p>
                <motion.div variants={fadeInUp} className="additonals">
                  <span>{rating}</span>
                  <span>{duration}</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="qty-price">
                  <span className="price">{synopsis}</span>
                </motion.div>
                <motion.div variants={fadeInUp} className="btn-row">
                  <button className="add-to-cart">{genreNames}</button>
                  <button className="subscribe">{source}</button>
                </motion.div>
              </motion.div>
            </div>
            {/* <ul className="results--recommendations">
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
            </ul> */}
          </div>
        </div>
      </motion.div>
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
