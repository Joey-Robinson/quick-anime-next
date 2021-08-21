// import HomeSignup from "../components/home/home.signup"
import Layout from "../components/global/global.layout"
import SEO from "../components/global/global.seo"
import HomeManga from "../components/home/home.manga"
import TopOverall from "../components/home/home.popular"
import HomeSchedule from "../components/home/home.schedule"
import HomeSeasonal from "../components/home/home.seasonal"
import TopAnime from "../components/home/home.top"
import TopUpcoming from "../components/home/home.upcoming"

const Index = () => {
  return (
    <Layout>
      <SEO title="Home" description="Quck Anime - Home Page" />
      <div className="home h-screen">
        <HomeSeasonal />
        <HomeManga />
        <HomeSchedule />
        <aside className="home--aside">
          <TopAnime />
          <TopUpcoming />
          <TopOverall />
        </aside>
      </div>
    </Layout>
  )
}

export default Index
