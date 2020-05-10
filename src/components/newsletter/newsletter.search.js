import React from "react"

const NewsletterSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="search--input">
      <label htmlFor="newsletter-search">
        <span>Search Newsletters</span>
      </label>
      <form
        role="search"
        className="field"
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          id="newsletter-search"
          label="Search Newsletters"
          aria-label="Search for old newsletters"
          placeholder="Search Newsletters"
          type="search"
          value={value}
          className="field--input"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default NewsletterSearch
