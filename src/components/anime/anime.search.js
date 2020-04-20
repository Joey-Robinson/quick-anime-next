import React from "react"

const AnimeSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search--input">
      <style jsx>{`
        .search--input {
          margin: 250px;
        }
        p {
          color: blue;
        }
      `}</style>
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
      </form>
    </div>
  )
}

export default AnimeSearch
