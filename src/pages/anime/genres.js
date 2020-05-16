import dynamic from "next/dynamic"
import React from "react"
import Layout from "../../components/global/global.layout"
import SEO from "../../components/global/global.seo"
import Spinner from "../../components/global/global.spinner"

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
