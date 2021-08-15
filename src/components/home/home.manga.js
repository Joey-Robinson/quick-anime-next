import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const HomeManga = () => {
  const [mangaData, setMangaData] = useState({ top: [] })

  const mangaCall = async () => {
    const response = await fetch("https://api.jikan.moe/v3/top/manga/1")
    const data = await response.json()
    setMangaData(data)
  }

  useEffect(() => {
    mangaCall()
  }, [])

  return (
    <div className="home--manga">
      <ul className="home--manga__ul">
        {mangaData.top.map(({ mal_id, title, image_url }) => (
          <li>
            <div className="home--manga__container manga--container">
              <div className="manga--container__card">
                <Link
                  style={{ cursor: "pointer" }}
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                >
                  <motion.div
                    animate={{ x: 0, opacity: 1 }}
                    initial={{ x: 200, opacity: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Image
                      width={103}
                      height={168}
                      src={image_url}
                      alt={`Thumb for ${title}`}
                      layout="fixed"
                    />
                    <h4 className="manga--container__heading">{name}</h4>
                  </motion.div>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeManga
