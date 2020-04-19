import React from "react"
import PostPreview from "./newsletter.preview"

const MoreStories = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}

export default MoreStories
