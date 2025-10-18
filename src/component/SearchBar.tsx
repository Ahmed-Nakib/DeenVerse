import React, { useState } from "react";
import { Search, Mic } from "lucide-react";

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Search query:", query);
  };

  return (
    <div className="w-full flex justify-center px-3 py-4">
      <div className="flex items-center w-full max-w-2xl bg-white/70 backdrop-blur-md border border-green-200 shadow-xl rounded-full px-3 py-2 sm:px-4 transition-all duration-300 focus-within:ring-2 focus-within:ring-green-400">
        
        {/* সার্চ আইকন */}
        <Search className="text-green-600 w-5 h-5 sm:w-6 sm:h-6 mr-2 opacity-80 flex-shrink-0" />

        {/* ইনপুট */}
        <input
          type="text"
          placeholder=" অনুসন্ধান করুন..."
          className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-500 text-base sm:text-lg font-medium min-w-0"
          value={query}
          onChange={handleInputChange}
        />

        {/* মাইক্রোফোন */}
        <Mic className="text-green-600 w-6 h-6 mx-2 cursor-pointer hover:text-green-700 transition-transform active:scale-90" />

        {/* বাটন — মোবাইলে আইকন, ডেস্কটপে টেক্সট */}
        <button
          onClick={handleSearch}
          className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 sm:px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 active:scale-95 flex items-center justify-center"
        >
          {/* মোবাইলে শুধু আইকন */}
          <Search className="w-5 h-5 block sm:hidden" />
          {/* বড় স্ক্রিনে টেক্সট */}
          <span className="hidden sm:block">অনুসন্ধান</span>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
