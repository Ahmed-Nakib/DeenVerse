import { Search, Mic } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center bg-white shadow-md rounded-full w-full max-w-2xl px-4 py-2 border border-green-100 focus-within:ring-2 focus-within:ring-green-300">
      <Search className="text-gray-500 w-5 h-5 mr-2" />
      <input
        type="text"
        placeholder="অনুসন্ধান করুন..."
        className="flex-1 outline-none text-gray-700 placeholder-gray-400"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Mic className="text-green-600 w-5 h-5 mx-2 cursor-pointer hover:text-green-700" />
      <button className="bg-green-600  text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
        অনুসন্ধান
      </button>
    </div>
  );
}
