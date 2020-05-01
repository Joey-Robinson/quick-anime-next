import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

const Navigation = () => {
  const router = useRouter()
  return (
    <nav aria-label="Primary">
      <ul>
        <li>
          {/* <div>
            {router.pathname == "/" ? (
              <img
                style={{ width: "100%", height: "16rem", display: "block" }}
                src="/assets/dio.gif"
                alt=""
              />
            ) : (
              <div
                style={{ width: "100%", height: "16rem", display: "block" }}
              ></div>
            )}
          </div> */}
          <Link href="/">
            <a title="Home Page">Home</a>
          </Link>
        </li>
        <li>
          {/* <div>
            {router.pathname == "/anime" ? (
              <img
                style={{ width: "100%", height: "16rem", display: "block" }}
                src="/assets/kaguya.gif"
                alt=""
              />
            ) : (
              <div
                style={{ width: "100%", height: "16rem", display: "block" }}
              ></div>
            )}
          </div> */}
          <Link href="/anime">
            <a title="Anime Page">Anime</a>
          </Link>
        </li>
        <li>
          {/* <div>
            {router.pathname == "/anime/search" ? (
              <img
                style={{ width: "100%", height: "16rem", display: "block" }}
                src="/assets/kaguya.gif"
                alt=""
              />
            ) : (
              <div
                style={{ width: "100%", height: "16rem", display: "block" }}
              ></div>
            )}
          </div> */}

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
          <Link href="/anime/seasonal">
            <a
              className={router.pathname == "/anime/seasonal" ? "active" : ""}
              title="Anime Seasonal Page"
            >
              Seasonal Anime
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
