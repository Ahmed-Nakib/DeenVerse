import { useState } from "react";
import { Search, Mic, Star } from "lucide-react";

export default function IslamicSearchPage() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col items-center px-4 py-10">
      {/* শিরোনাম */}
      <h1 className="text-3xl md:text-4xl font-bold text-green-800 text-center mb-3">
        ইসলামিক জ্ঞানের সন্ধান করুন
      </h1>
      <p className="text-gray-600 text-center mb-6 max-w-xl">
        কুরআন, হাদিস এবং ইসলামিক বিষয় সম্পর্কে সহজেই জানুন
      </p>

      {/* সার্চ বক্স */}
      <div className="flex items-center bg-white shadow-md rounded-full w-full max-w-2xl px-4 py-2 border border-green-100 focus-within:ring-2 focus-within:ring-green-300">
        <Search className="text-gray-500 w-5 h-5 mr-2" />
        <input
          type="text"
          placeholder="বিষয়বস্তু, আয়াত বা হাদিস নম্বর লিখে অনুসন্ধান করুন..."
          className="flex-1 outline-none text-gray-700 placeholder-gray-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Mic className="text-green-600 w-5 h-5 mx-2 cursor-pointer hover:text-green-700" />
        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          অনুসন্ধান
        </button>
      </div>

      {/* জনপ্রিয় বিষয় */}
      <div className="mt-8 text-center">
        <p className="text-gray-700 mb-3 font-medium">জনপ্রিয় বিষয়সমূহ:</p>
        <div className="flex flex-wrap justify-center gap-3">
          {["নামাজ", "যাকাত", "পারিবারিক সম্পর্ক", "হজ্ব", "রোজা", "দোয়া"].map(
            (item) => (
              <button
                key={item}
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-green-100 hover:bg-green-100 text-gray-700 transition"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>

      {/* আজকের বিশেষ আলোচনা */}
      <div className="mt-10 w-full max-w-2xl bg-white rounded-2xl shadow-md border border-green-100 p-5">
        <div className="flex items-center mb-2">
          <Star className="text-yellow-400 w-5 h-5 mr-2" />
          <h2 className="text-lg font-semibold text-green-800">
            আজকের বিশেষ আলোচনা
          </h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          রমজানের ফজিলত ও আমলের বিস্তারিত আলোচনা। কিভাবে এই মাসে আমাদের জীবনকে
          সঠিকভাবে পরিচালনা করা যায়...
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-500">যাজক: আনোয়ার রহমান</span>
          <a
            href="#"
            className="text-green-700 hover:text-green-900 text-sm font-medium"
          >
            আরও পড়ুন →
          </a>
        </div>
      </div>
    </div>
  );
}
