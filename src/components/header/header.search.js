const HeaderSearch = ({ onSubmit, value, onChange }) => {
  return (
    <div className="col-start-2 self-center justify-self-end grid">
      {/* <label className="px-3" htmlFor="blog--search">
        <span className="mx-1 text-lg text-link"></span>
      </label> */}
      <form
        role="search"
        className="text-yellow-600 px-3"
        onSubmit={onSubmit}
        autoComplete="off"
        noValidate
      >
        <input
          id="anime--search"
          label="Search"
          aria-label="Search"
          placeholder="Search"
          type="search"
          value={value}
          className="py-0 px-2 my-2 mx-0 h-8 w-48 border-none outline-none rounded text-lg bg-input text-aux"
          onChange={onChange}
        />
      </form>
    </div>
  )
}

export default HeaderSearch
