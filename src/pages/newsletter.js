import React, { useState } from "react"
import Layout from "../components/global/global.layout"
import GlobalSearch from "../components/global/global.search"
import SEO from "../components/global/global.seo"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import PostPreview from "../components/newsletter/newsletter.preview"

// https://github.com/cyrilwanner/next-optimized-images
// Use this for blog images. 4mb for 1 page, disgusting.
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
      <GlobalSearch
        onSubmit={(event) => event.preventDefault()}
        value={query}
        onChange={handleInputChange}
        placeholder="Search Newsletters"
        id="newsletter--search"
        spanText="Search Newsletters"
        ariaLabel="Search Newsletters"
        label="Search Newsletters"
        idFor="newsletter--search"
        submitStyle={{ display: "none" }}
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
