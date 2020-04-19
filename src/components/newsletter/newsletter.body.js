import React from "react"
import Link from "next/link"

const PostBody = ({ content }) => {
  return (
    <>
      <Link href="/newsletter">
        <a title="Newsletter Page">&larr; Back to Newsletter</a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default PostBody
