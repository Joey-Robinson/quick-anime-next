import React, { useState } from "react"
import GenreSelect from "./genre.select"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [genreValue, setGenreValue] = useState(1)
  const [initialPage, setInitialPage] = useState(1)

  // const nextPage = () => {
  //   setInitialPage(initialPage + 1)
  // }

  // const previousPage = () => {
  //   setInitialPage(initialPage - 1)
  // }

  const changeHandler = (event) => {
    setGenreValue(event.target.value)
  }

  // useEffect(() => {
  //   fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
  //     .then((response) => response.json())
  //     .then((data) => setSelectedGenre(data))
  // }, [genreValue, initialPage])

  return (
    <>
      <GenreSelect
        className="genre--select"
        defaultValue={selectedGenre}
        handler={changeHandler}
      />
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
      </ul> */}
    </>
  )
}

export default GenreChange
