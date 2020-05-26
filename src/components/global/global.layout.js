import React from "react"
// import Header from "../header/header.main"

const Layout = ({ children, className = "children" }) => (
  <main className="primary">
    <section className={className}>
      <div className="container">{children}</div>
    </section>
  </main>
)

export default Layout
