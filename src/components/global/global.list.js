import { motion } from "framer-motion"
import Image from "next/image"
import React, { memo } from "react"

let easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

const GlobalList = memo(
  ({ href, as, mal_id, image_url, title, synopsis, genres }) => {
    return (
      <li key={mal_id} className="search--li season">
        {/* <Link href={href} as={as}> */}
        <motion.div
          className="season--image"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            layout="fixed"
            width={50}
            height={70}
            alt={`Preview for ${title}`}
            src={image_url}
          />

          <h3>{title}</h3>
        </motion.div>
        {/* </Link> */}
        <motion.div variants={fadeInUp} className="season--container">
          <div className="season--synopsis">
            <p>
              {!synopsis ? "No synopsis is available for this title" : synopsis}
            </p>
          </div>
        </motion.div>
        <motion.ul className="season--genre">{genres}</motion.ul>
      </li>
    )
  }
)

export default GlobalList
