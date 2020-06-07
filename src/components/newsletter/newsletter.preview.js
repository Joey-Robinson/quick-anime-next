import Link from "next/link"
import React, { memo } from "react"
import CoverImage from "./newsletter.coverimage"
import Date from "./newsletter.date"

const PostPreview = memo(
  ({ specialKey, tags, title, coverImage, date, excerpt, slug }) => {
    const shortenedExcerpt = excerpt.slice(0, 150)
    return (
      <li key={title} className="blog--li news">
        <h2>
          <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
            <a>{title}</a>
          </Link>
        </h2>
        <div style={{ textAlign: "center", padding: "1.5rem 0" }}>
          <Date dateString={date} />
        </div>
        <div className="news--image">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <div className="news--excerpt">
          <p>{shortenedExcerpt}</p>
        </div>
        <ul key={specialKey}>{tags}</ul>
      </li>
    )
  }
)

export default PostPreview
