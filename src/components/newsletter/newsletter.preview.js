import Link from "next/link"
import React from "react"
import CoverImage from "./newsletter.coverimage"
import Date from "./newsletter.date"

const PostPreview = ({ title, coverImage, date, excerpt, slug }) => {
  return (
    <li key={title} className="search--li li">
      <div className="li--title">
        <Link as={`/newsletter/${slug}`} href="/newsletter/[slug]">
          <a>{title}</a>
        </Link>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "13rem 1fr",
          gridTemplateRows: "auto 1fr",
        }}
      >
        <CoverImage slug={slug} title={title} src={coverImage} />

        <p style={{ gridColumn: "2", gridRow: "1", alignSelf: "start" }}>
          {excerpt}
        </p>
        <Date dateString={date} />
      </div>
    </li>
  )
}

export default PostPreview
