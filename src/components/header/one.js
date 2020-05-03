import { useRouter } from "next/router"
import React from "react"
import HeaderTop from "./header.top"

const Notification = () => {
  const router = useRouter()

  return (
    <div>
      {(function () {
        switch (router.pathname) {
          case "/":
            return (
              <HeaderTop imagesource="/assets/dio.gif" alt="It was me, Dio!" />
            )
          case "/anime":
            return (
              <HeaderTop
                imagesource="/assets/kaguya.gif"
                alt="Kaguya being smug."
              />
            )
          case "/anime/search":
            return (
              <HeaderTop
                imagesource="/assets/kirino.gif"
                alt="Kirino searching for anime."
              />
            )
          case "/anime/genres":
            return (
              <HeaderTop
                imagesource="/assets/silentvoice.gif"
                alt="Can we be friends?"
              />
            )
          case "/anime/seasonal":
            return (
              <HeaderTop
                imagesource="/assets/towerofgod.gif"
                alt="Two turtles and an aligator talking."
              />
            )
          case "/newsletter":
            return (
              <HeaderTop
                imagesource="/assets/light.gif"
                alt="Light taking notes."
              />
            )
          default:
            return null
        }
      })()}
    </div>
  )
}

export default Notification
