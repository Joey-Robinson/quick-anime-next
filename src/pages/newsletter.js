// import Link from "next/link"
// import fs from "fs"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPost from "../components/newsletter/newsletter.heropost"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import MoreStories from "../components/newsletter/newsletter.more"

const Newsletter = ({ allPosts }) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <Layout>
      <SEO title="Newsletter" description="Monthly Anime Musings" />
      <div>
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </div>
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
