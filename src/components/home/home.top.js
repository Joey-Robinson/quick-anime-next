// import Link from 'next/link'
// import Image from 'next/image'
import { useEffect, useState } from "react"

const TopAnime = () => {
  const [airingData, setAiringData] = useState({ top: [] })

  const topCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/anime/1/airing")
    const data = await response.json()
    setAiringData(data)
  }

  useEffect(() => {
    topCall()
  }, [])

  return (
    <div className="home--right">
      <div className="right">
        <h2 className="right--heading">Top Airing Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="right--link">More</span>
      </div>
      <ul className="home--right__ul">
        {airingData.top
          .slice(0, 5)
          .map(({ mal_id, rank, title, image_url, score, members }) => (
            <li>{title}</li>
          ))}
      </ul>
    </div>
  )
}

export default TopAnime
