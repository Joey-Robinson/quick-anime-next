// import Link from 'next/link'
// import Image from 'next/image'
// import { useEffect, useState } from "react"

const TopOverall = () => {
  // const [overallPopular, setoverallPopular] = useState({ top: [] })

  // const upcomingCall = async () => {
  //   const response = await fetch(
  //     "https://api.jikan.moe/v3/top/anime/1/bypopularity"
  //   )
  //   const data = await response.json()
  //   setoverallPopular(data)
  // }

  // useEffect(() => {
  //   upcomingCall()
  // }, [])

  return (
    <div className="home--bottom">
      <div className="bottom">
        <h2 className="bottom--heading">Top Upcoming Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="bottom--link">More</span>
      </div>
      <ul className="home--bottom__ul">
        <li>Placeholder - Bottom</li>
        <li>Placeholder - Bottom</li>
        <li>Placeholder - Bottom</li>
        <li>Placeholder - Bottom</li>
        <li>Placeholder - Bottom</li>
        {/* {overallPopular.top
          .slice(0, 5)
          .map(({ mal_id, rank, title, image_url, score, members }) => (
            <li>{title}</li>
          ))} */}
      </ul>
    </div>
  )
}

export default TopOverall
