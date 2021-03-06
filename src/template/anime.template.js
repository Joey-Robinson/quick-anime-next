import { motion } from "framer-motion"
import Router from "next/router"
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
  charInformation,
  episodes,
  rating,
  url,
  airing,
  duration,
  source,
  aired,
  background,
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
        {/* <motion.ul className="results--character">{charInformation}</motion.ul> */}

        {/* <motion.ul
          key={titlejp}
          variants={fadeInUp}
          className="results--genres"
        >
          {genres}
        </motion.ul> */}
        <motion.div variants={stagger} className="results--inner">
          <motion.div variants={fadeInUp} className="results--back">
            <span onClick={() => Router.back()}>&laquo; Go Back</span>
          </motion.div>

          <motion.div variants={fadeInUp} className="results--divider" />

          <motion.p variants={fadeInUp} className="results--synopsis">
            <span className="results--span">Synopsis:</span> {synopsis}
          </motion.p>
          {/* <motion.ul variants={fadeInUp} className="results--extras">
            <li>
              <span className="results--span">Episodes: </span>
              {episodes}
            </li>
            <li>
              <span className="results--span">Rating: </span>

              {rating}
            </li>
            <li>
              <span className="results--span">Airing: </span>
              {airing}
            </li>
            <li>
              <span className="results--span">Duration: </span>

              {duration}
            </li>
            <li>
              <span className="results--span">Source: </span>

              {source}
            </li>
            <li>
              <span className="results--span">Dates: </span>

              {aired}
            </li>
          </motion.ul> */}
        </motion.div>
        {/* <motion.div className="results--background">
          <p>
            {background}
            <span className="results--span">Background:</span> {background}
          </p>
        </motion.div> */}
      </div>
    </motion.div>
  </>
)

export default AnimeTemplate
