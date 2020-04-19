import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

const Navigation = () => {
  const router = useRouter()
  return (
    <nav aria-label="Primary">
      <ul>
        <li>
          <Link href="/">
            <a
              className={router.pathname == "/" ? "active" : ""}
              title="Home Page"
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime">
            <a
              className={router.pathname == "/anime" ? "active" : ""}
              title="Anime Page"
            >
              Anime
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime/search">
            <a
              className={router.pathname == "/anime/search" ? "active" : ""}
              title="Anime Search Page"
            >
              Anime Search
            </a>
          </Link>
        </li>
        <li>
          <Link href="/anime/genres">
            <a
              className={router.pathname == "/anime/genres" ? "active" : ""}
              title="Anime Genres Page"
            >
              Anime Genres
            </a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a
              className={router.pathname == "/newsletter" ? "active" : ""}
              title="Newsletter Page"
            >
              Newsletter
            </a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a
              className={router.pathname == "/contact" ? "active" : ""}
              title="Contact Page"
            >
              Contact
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={router.pathname == "/about" ? "active" : ""}
              title="About Page"
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
