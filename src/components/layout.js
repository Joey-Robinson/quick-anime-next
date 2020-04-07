import React from "react"

const Layout = ({ children, className = "children" }) => (
  <main className="primary">
    <section className={className}>{children}</section>
  </main>
)

export default Layout
