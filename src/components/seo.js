import { NextSeo } from "next-seo"
import React from "react"

const SEO = ({ title = "", description = "" }) => {
  return (
    <>
      <NextSeo
        title={title}
        site_name="Quick-Anime"
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: "https://www.url.ie/a",
          title: "Quick Anime",
          description: description,
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
          site_name: "SiteName",
        }}
        twitter={{
          handle: "@joeyrobinsondev",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  )
}

export default SEO
