import React from "react"
import Layout from "../components/layout"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import MoreStories from "../components/newsletter/newsletter.more"
import NewsletterSearch from "../components/newsletter/newsletter.search"
import SEO from "../components/seo"

const Newsletter = ({ allPosts }) => {
  const morePosts = allPosts
  console.log(morePosts)
  return (
    <Layout className="post--news">
      <SEO title="Newsletter" description="Monthly Anime Musings" />
      <NewsletterSearch />
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
    "tags",
  ])

  return {
    props: { allPosts },
  }
}

export default Newsletter
