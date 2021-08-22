import { useEffect, useState } from "react"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"

const Characters = () => {
  const [popularCharacters, setPopularCharacters] = useState({ top: [] })

  const upcomingCall = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    )
    const data = await response.json()
    setPopularCharacters(data)
  }

  useEffect(() => {
    upcomingCall()
  }, [])

  console.log(popularCharacters)
  return (
    <Layout>
      <SEO title="Characters" />
      <div className="characters">
        <div className="characters--search">Search</div>
        From Characters
      </div>
    </Layout>
  )
}

export default Characters
