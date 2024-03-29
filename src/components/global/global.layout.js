import React from "react"
import Footer from "../Footer/footer.main"
import Header from "../header/header.main"

const Layout = ({ children }) => (
  <main>
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
    <section>
      <Header />
      {children}
    </section>
    <Footer />
  </main>
)

export default Layout
