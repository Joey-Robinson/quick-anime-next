import { AnimeList, IndustryList, MangaList } from "./header.example"
// import { AnimeList } from "./header.example"

const Navigation = () => {
  return (
    <nav className="hnav">
      <ul className="hnav--ul">
        <li className="hnav--ul__li">
          Anime
          <AnimeList />
        </li>
        <li className="hnav--ul__li">
          Manga
          <MangaList />
        </li>
        <li className="hnav--ul__li">Community</li>
        <li className="hnav--ul__li">
          Industry
          <IndustryList />
        </li>
        <li className="hnav--ul__li">Watch</li>
        <li className="hnav--ul__li">Read</li>
        <li className="hnav--ul__li">Help</li>
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
