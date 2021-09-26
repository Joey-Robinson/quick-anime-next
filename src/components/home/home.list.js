import Image from "next/image"
import Link from "next/link"

export const HomeRightList = ({
  mal_id,
  rank,
  title,
  image_url,
  score,
  members,
  type,
  episodes,
  numericEpisodes,
}) => (
  <li className="side">
    <span className="side--rank">{rank}</span>

    <div className="side--title">
      <h3 style={{ cursor: "pointer" }}>
        <Link href={`/anime/[id]/`} as={`/anime/${mal_id}/`}>
          {title}
        </Link>
      </h3>
    </div>

    <div className="side--episodes side--right side--data">
      {type} {numericEpisodes} eps, Scored: {score} <br /> {members} members
    </div>

    <div className="side--image">
      <Image
        width={50}
        height={70}
        src={image_url}
        alt={`Thumb for ${title}`}
        layout="fixed"
      />
    </div>
    <div className="side--add">
      <p>add</p>
    </div>
  </li>
)

// export default HomeRightList
