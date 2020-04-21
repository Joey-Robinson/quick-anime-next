import Link from "next/link"
import React from "react"
import CoverImage from "./newsletter.coverimage"
import Date from "./newsletter.date"

const PostPreview = ({ title, coverImage, date, excerpt, slug }) => {
  const shortenedExcerpt = excerpt.slice(0, 150)
  return (
    <li key={title} className="blog--li news">
      <div className="news--title">
        <h5>
          <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
            <a>{title}</a>
          </Link>
        </h5>
      </div>
      <div className="news--date">
        <Date dateString={date} />
      </div>
      <div className="news--image">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="news--excerpt">
        <p>{shortenedExcerpt}</p>
      </div>
    </li>
  )
}

export default PostPreview
