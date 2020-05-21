import dynamic from "next/dynamic"
import React, { useEffect, useRef, useState } from "react"
import Spinner from "../../components/global/global.spinner"
import GenreSelect from "./genre.select"

const GlobalList = dynamic(
  () => import("../../components/global/global.list"),
  {
    loading: () => <Spinner />,
  }
)

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, [])

  return isIntersecting
}

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

  const ref = useRef()
  const onScreen = useOnScreen(ref, "100px")

  return (
    <>
      <div ref={ref}>
        {onScreen ? (
          <GenreSelect
            previousOnClick={previousPage}
            previousButtonDisable={initialPage === 1 ? "disabled" : ""}
            nextButtonDisable={
              selectedGenre.anime.length < 100 ? "disabled" : ""
            }
            nextOnClick={nextPage}
            defaultValue={selectedGenre}
            handler={changeHandler}
            previousMessage="Previous Page"
            nextMessage="Next Page"
          />
        ) : (
          <div className="fab">
            <GenreSelect
              previousOnClick={previousPage}
              previousButtonDisable={initialPage === 1 ? "disabled" : ""}
              nextButtonDisable={
                selectedGenre.anime.length < 100 ? "disabled" : ""
              }
              nextOnClick={nextPage}
              defaultValue={selectedGenre}
              handler={changeHandler}
              previousMessage="&raquo;"
              nextMessage="&laquo;"
            />
          </div>
        )}
      </div>
      {/* {selectedGenre.anime == "" ? (
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
      )} */}
      <ul className="list search">
        {selectedGenre &&
          selectedGenre.anime.map(
            ({ synopsis, mal_id, title, image_url, url }) => {
              const shortenedSynopsis = synopsis
                .slice(0, 300)
                .replace("[Written by MAL Rewrite]", "")
              return (
                <GlobalList
                  titleClassName="li--title"
                  imageClassName="genre"
                  linkClassName="genre--link"
                  synopsisClassName="genre--synopsis"
                  key={mal_id}
                  title={title}
                  image_url={image_url}
                  url={url}
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  synopsis={shortenedSynopsis}
                />
              )
            }
          )}
      </ul>
    </>
  )
}

export default GenreChange
