import { useEffect, useState } from "react"
// import HomeSignup from "../components/home/home.signup"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"
import HomeHeading from "../components/home/home.heading"
import HomeManga from "../components/home/home.manga"
import HomeSeasonal from "../components/home/home.seasonal"
import TopAnime from "../components/home/home.top"

const Index = () => {
  const [seasonalData, setSeasonalData] = useState({ anime: [] })
  const [mangaData, setMangaData] = useState({ top: [] })

  const seasonalCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/season")
    const data = await response.json()
    setSeasonalData(data)
  }

  const mangaCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/manga/1")
    const data = await response.json()
    setMangaData(data)
  }

  useEffect(() => {
    seasonalCall()
    mangaCall()
  }, [])

  const seasonName = seasonalData.season_name
  const seasonYear = seasonalData.season_year
  return (
    <Layout>
      <SEO title="Home" description="Quck Anime - Home Page" />
      <div className="home">
        <div className="home--seasonal">
          {/* className="home--seasonal__heading" */}
          <HomeHeading seasonName={seasonName} seasonYear={seasonYear} />
          <ul>
            {seasonalData.anime.map(({ title, image_url, mal_id }) => {
              return (
                <HomeSeasonal
                  title={title}
                  name={title}
                  image_url={image_url}
                  mal_id={mal_id}
                />
              )
            })}
          </ul>
        </div>
        <div className="home--manga">
          <ul className="home--manga__ul">
            {mangaData.top.map(({ mal_id, title, image_url }) => (
              <HomeManga
                name={title}
                mal_id={mal_id}
                title={title}
                image_url={image_url}
              />
            ))}
          </ul>
        </div>
        <TopAnime />
      </div>
    </Layout>
  )
}

export default Index
