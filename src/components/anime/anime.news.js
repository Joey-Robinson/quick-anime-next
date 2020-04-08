// import React, {useState} from 'react'

// const AnimeNews = ({id}) => {
//   const [aniNews, setAniNews] = useState({articles: []})
//   const newsFetch = async () => {
//     const response = await fetch(`https://api.jikan.moe/v3/anime/${id}/news/`)
//     const data = await response.json()
//     setAniNews(articles)
//   }

//   return (
//     <div>
//       <ul>
//           {aniNews.map(({title, image_url, date, forum_url, intro}) => (
//         <li>

//         </li>
//           ))}
//       </ul>
//     </div>
//   )
// }

// export default AnimeNews
