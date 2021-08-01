import React from "react"
import Header from "../header/header.main"

const Layout = ({ children }) => (
  <main className="grid grid-cols-primary h-screen items-start">
    <section className="col-start-2 row-start-1 h-full bg-gray-400">
      <Header />
      {children}
    </section>
  </main>
)

export default Layout
