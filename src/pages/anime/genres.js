import React from "react"
import GenreChange from "../../components/genres/genre.api"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Genres = () => (
  <Layout>
    <SEO title="Genres" />
    <div className="post">
      <GenreChange />
    </div>
  </Layout>
)

export default Genres
