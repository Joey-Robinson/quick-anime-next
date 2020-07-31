import { motion } from "framer-motion"
import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import GenreSelect from "../../components/genres/genre.select"
import Spinner from "../../components/global/global.spinner"

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

const GlobalList = dynamic(
  () => import("../../components/global/global.list"),
  {
    loading: () => <Spinner />,
  }
)

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)

  const nextPage = () => {
    setInitialPage(initialPage + 1)
  }

  const previousPage = () => {
    setInitialPage(initialPage - 1)
  }

  const changeHandler = (event) => {
    setGenreValue(event.target.value)
  }

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
      .then((response) => response.json())
      .then((data) => setSelectedGenre(data))
  }, [genreValue, initialPage])

  console.log(selectedGenre)

  return (
    <>
      {/* <h1>hi</h1> */}
      {selectedGenre.anime && (
        <GenreSelect
          previousOnClick={previousPage}
          previousButtonDisable={initialPage === 1 ? "disabled" : ""}
          nextButtonDisable={selectedGenre.anime.length < 100 ? "disabled" : ""}
          nextOnClick={nextPage}
          defaultValue={selectedGenre}
          handler={changeHandler}
          previousMessage="Previous Page"
          nextMessage="Next Page"
        />
      )}
      {/* {selectedGenre.anime && (
        <div ref={ref}>
          {onScreen ? (
          ) : (
            <div
              role="button"
              onClick={toggleFable}
              className={isHidden ? `fab fab--opened` : `fab fab--closed`}
            >
              <GenreSelect
                previousOnClick={previousPage}
                previousButtonDisable={initialPage === 1 ? "disabled" : ""}
                nextButtonDisable={
                  selectedGenre.anime.length < 100 ? "disabled" : ""
                }
                nextOnClick={nextPage}
                defaultValue={selectedGenre}
                handler={changeHandler}
                nextMessage="&raquo;"
                previousMessage="&laquo;"
              />
            </div>
          )}
        </div>
      )} */}
      {selectedGenre.anime == "" ? (
        ""
      ) : (
        <h2
          style={{
            margin: "1.5rem 0",
            textAlign: "center",
            display: "block",
          }}
        >
          Displaying {selectedGenre.anime.length} Results
        </h2>
      )}
      <motion.ul className="list search" variants={fadeInUp}>
        {selectedGenre &&
          selectedGenre.anime.map(
            ({ synopsis, mal_id, title, image_url, url }) => {
              const shortenedSynopsis = synopsis
                .slice(0, 300)
                .replace("[Written by MAL Rewrite]", "")
              return (
                <GlobalList
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  synopsis={shortenedSynopsis}
                  mal_id={mal_id}
                  title={title}
                  image_url={image_url}
                  url={url}
                  key={mal_id}
                />
              )
            }
          )}
      </motion.ul>
      {/* <button className="top">
        <span>&uarr;</span>
      </button> */}
    </>
  )
}

export default GenreChange
