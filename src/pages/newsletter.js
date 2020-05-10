import React, { useState } from "react"
import Layout from "../components/layout"
import { getAllPosts } from "../components/newsletter/newsletter.api"
import MoreStories from "../components/newsletter/newsletter.more"
import SEO from "../components/seo"

const Newsletter = ({ allPosts }) => {
  const morePosts = allPosts // This is data & all Posts
  const emptyQuery = ""

  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event) => {
    const query = event.target.value
    const posts = morePosts || []
    const filteredData = posts.filter((post) => {
      const { title, tags } = post
      console.log(tags)
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        tags.join("").toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredData,
    })
  }
  const { filteredData, query } = state
  console.log(state)
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
  return (
    <Layout className="post--news">
      <SEO title="Newsletter" description="Monthly Anime Musings" />
      <div className="search--input">
        <label htmlFor="newsletter-search">
          <span>Search Newsletters</span>
        </label>
        <form
          role="search"
          className="field"
          onSubmit={(event) => event.preventDefault()}
          autoComplete="off"
          noValidate
        >
          <input
            id="newsletter-search"
            label="Search Newsletters"
            aria-label="Search for old newsletters"
            placeholder="Search Newsletters"
            type="text"
            value={query}
            className="field--input"
            onChange={handleInputChange}
          />
          <br />
          <input
            style={{
              margin: ".75rem 0 0 0",
              cursor: "pointer",
            }}
            type="submit"
            value="Search"
          />
        </form>
      </div>

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
