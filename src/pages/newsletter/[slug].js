import { useRouter } from "next/router"
import ErrorPage from "next/error"
import {
  getPostBySlug,
  getAllPosts,
} from "../../components/newsletter/newsletter.api"
import Head from "next/head"
import markdownToHtml from "../../components/newsletter/newsletter.parser"
import Layout from "../../components/layout"
import PostBody from "../../components/newsletter/newsletter.body"

const NewsletterPosts = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <article>
          <Head>
            <title>{post.title}</title>
          </Head>
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
