import React, { useState } from "react"

const AnimeNews = () => {
  const [animeId, setAnimeId] = useState(1)

  const animeNews = async () => {
    const response = await fetch(
      `https://api.jikan.moe/v3/anime/${animeId}/news/`
    )
    const data = await response.json()
    setAnimeId(data)
  }

  return (
    <div>
      <h1>from here</h1>
    </div>
  )
}
