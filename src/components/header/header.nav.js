import Link from "next/link"
import { AnimeList, IndustryList, MangaList } from "./header.example"

const Navigation = () => {
  return (
    <nav>
      <ul className="nav__menu">
        <li className="nav__menu-item">
          Anime
          <AnimeList />
        </li>
        <li className="nav__menu-item">
          <Link href="/manga">
            <a title="Manga Page">Manga</a>
          </Link>
          <MangaList />
        </li>
        <li className="nav__menu-item">
          <Link href="/community">
            <a title="Community Page">Community</a>
          </Link>
        </li>
        <li className="nav__menu-item">
          <Link href="/industry">
            <a title="Industry Page">Industry</a>
          </Link>
          <IndustryList />
        </li>
        <li className="nav__menu-item">
          <Link href="/watch">
            <a title="Watch Page">Watch</a>
          </Link>
        </li>
        <li className="nav__menu-item">
          <Link href="/read">
            <a title="Read Page">Read</a>
          </Link>
        </li>
        <li className="nav__menu-item">
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
    </nav>
  )
}
export default Navigation
