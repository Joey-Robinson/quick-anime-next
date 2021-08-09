import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  // create a React ref for the dropdown element
  const dropdown = useRef(null)

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false)
      }
    }
    window.addEventListener("mouseenter", handleClick)
    // clean up
    return () => window.removeEventListener("mouseleave", handleClick)
  }, [showDropdown])
  return (
    <>
      <ul className="flex ml-2 text-md text-white font-bold justify-between">
        <li className="">
          <button
            onMouseEnter={() => setShowDropdown((b) => !b)}
            onMouseLeave={() => setShowDropdown((b) => b)}
          >
            Anime
          </button>
          {showDropdown && (
            <ul ref={dropdown}>
              <li>Anime Search</li>
              <li>Top Anime</li>
              <li>Seasonal Anime</li>
            </ul>
          )}
        </li>
        <li className="">
          <Link href="/manga">
            <a title="Manga Page">Manga</a>
          </Link>
        </li>
        <li>
          <Link href="/community">
            <a title="Community Page">Community</a>
          </Link>
        </li>
        <li>
          <Link href="/industry">
            <a title="Industry Page">Industry</a>
          </Link>
        </li>
        <li>
          <Link href="/watch">
            <a title="Watch Page">Watch</a>
          </Link>
        </li>
        <li>
          <Link href="/read">
            <a title="Read Page">Read</a>
          </Link>
        </li>
        <li>
          <Link href="/help">
            <a title="Help Page">Help</a>
          </Link>
        </li>
        {/* <li className="hover:text-pink-400">
        <Link href="/anime/search">
          <a title="Anime Search Page">Anime Search</a>
        </Link>
      </li>
      <li className="hover:text-pink-400">
        <Link href="/anime/genres">
          <a title="Anime Genres Page">Anime Genres</a>
        </Link>
      </li>
      <li className="hover:text-pink-400">
        <Link href="/anime/seasonal">
          <a title="Anime Seasonal Page">Seasonal Anime</a>
        </Link>
      </li>
      <li className="hover:text-pink-400">
        <Link href="/newsletter">
          <a title="Newsletter Page">Newsletter</a>
        </Link>
      </li>
      <li className="hover:text-pink-400">
        <Link href="/contact">
          <a title="Contact Page">Contact</a>
        </Link>
      </li>
      <li className="hover:text-pink-400">
        <Link href="/about">
          <a title="About Page">About</a>
        </Link>
      </li> */}
      </ul>
    </>
  )
}
export default Navigation
