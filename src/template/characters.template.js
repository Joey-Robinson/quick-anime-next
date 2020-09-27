import { motion } from "framer-motion"
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

const CharacterTemplate = ({ url, image, name }) => (
  <>
    <motion.li key={name} className="characters--li">
      <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
        <motion.div
          className="characters--image"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          <LazyLoadImage src={image} alt={name} />
          <motion.h5 className="characters--heading" variants={fadeInUp}>
            {name}
          </motion.h5>
        </motion.div>
      </motion.div>
    </motion.li>
  </>
)

export default CharacterTemplate
