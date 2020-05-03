import React from "react"
import Navigation from "./header.nav"
import Notification from "./one"

const Header = () => {
  return (
    <header>
      <Notification />
      <Navigation />
    </header>
  )
}

export default Header
