// import { useRouter } from "next/router"
import React from "react"
import Navigation from "./header.nav"
import Notification from "./one"

const Header = () => {
  // const router = useRouter()
  // let thing = null
  // const renderSwitch = (param) => {
  //   switch (param) {
  //     case "foo":
  //       return "bar"
  //     default:
  //       return "foo"
  //   }
  // }
  return (
    <header>
      <Notification />
      <Navigation />
    </header>
  )
}

export default Header
