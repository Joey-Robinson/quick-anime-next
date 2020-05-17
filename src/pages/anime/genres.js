import React from "react"
import GenreChange from "../../components/genres/genre.api"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"

const Genres = () => (
  <Layout className="post">
    <SEO title="Genres" />
    <GenreChange />
  </Layout>
)

export default Genres
