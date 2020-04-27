import React from "react"

const AnimeSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search--input">
      <label htmlFor="anime-search">
        <span>Search For Anime</span>
      </label>
      <form
        role="search"
        className="field"
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          id="anime-search"
          label="Search Anmie"
          aria-label="Search for anime on this page"
          placeholder="Search For Anime"
          type="search"
          value={value}
          className="field--input"
          onChange={onChange}
        />
        <br />
        <input
          style={{
            margin: ".75rem 0 0 0",
            cursor: "pointer",
          }}
          type="submit"
          value="Search"
        />
      </form>
    </div>
  )
}

export default AnimeSearch
