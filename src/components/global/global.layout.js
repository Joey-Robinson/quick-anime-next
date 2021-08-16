import React from "react"
import Header from "../header/header.main"

const Layout = ({ children }) => (
  <main className="items-start">
    {/* <div className="login heading--div">
      <h1 className="text-primary row-start-1 text-3xl pb-3">
        <Link href="/">
          <a title="Home">Qucik Anime</a>
        </Link>
      </h1>
      <div className="login--buttons buttons">
        <button className="buttons--login">Login</button>
        <button className="buttons--signup">Sing Up</button>
      </div>
    </div> */}
    <section className="row-start-2 bg-gray-400">
      <Header />
      {children}
    </section>
  </main>
)

export default Layout
