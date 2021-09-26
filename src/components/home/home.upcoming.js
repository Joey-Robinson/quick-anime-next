import { useEffect, useState } from "react"
import { HomeRightList } from "./home.list"
// import HomeRightList from "./home.list"

const TopUpcoming = () => {
  const [airingData, setAiringData] = useState({ top: [] })

  const upcomingCall = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/upcoming"
    )
    const data = await response.json()
    setAiringData(data)
  }

  useEffect(() => {
    upcomingCall()
  }, [])
  const pp = airingData
  return (
    <div className="home--middle">
      <div className="middle">
        <h2 className="middle--heading">Top Upcoming Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="middle--link">More</span>
      </div>
      <ul className="home--right__ul">
        {airingData.top
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

export default TopUpcoming
