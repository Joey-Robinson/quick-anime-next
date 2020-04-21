import React from "react"
import PostPreview from "./newsletter.preview"

const MoreStories = ({ posts }) => {
  return (
    <div className="post">
      <ul className="blog">
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
      </ul>
    </div>
  )
}

export default MoreStories
