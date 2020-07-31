import { motion } from "framer-motion"
import React from "react"
import GenreChange from "../../components/genres/genre.api"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

let easing = [0.6, -0.05, 0.01, 0.99]

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Custom variant
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

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const Genres = () => (
  <Layout className="post">
    <SEO title="Genres" />
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <GenreChange />
    </motion.div>
  </Layout>
)

export default Genres
