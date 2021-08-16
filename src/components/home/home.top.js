import Image from "next/image"
import Link from "next/link"
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
  console.log(airingData.top)
  return (
    <div className="home--right">
      <div className="right">
        <h2 className="right--heading">Top Airing Anime</h2>
        {/* Create Page: Top Anime */}
        <span className="right--link">More</span>
      </div>
      <ul className="home--right__ul">
        {/* <li>Placeholder - Top</li>
        <li>Placeholder - Top</li>
        <li>Placeholder - Top</li>
        <li>Placeholder - Top</li>
        <li>Placeholder - Top</li> */}

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
              return (
                <li>
                  <span>{rank}</span>
                  <div>
                    <Image
                      width={50}
                      height={70}
                      src={image_url}
                      alt={`Thumb for ${title}`}
                      layout="fixed"
                    />
                  </div>
                  <div>
                    {type} {numericEpisodes} eps
                  </div>
                  <div>
                    <h3 style={{ cursor: "pointer" }}>
                      <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
                        {title}
                      </Link>
                    </h3>
                  </div>
                  <div>Scored: {score}</div>
                  <div>{members} members</div>
                </li>
              )
            }
          )}
      </ul>
    </div>
  )
}

export default TopAnime
