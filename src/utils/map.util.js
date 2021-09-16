import Image from "next/image"
import Link from "next/link"

export const MapUtil = (ography) => {
  return ography.map(({ mal_id, name, url, role, image_url }) => (
    <li>
      <h5>
        <Link href={`/anime/${mal_id}`} as={`/anime/${mal_id}/`}>
          {name}
        </Link>
      </h5>
      <div>
        <Link href={`/anime/${mal_id}`} as={`/anime/${mal_id}/`}>
          <Image
            width={46}
            height={66}
            layout="fixed"
            src={image_url}
            alt={`Preview for ${name}`}
          />
        </Link>
      </div>
      <span>{role}</span>
    </li>
  ))
}
