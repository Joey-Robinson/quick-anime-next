import React from "react"

const AnimeSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search--input">
      <form className="field" onSubmit={onSubmit} autoComplete="off" noValidate>
        <label htmlFor="anime-search">
          <span>Search For Anime</span>
          <input
            id="anime-search"
            label="Search Anmie"
            aria-label="Search For Anime"
            placeholder="Search For Anime"
            type="text"
            value={value}
            className="field--input"
            onChange={onChange}
          />
        </label>
      </form>
    </div>
  )
}

export default AnimeSearch
