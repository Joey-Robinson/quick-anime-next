import Link from "next/link"
import fs from "fs"
import Layout from "../components/layout"

const Home = ({ slugs }) => (
  <Layout>
    <div>
      slugs:
      {slugs.map((slug) => {
        return (
          <div key={slug}>
            <Link href={"/newsletter/" + slug}>
              <a>{"/newsletter/" + slug}</a>
            </Link>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const getStaticProps = async () => {
  const files = fs.readdirSync("content")
  return {
    props: {
      slugs: files.map((filename) => filename.replace(".md", "")),
    },
  }
}

export default Home
