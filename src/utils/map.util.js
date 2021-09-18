import Image from "next/image"
import Link from "next/link"

export const MapUtil = (ography) => {
  return ography.map(({ mal_id, name, url, role, image_url }) => (
    <li className="ography">
      <div className="ography--image">
        <Link href={`/anime/${mal_id}`} as={`/anime/${mal_id}/`}>
          <Image
            width={46}
            height={70}
            layout="fixed"
            src={image_url}
            alt={`Preview for ${name}`}
          />
        </Link>
      </div>

      <div className="ography--heading">
        <h5>
          <Link href={`/anime/${mal_id}`} as={`/anime/${mal_id}/`}>
            {name}
          </Link>
        </h5>
      </div>
      {/* <span className="ography--role">{role}</span> */}
    </li>
  ))
}
