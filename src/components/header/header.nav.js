import Link from "next/link"
import React from "react"

const Navigation = () => {
  return (
    <nav aria-label="Primary">
      <ul>
        <li>
          <Link href="/">
            <a title="Home Page">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/anime">
            <a title="Anime Page">Anime</a>
          </Link>
        </li>
        <li>
          <Link href="/anime/search">
            <a title="Anime Search Page">Anime Search</a>
          </Link>
        </li>

        <li>
          <Link href="/anime/genres">
            <a title="Anime Genres Page">Anime Genres</a>
          </Link>
        </li>
        <li>
          <Link href="/anime/seasonal">
            <a title="Anime Seasonal Page">Seasonal Anime</a>
          </Link>
        </li>
        <li>
          <Link href="/newsletter">
            <a title="Newsletter Page">Newsletter</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a title="Contact Page">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a title="About Page">About</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navigation
