import Link from "next/link"
import fs from "fs"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = ({ slugs }) => (
  <Layout>
    <SEO title="Newsletter" description="Monthly Anime Musings" />
    <div>
      slugs:
      {slugs.map((slug) => {
        const title = slug.split("-").join(" ")
        return (
          <div key={slug}>
            <Link href={"/newsletter/" + slug}>
              <a>{title}</a>
            </Link>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const getStaticProps = async () => {
  const files = fs.readdirSync("content")
  console.log(files)
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  }
}

export default Home
