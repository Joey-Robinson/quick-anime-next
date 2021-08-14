import Link from "next/link"

const HomeHeading = ({ seasonName, seasonYear }) => (
  <div className="home--seasonal__heading">
    <h2>
      <Link href="/anime/seasonal">
        <a title="Seasonal Anime">
          {seasonName} {seasonYear} Anime
        </a>
      </Link>
    </h2>
  </div>
)

export default HomeHeading
