import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Head from "next/head"
import marked from "marked"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Post = ({ htmlString, data }) => {
  return (
    <Layout>
      <SEO title={data.title} description={data.description} />
      <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync("content")
  console.log("files: ", files)
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMetadata = fs
    .readFileSync(path.join("content", slug + ".md"))
    .toString()

  const parsedMarkdown = matter(markdownWithMetadata)

  const htmlString = marked(parsedMarkdown.content)

  return {
    props: {
      htmlString,
      data: parsedMarkdown.data,
    },
  }
}

export default Post
