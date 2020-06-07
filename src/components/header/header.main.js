import React from "react"
// import Notification from "./header.notification"
import { slide as Menu } from "react-burger-menu"
import Navigation from "./header.nav"

const Header = () => {
  return (
    <header>
      {/* <Notification /> */}
      <Menu>
        <Navigation />
      </Menu>
    </header>
  )
}

export default Header
