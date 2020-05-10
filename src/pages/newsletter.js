import React, { useState } from "react"
import Layout from "../components/layout"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import PostPreview from "../components/newsletter/newsletter.preview"
import NewsletterSearch from "../components/newsletter/newsletter.search"
import SEO from "../components/seo"

const Newsletter = ({ allPosts }) => {
  const morePosts = allPosts
  const emptyQuery = ""
  const [filteredPosts, setFilteredPosts] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event) => {
    const query = event.target.value
    const posts = morePosts || []
    const filteredData = posts.filter((post) => {
      const { title, tags } = post
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags.join("").toLowerCase().includes(query.toLowerCase())
      )
    })

    setFilteredPosts({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = filteredPosts
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <Layout className="post--news">
      <SEO title="Newsletter" description="Monthly Anime Musings" />
      <NewsletterSearch
        onSubmit={(event) => event.preventDefault()}
        value={query}
        onChange={handleInputChange}
      />
      <div className="container">
        <ul className="blog">
          {posts &&
            posts.map(({ title, date, excerpt, coverImage, slug }) => {
              return (
                <PostPreview
                  key={slug}
                  title={title}
                  date={date}
                  excerpt={excerpt}
                  coverImage={coverImage}
                  slug={slug}
                />
              )
            })}
        </ul>
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
    "tags",
  ])

  return {
    props: { allPosts },
  }
}

export default Newsletter
