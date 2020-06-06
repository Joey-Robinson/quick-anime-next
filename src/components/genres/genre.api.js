import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import Spinner from "../../components/global/global.spinner"

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
      <h1>hi</h1>
      {/* {selectedGenre.anime && (
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
      )} */}
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
      {/* <ul className="list search">
        {selectedGenre &&
          selectedGenre.anime.map(
            ({ synopsis, mal_id, title, image_url, url }) => {
              const shortenedSynopsis = synopsis
                .slice(0, 300)
                .replace("[Written by MAL Rewrite]", "")
              return (
                <GlobalList
                  liClassName="search--li season"
                  synopsisClassName="season--synopsis"
                  synopsisClassNameContainer="season--container"
                  titleClassName="li--title"
                  imageClassName="season--image"
                  href={`/anime/[id]/`}
                  as={`/anime/${mal_id}/`}
                  mal_id={mal_id}
                  synopsis={shortenedSynopsis}
                  title={title}
                  image_url={image_url}
                  url={url}
                  key={mal_id}
                />
              )
            }
          )}
      </ul> */}
      {/* <button className="top">
        <span>&uarr;</span>
      </button> */}
    </>
  )
}

export default GenreChange
