import fetch from "isomorphic-unfetch"
import React, { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"
import AnimeTemplate from "../../template/anime.template"
import CharacterTemplate from "../../template/characters.template"
import RecommendationsTemplate from "../../template/recommendations.template"

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
  const aired = results.aired.string

  // Anime recommendations
  const id = results.mal_id
  const [animeRecs, setAnimeRecs] = useState({ recommendations: [] })

  const [characterData, setCharacterData] = useState({ characters: [] })

  const recommendationsCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/recommendations`
    )
    const data = await response.json()
    setAnimeRecs(data)
  }

  const characterDataCall = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/anime/${id}/characters_staff`
    )
    const data = await response.json()
    setCharacterData(data)
  }

  useEffect(() => {
    recommendationsCall()
    characterDataCall()
  }, [])

  const charInformation = characterData.characters.map(
    ({ image_url, name }) => (
      <li>
        <p>{name}</p>
        <div>
          <img src={image_url} alt="" />
        </div>
      </li>
    )
  )

  return (
    <Layout className="information">
      <SEO title={title} />

      <AnimeTemplate
        key={titlejp}
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
        airing={airing}
        aired={aired}
      />
      <ul className="information--character">
        {/* <li>props</li> */}
        {characterData.characters.map(({ name, url, image_url }) => (
          <CharacterTemplate name={name} image={image_url} />
        ))}
      </ul>
      <ul className="information--info">
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
