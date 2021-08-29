import Link from "next/link"

export const AnimeList = () => (
  <ul>
    <li>Anime Search</li>
    <li>Top Anime</li>
    <li>Seasonal Anime</li>
    <li>Videos</li>
    <li>Reviews</li>
    <li>Reccomendations</li>
    <li>2021 Challenge</li>
  </ul>
)

export const MangaList = () => (
  <ul>
    <li>Manga search</li>
    <li>Top Manga</li>
    <li>Manga Store</li>
    <li>Reviews</li>
    <li>Reccomendations</li>
    <li>2021 Challenge</li>
  </ul>
)

export const IndustryList = () => (
  <ul>
    <li>News</li>
    <li>Featured Articles</li>
    <li>
      <Link href="/people">
        <a title="People">People</a>
      </Link>
    </li>
    <li>
      <Link href="/characters">
        <a title="Characters">Characters</a>
      </Link>
    </li>
    <li>MALxJapan</li>
  </ul>
)
