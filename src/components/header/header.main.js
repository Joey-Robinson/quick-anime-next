import { useRouter } from "next/router"
import React from "react"
import Navigation from "./header.nav"
import HeaderTop from "./header.top"

const Header = () => {
  const router = useRouter()
  const renderSwitch = (param) => {
    switch (param) {
      case "foo":
        return "bar"
      default:
        return "foo"
    }
  }
  return (
    <header>
      {router.pathname == "/" ? (
        <HeaderTop imagesource="/assets/dio.gif" alt="It was me, Dio!" />
      ) : (
        ""
      )}
      <Navigation />
    </header>
  )
}

export default Header
