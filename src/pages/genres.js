// import Layout from "../components/Layout"
// import Link from "next/link"
// import fetch from "isomorphic-unfetch"

// const Genres = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.anime.map(title => (
//         <li key={title}>
//           <Link href="/p/[id]" as={`/p/${title}`}>
//             <a>{title}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )

// Genres.getInitialProps = async function() {
//   const result = await fetch("https://api.jikan.moe/v3/search/anime?genre=1")
//   const data = await result.json()

//   return {
//     shows: data.map(title => title.title),
//   }
// }

// export default Genres
