import React from "react"

const GlobalSearch = ({
  onSubmit,
  value,
  onChange,
  placeholder,
  id,
  ariaLabel,
  label,
  spanText,
  idFor,
}) => {
  return (
    <div className="search--input">
      <label htmlFor={idFor}>
        <span>{spanText}</span>
      </label>
      <form
        role="search"
        className="field"
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          id={id}
          label={label}
          aria-label={ariaLabel}
          placeholder={placeholder}
          type="search"
          value={value}
          className="field--input"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default GlobalSearch
