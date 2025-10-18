import FeaturedDiscussion from "../component/FeaturedDiscussion"
import Hero from "../component/Hero"
import KnowledgeCardList from "../component/ItemList"
import PopularTopics from "../component/PopularTopics"
import SearchBar from "../component/SearchBar"

const Home = () => {
  return (
     <div className=" bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col items-center px-4 py-10">
      <Hero/>
      <SearchBar />
      <PopularTopics />
      <FeaturedDiscussion />
      <KnowledgeCardList />
    </div>
  )
}

export default Home
