import React from "react"
import Head from "next/head"

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default SEO
