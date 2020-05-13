import dynamic from "next/dynamic"
import React from "react"
// import GenreChange from "../../components/genres/genre.api"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Spinner from "../../components/spinner"

const GenreChange = dynamic(() => import("../../components/genres/genre.api"), {
  loading: () => <Spinner />,
})

const Genres = () => (
  <Layout className="post">
    <SEO title="Genres" />
    <GenreChange />
  </Layout>
)

export default Genres
