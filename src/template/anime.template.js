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

const AnimeTemplate = ({
  title,
  titlejp,
  synopsis,
  image,
  genres,
  episodes,
  rating,
  url,
  airing,
  duration,
  background,
  source,
}) => (
  <>
    <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
      <div className="results">
        <hgroup className="results--heading">
          <motion.h1 variants={fadeInUp}>{title}</motion.h1>
          <motion.h2 variants={fadeInUp}>{titlejp}</motion.h2>
        </hgroup>
        <motion.div
          className="results--image"
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
        <motion.ul
          key={titlejp}
          variants={fadeInUp}
          className="results--genres"
        >
          {genres}
        </motion.ul>

        {/* <motion.div variants={fadeInUp}>
          <span className="results--titlejp">{titlejp}</span>
        </motion.div> */}

        <motion.div variants={stagger} className="results--inner">
          {/* <motion.div variants={fadeInUp}>
            <span className="category">{episodes}</span>
          </motion.div> */}
          {/* <motion.h1 variants={fadeInUp}>{airing}</motion.h1> */}
          {/* <motion.div variants={fadeInUp} className="additonals">
            <span>{rating}</span>
            <span>{duration}</span>
          </motion.div> */}
          <hr />

          <motion.p variants={fadeInUp} className="results--paragraph">
            <span className="results--span">Synopsis:</span> {synopsis}
          </motion.p>
          {/* <motion.p variants={fadeInUp} className="results--paragraph">
            <span className="results--span">Background:</span> {background}
          </motion.p> */}
        </motion.div>
      </div>
    </motion.div>
  </>
)

export default AnimeTemplate
