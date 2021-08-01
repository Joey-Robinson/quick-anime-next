import Navigation from "./header.nav"
import HeaderSearch from "./header.search"
// import Notification from "./header.notification"

const Header = () => {
  return (
    <header className="grid self-start col-start-2 row-start-1 bg-purple-900 p-4 rounded-b-md">
      <Navigation />

      {/* Create header.search.js and use component here for a search */}

      <HeaderSearch />
    </header>
  )
}

export default Header
