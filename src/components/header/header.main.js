import Navigation from "./header.nav"
// import HeaderSearch from "./header.search"

const Header = () => {
  return (
    <header className="grid items-center self-start col-start-2 row-start-1">
      <Navigation />

      {/* Create header.search.js and use component here for a search */}

      {/* <HeaderSearch /> */}
    </header>
  )
}

export default Header
