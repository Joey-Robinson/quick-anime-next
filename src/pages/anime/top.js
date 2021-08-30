import { useEffect, useState } from "react"
import Layout from "../../components/global/global.layout"
import SecondList from "../../components/global/global.secondList"
import SEO from "../../components/global/global.seo"

const Top = () => {
  const [topAnime, setTopAnime] = useState({ top: [] })

  const topAnimeCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1")
    const data = await response.json()
    setTopAnime(data)
  }

  useEffect(() => {
    topAnimeCall()
  }, [])

  console.log(topAnime)
  return (
    <Layout>
      <SEO title="Top Anime" />
      <div className="top">
        <div className="top--container">
          <div className="top--rank">Rank</div>
          <div className="top--title">Title</div>
          <div className="top--score">Score</div>
          <div className="top--yscore">Your Score</div>
          <div className="top--status">Status</div>
        </div>
        <ul className="ul--main">
          {topAnime.top.map(
            ({
              mal_id,
              image_url,
              title,
              score,
              members,
              start_date,
              end_date,
              type,
              episodes,
            }) => (
              <SecondList
                key={mal_id}
                type={type}
                episodes={episodes}
                title={title}
                score={score}
                members={members}
                start_date={start_date}
                end_date={end_date}
                image_url={image_url}
              />
            )
          )}
        </ul>
      </div>
    </Layout>
  )
}
export default Top
