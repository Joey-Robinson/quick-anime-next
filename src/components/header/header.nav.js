import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()
  return (
    <nav aria-label="Primary">
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/">
            <a title="Home Page">Home</a>
          </Link>
        </li>
        <li className={router.pathname == "/anime" ? "active" : ""}>
          <Link href="/anime">
            <a title="Anime Page">Anime</a>
          </Link>
        </li>
        <li className={router.pathname == "/anime/search" ? "active" : ""}>
          <Link href="/anime/search">
            <a title="Anime Search Page">Anime Search</a>
          </Link>
        </li>
        <li className={router.pathname == "/anime/genres" ? "active" : ""}>
          <Link href="/anime/genres">
            <a title="Anime Genres Page">Anime</a>
          </Link>
        </li>
        <li className={router.pathname == "/newsletter" ? "active" : ""}>
          <Link href="/newsletter">
            <a title="Newsletter Page">Newsletter</a>
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact">
            <a title="Contact Page">Contact</a>
          </Link>
        </li>
        <li className={router.pathname == "/about" ? "active" : ""}>
          <Link href="/about">
            <a title="About Page">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
