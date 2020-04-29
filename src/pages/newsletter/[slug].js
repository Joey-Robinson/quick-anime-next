import ErrorPage from "next/error"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import {
  getAllPosts,
  getPostBySlug,
} from "../../components/newsletter/newsletter.api"
import PostBody from "../../components/newsletter/newsletter.body"
import markdownToHtml from "../../components/newsletter/newsletter.parser"
import SEO from "../../components/seo"

const NewsletterPosts = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout className="post">
      <SEO title={post.title} description={post.description} />
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <article className="newsletter">
          <PostBody content={post.content} />
        </article>
      )}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default NewsletterPosts
