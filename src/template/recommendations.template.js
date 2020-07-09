import { motion } from "framer-motion"
import Link from "next/link"
import React from "react"

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
}) => (
  <>
    <motion.li key={mal_id} className="info">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
        <motion.h5 className="info--heading" variants={fadeInUp}>
          {title}
        </motion.h5>

        {/* <div className="info--image">
          <a href={recommendation_url} target="_blank" rel="noopner noreferrer">
            <LazyLoadImage alt={title} src={image_url} />
          </a>
        </div> */}
        <motion.div
          className="info--image"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={image_url}
            src={image_url}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <div className="info--external">
          <Link href={href} as={as}>
            <a>Read More about it here.</a>
          </Link>
        </div>
      </motion.div>
    </motion.li>
  </>
)

export default RecommendationsTemplate
