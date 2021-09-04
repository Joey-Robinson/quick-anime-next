import Link from "next/link"

export const AnimeList = () => (
  <ul className="dropdown">
    <li className="dropdown--li">Anime Search</li>
    <li className="dropdown--li">
      <Link href="/anime/top">
        <a title="Top Anime">Top Anime</a>
      </Link>
    </li>
    <li className="dropdown--li">Seasonal Anime</li>
    <li className="dropdown--li">Videos</li>
    <li className="dropdown--li">Reviews</li>
    <li className="dropdown--li">Reccomendations</li>
    <li className="dropdown--li">2021 Challenge</li>
  </ul>
)

export const MangaList = () => (
  <ul className="dropdown">
    <li className="dropdown--li">Manga search</li>
    <li className="dropdown--li">Top Manga</li>
    <li className="dropdown--li">Manga Store</li>
    <li className="dropdown--li">Reviews</li>
    <li className="dropdown--li">Reccomendations</li>
    <li className="dropdown--li">2021 Challenge</li>
  </ul>
)

export const IndustryList = () => (
  <ul className="dropdown">
    <li className="dropdown--li">News</li>
    <li className="dropdown--li">Featured Articles</li>
    <li className="dropdown--li">
      <Link href="/people">
        <a title="People">People</a>
      </Link>
    </li>
    <li className="dropdown--li">
      <Link href="/characters">
        <a title="Characters">Characters</a>
      </Link>
    </li>
    <li className="dropdown--li">MALxJapan</li>
  </ul>
)
