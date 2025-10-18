export default function PopularTopics() {
  const topics = ["নামাজ", "যাকাত", "পারিবারিক সম্পর্ক", "হজ্ব", "রোজা", "দোয়া"];

  return (
    <div className="mt-8 text-center">
      <p className="text-gray-700 mb-3 font-medium">জনপ্রিয় বিষয়সমূহ:</p>
      <div className="flex flex-wrap justify-center gap-3">
        {topics.map((topic) => (
          <button
            key={topic}
            className="bg-white px-4 py-2 rounded-full shadow-sm border border-green-100 hover:bg-green-100 text-gray-700 transition"
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
