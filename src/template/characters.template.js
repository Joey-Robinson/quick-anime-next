import { motion } from "framer-motion"
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

const CharacterTemplate = ({ url, image, name }) => (
  <>
    <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
      <div className="characters">
        <motion.div
          className="characters--image"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={image}
            src={image}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: 200, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          />
        </motion.div>
        <motion.div className="characters--name">
          <p>{name}</p>
        </motion.div>
      </div>
    </motion.div>
  </>
)

export default CharacterTemplate
