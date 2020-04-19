import React from "react"
import Head from "next/head"

const SEO = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content="#232946" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default SEO
