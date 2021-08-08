// col-start-2 self-center justify-self-end grid"
import { motion } from "framer-motion"
// import { useRouter } from "next/router"
// import dynamic from "next/dynamic"
// import { useState } from "react"

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const HeaderSearch = ({ onSubmit, value, onChange }) => {
  // const [animeData, setAnimeData] = useState({ results: [] })
  // const [searchedAnime, setSearchedAnime] = useState("")
  // const [currentPage, setCurrentPage] = useState(1)

  // const searchCall = async () => {
  //   const response = await fetch(
  //     //&limit=10
  //     `https://api.jikan.moe/v3/search/anime?q=${searchedAnime}`
  //   )
  //   const data = await response.json()
  //   setAnimeData(data)
  //   console.log(animeData)
  //   console.log(searchedAnime)
  // }

  // const onChangeHandler = (event) => {
  //   setSearchedAnime(event.target.value)
  // }

  // const router = useRouter()
  // const onSubmitHandler = (event) => {
  //   if (event.key === 13) {
  //     event.preventDefault()
  //     router.push("/anime/search")
  //     searchCall()
  //   } else {
  //     event.preventDefault()
  //     searchCall()
  //     router.push("/anime/search")
  //   }
  // }

  return (
    // create function to search
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 10 }}
      className="header--form col-start-2 self-center justify-self-end font-sans text-black bg-white flex items-center justify-center"
    >
      <motion.div
        variants={fadeInUp}
        className="border rounded overflow-hidden flex"
      >
        <form role="search" onSubmit={onSubmit} autoComplete="off">
          <input
            type="text"
            className="px-4 py-2"
            id="anime--search"
            label="Search"
            aria-label="Search"
            placeholder="Search"
            type="search"
            value={value}
            onChange={onChange}
          />
        </form>
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  )
}

export default HeaderSearch
