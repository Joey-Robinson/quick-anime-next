import React from "react"
import { slide as Menu } from "react-burger-menu"
import Navigation from "./header.nav"
import Notification from "./header.notification"

const Header = () => {
  return (
    <header>
      <Menu isOpen>
        <Navigation />
        <Notification />
      </Menu>
    </header>
  )
}

export default Header
