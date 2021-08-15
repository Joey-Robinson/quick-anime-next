// import Link from 'next/link'
// import Image from 'next/image'
// import { useEffect, useState } from "react"

const TopUpcoming = () => {
  // const [airingData, setAiringData] = useState({ top: [] })

  // const upcomingCall = async () => {
  //   const response = await fetch(
  //     "https://api.jikan.moe/v3/top/anime/1/upcoming"
  //   )
  //   const data = await response.json()
  //   setAiringData(data)
  // }

  // useEffect(() => {
  //   upcomingCall()
  // }, [])

  return (
    <div className="home--middle">
      <div className="middle">
        <h2 className="middle--heading">Top Upcoming Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="middle--link">More</span>
      </div>
      <ul className="home--middle__ul">
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        <li>Placeholder</li>
        {/* {airingData.top
          .slice(0, 5)
          .map(({ mal_id, rank, title, image_url, score, members }) => (
            <li>{title}</li>
          ))} */}
      </ul>
    </div>
  )
}

export default TopUpcoming
