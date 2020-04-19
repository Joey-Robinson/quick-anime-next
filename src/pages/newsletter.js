import Layout from "../components/layout"
import SEO from "../components/seo"
<<<<<<< HEAD

const Home = ({ slugs }) => (
  <Layout>
    <SEO title="Newsletter" description="Monthly Anime Musings" />
    <div>
      slugs:
      {slugs.map((slug) => {
        const title = slug.split("-").join(" ")
        return (
          <div key={slug}>
            <Link href={"/newsletter/" + slug}>
              <a>{title}</a>
            </Link>
          </div>
        )
      })}
    </div>
  </Layout>
)
=======
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
>>>>>>> feature/blog

  return {
    props: { allPosts },
  }
}

export default Newsletter
