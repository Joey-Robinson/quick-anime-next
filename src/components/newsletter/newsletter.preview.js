import Link from "next/link"
import React from "react"
import CoverImage from "./newsletter.coverimage"
import Date from "./newsletter.date"

const PostPreview = ({ title, coverImage, date, excerpt, slug }) => {
  const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    <li key={title} className="blog--li news">
      <div>
        <h2>
          <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
            <a>{title}</a>
          </Link>
        </h2>
      </div>
      <div style={{ textAlign: "center" }}>
        <Date dateString={date} />
      </div>
      <div className="news--image">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div>
        <p>{shortenedExcerpt}</p>
      </div>
    </li>
  )
}

export default PostPreview
