import React, { useEffect, useState } from "react"
import Spinner from "../spinner"
import GenreList from "./genre.list"
import GenreSelect from "./genre.select"

const GenreChange = () => {
  const [selectedGenre, setSelectedGenre] = useState({ anime: [] })
  const [isLoading, setIsLoading] = useState(false)
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

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/genre/anime/${genreValue}/${initialPage}`)
      .then((response) => response.json())
      .then((data) => setSelectedGenre(data))
    setIsLoading(true)
  }, [genreValue, initialPage])

  return (
    <>
      <GenreSelect
        className="genre--select"
        defaultValue={selectedGenre}
        handler={changeHandler}
      />
      <ul className="list search">
        {!isLoading ? (
          <li>
            <Spinner />
          </li>
        ) : (
          <>
            {selectedGenre &&
              selectedGenre.anime.map(
                ({ synopsis, mal_id, title, image_url, url }) => {
                  const shortenedSynopsis = synopsis
                    .slice(0, 350)
                    .replace("[Written by MAL Rewrite]", "")
                  return (
                    <GenreList
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
          </>
        )}
      </ul>
    </>
  )
}

export default GenreChange
