import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GenreChange from "../../components/genres/genre.api"

const Genres = () => (
  <Layout>
    <SEO title="Genres" />
    <GenreChange />
  </Layout>
)

export default Genres
