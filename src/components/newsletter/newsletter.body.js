import React from "react"

const PostBody = ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default PostBody
