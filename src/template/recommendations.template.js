import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"

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

const RecommendationsTemplate = ({
  mal_id,
  href,
  as,
  image_url,
  recommendation_count,
  recommendation_url,
  title,
  synopsis,
}) => (
  <>
    <motion.li key={mal_id} className="info--li">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
        <motion.div
          className="info--image"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link href={href} as={as}>
            <LazyLoadImage src={image_url} alt={title} />
          </Link>
          <motion.h5 className="info--heading" variants={fadeInUp}>
            {title}
          </motion.h5>
          <p className="info--synopsis">{synopsis}</p>
        </motion.div>
        <div className="info--external"></div>
      </motion.div>
    </motion.li>
  </>
)

export default RecommendationsTemplate
