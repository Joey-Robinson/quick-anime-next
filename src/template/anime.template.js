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
  episodes,
  rating,
  url,
  airing,
  duration,
  background,
  genres,
  source,
}) => (
  <>
    <motion.div initial="initial" animate="animate" exit={{ opacity: 10 }}>
      <div className="results">
        <motion.h1 className="results--heading" variants={fadeInUp}>
          {title}
        </motion.h1>
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
          <motion.ul variants={fadeInUp} className="btn-row add-to-cart">
            {genres}
          </motion.ul>
        </motion.div>
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
          <motion.p variants={fadeInUp} className="results--paragraph">
            <span className="results--span">Synopsis:</span> {synopsis}
          </motion.p>
          <motion.p variants={fadeInUp} className="results--paragraph">
            <span className="results--span">Background:</span> {background}
          </motion.p>

          {/* <button className="subscribe">{source}</button> */}
        </motion.div>

        {/* <div className="results--alternative">
            <h3>
              Alternatives:
              <hr />
            </h3>
            <p>
              <span>English: </span>
              {title}
            </p>
            <p>
              <span>Japanese: </span>
              {titlejp}
            </p>
            <h3 className="results--alternative__hthree">
              Additional Informaiton:
              <hr />
            </h3>
            <p>
              <span>Episodes: </span>
              {episodes}
            </p>
            <p>
              <span>Status: </span>
              {airing}
            </p>
            <p>
              <span>Duration: </span> {duration}
            </p>
            <p>
              <span>Genres: </span>
              {genres}
            </p>
            <p>
              <span>Rating: </span>
              {rating}
            </p>
            <p>
              <span>Source: </span> {source}
            </p>
          </div>
          <div className="results--synopsis">
            <p>
              <span>Synopsis: </span> {synopsis}
            </p>
            <p>
              <span>Background: </span> {background}
            </p>
          </div>
          <div className="results--background"></div>
          <div className="results--empy"></div>
          <div className="results--information"></div>
          <div className="results--external">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title} - View On MAL
            </a>
          </div> */}
      </div>
    </motion.div>
  </>
)

export default AnimeTemplate
