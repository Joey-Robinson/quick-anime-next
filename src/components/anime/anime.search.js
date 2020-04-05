import React from "react"

const AnimeSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search--input">
      <form className="field" onSubmit={onSubmit} autoComplete="off" noValidate>
        <input
          id="anime-search"
          label="Search Anmie"
          aria-label="Search For Anime"
          type="text"
          value={value}
          className="field--input"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default AnimeSearch
