import React from "react"
// import fetch from "node-fetch"
// import AnimeSearch from "../components/anime/anime.search"

// const IndexPage = ({ data }) => {
//   console.log(data)
//   return (
//     <Layout>
//       <div className="home">
//         <AnimeSearch />
//         <h1>From 123</h1>
//       </div>
//     </Layout>
//   )
// }

// // export async function getStaticPaths() {
// //   // Fetch data from external API
// //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
// //   const data = await res.json()
// //   // (post => `/posts/${post.id}`)
// //   const paths = data.map(person => `/person/${person.name}`)
// //   // Pass data to the page via props
// //   return { paths, fallback: false }
// // }

// // export async function getStaticProps() {
// //   // params contains the post `id`.
// //   // If the route is like /posts/1, then params.id is 1
// //   const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
// //   const data = await res.json()

// //   // Pass post data to the page via props
// //   return { props: { data } }
// // }

// export default IndexPage

import Layout from "../components/layout"
import Link from "next/link"
import fetch from "isomorphic-unfetch"

const Index = props => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.anime.map(({ title, mal_id }) => (
        <li key={mal_id}>
          <Link href="/p/[id]" as={`/anime/${mal_id}`}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const result = await fetch(
    "https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1"
  )
  const data = await result.json()
  console.log(data)
  return {
    anime: data.results.map(title => title),
  }
}

export default Index
