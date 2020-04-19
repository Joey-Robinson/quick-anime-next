import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import MoreStories from "../components/newsletter/newsletter.more"

const Newsletter = ({ allPosts }) => {
  const morePosts = allPosts
  return (
    <Layout>
      <SEO title="Newsletter" description="Monthly Anime Musings" />
      <MoreStories posts={morePosts} />
    </Layout>
  )
}
export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}

export default Newsletter
