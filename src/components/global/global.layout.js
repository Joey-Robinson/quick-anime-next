import Link from "next/link"
import React from "react"
import Header from "../header/header.main"

const Layout = ({ children }) => (
  <main className="h-screen items-start">
    <div className="login heading--div">
      <h1 className="text-primaryBlue row-start-1 text-5xl text-yellow-300">
        <Link href="/">
          <a title="Home">Qucik Anime</a>
        </Link>
      </h1>
      <div className="login--buttons buttons">
        <button className="buttons--login">Login</button>
        <button className="buttons--signup">Sing Up</button>
      </div>
    </div>
    <section className="row-start-2 h-full bg-gray-400">
      <Header />
      {children}
    </section>
  </main>
)

export default Layout
