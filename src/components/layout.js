import React from "react"
import Header from "./header/header.main"
import Footer from "./footer"

const Layout = ({ children, className = "children" }) => (
  <main className="primary">
    <Header />
    <section className={className}>{children}</section>
    <Footer />
  </main>
)

export default Layout
