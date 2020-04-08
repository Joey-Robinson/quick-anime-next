import React from "react"
import Header from "./header/header.main"
import Footer from "./footer"

const Layout = ({ children, className = "children" }) => (
  <main className="primary">
    <Header />
    {children}
    <Footer />
  </main>
)

export default Layout
