import { useEffect, useState } from "react"
import { HomeRightList } from "./home.list"

const TopOverall = () => {
  const [overallPopular, setoverallPopular] = useState({ top: [] })

  const upcomingCall = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    )
    const data = await response.json()
    setoverallPopular(data)
  }

  useEffect(() => {
    upcomingCall()
  }, [])
  // testing for push status to check login information for gh
  return (
    <div className="home--bottom">
      <div className="bottom">
        <h2 className="bottom--heading">Top Upcoming Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="bottom--link">More</span>
      </div>
      <ul className="home--bottom__ul">
        {overallPopular.top
          .slice(0, 5)
          .map(
            ({
              mal_id,
              rank,
              title,
              image_url,
              score,
              members,
              type,
              episodes,
            }) => {
              const numericEpisodes = episodes === null ? "0" : episodes
              const memberValue = members
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              return (
                <HomeRightList
                  members={memberValue}
                  numericEpisodes={numericEpisodes}
                  score={score}
                  type={type}
                  mal_id={mal_id}
                  rank={rank}
                  title={title}
                  image_url={image_url}
                />
              )
            }
          )}
      </ul>
    </div>
  )
}

export default TopOverall
