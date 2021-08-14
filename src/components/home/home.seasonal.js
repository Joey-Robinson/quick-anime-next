import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const HomeSeasonal = ({ mal_id, title, image_url, name }) => {
  return (
    <li>
      <div className="card">
        <div className="card--container">
          <Link
            style={{ cursor: "pointer" }}
            href={`/anime/[id]/`}
            as={`/anime/${mal_id}/`}
          >
            <motion.div
              animate={{ x: 0, opacity: 1 }}
              initial={{ x: 200, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Image
                className="card--container__img"
                src={image_url}
                alt={`Thumb for ${title}`}
                layout="fixed"
                width={160}
                height={220}
              />
              <h3 className="card--container__heading">{name}</h3>
            </motion.div>
          </Link>
        </div>
      </div>
    </li>
  )
}

export default HomeSeasonal
