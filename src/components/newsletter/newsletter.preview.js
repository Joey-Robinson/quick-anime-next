import React from "react"
import Date from "./newsletter.date"
import CoverImage from "./newsletter.coverimage"
import Link from "next/link"

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
    //   <div
    //     style={{
    //       display: "grid",
    //       gridTemplateColumns: "13rem 1fr",
    //       gridTemplateRows: "auto 1fr",
    //     }}
    //   >
    //     <LazyLoadImage alt={title} src={image_url} />
    //     <p style={{ gridColumn: "2", gridRow: "1", alignSelf: "start" }}>
    //       {!synopsis ? "No synopsis is available for this title" : synopsis}
    //     </p>
    //     <div
    //       style={{
    //         gridColumn: "2",
    //         gridRow: "1",
    //         justifySelf: "left",
    //         alignSelf: "end",
    //         padding: "0 0 0 6rem",
    //       }}
    //     >
    //       <Link href={href} as={as}>
    //         <a>Read More about it here.</a>
    //       </Link>
    //     </div>
    //   </div>
    // </li>
  )
}

export default PostPreview
