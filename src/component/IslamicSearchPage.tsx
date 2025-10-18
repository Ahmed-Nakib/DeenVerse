
import SearchBar from "./SearchBar";
import PopularTopics from "./PopularTopics";
import FeaturedDiscussion from "./FeaturedDiscussion";
import Hero from "./Hero";

export default function IslamicSearchPage() {
  return (
    <div className=" bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col items-center px-4 py-10">
      <Hero/>
      <SearchBar />
      <PopularTopics />
      <FeaturedDiscussion />
    </div>
  );
}
