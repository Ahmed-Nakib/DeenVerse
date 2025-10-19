import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const categories = [
    { title: "কুরআন বিষয়ক", path: "/category/quran" },
    { title: "হাদীস বিষয়ক", path: "/category/hadith" },
    { title: "আকিদা ও বিশ্বাস", path: "/category/aqeedah" },
    { title: "আমল ও আখলাক", path: "/category/amol" },
    { title: "পারিবারিক জীবন", path: "/category/family" },
    { title: "ফিকহ (ইসলামী আইন)", path: "/category/fiqh" },
    { title: "খুতবা ও বক্তৃতা", path: "/category/khutbah" },
    { title: "ইসলামী ইতিহাস", path: "/category/history" },
    { title: "আধুনিক জীবনে ইসলাম", path: "/category/modern" },
    { title: "নারী ও ইসলাম", path: "/category/women" },
    { title: "শিশুদের ইসলাম শিক্ষা", path: "/category/kids" },
    { title: "দোআ ও জিকির", path: "/category/dua" },
    { title: "অনুপ্রেরণামূলক গল্প ও উদ্ধৃতি", path: "/category/stories" },
    { title: "ইসলামিক প্রবন্ধ ও গবেষণা", path: "/category/articles" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* লোগো */}
          <div className="text-2xl font-bold tracking-wide">
            <Link to="/">দীনভার্স</Link>
          </div>

          {/* বড় স্ক্রিন মেনু */}
          <div className="hidden md:flex space-x-8 text-white/90 font-medium">
            <Link to="/" className="hover:text-white transition">
              মূল পৃষ্ঠা
            </Link>

            {/* ক্যাটাগরি ড্রপডাউন */}
            <div className="relative inline-block text-left">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white hover:text-indigo-200 focus:outline-none transition-all duration-300"
              >
                ক্যাটাগরি
                <svg
                  className={`ml-1 w-4 h-4 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.title}
                      to={cat.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gradient-to-r from-indigo-50 to-indigo-100 hover:text-indigo-700 rounded-t-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/mission" className="hover:text-white transition">
              আমাদের উদ্দেশ্য
            </Link>
            <Link to="/about" className="hover:text-white transition">
              আমাদের সম্পর্কে
            </Link>
            <Link to="/contact" className="hover:text-white transition">
              যোগাযোগ
            </Link>
          </div>

          {/* মোবাইল মেনু বোতাম */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* অ্যানিমেটেড মোবাইল মেনু */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-br from-indigo-600 via-purple-700 to-blue-700 text-white"
          >
            <Link
              to="/"
              className="block px-4 py-3 border-b border-white/20 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              মূল পৃষ্ঠা
            </Link>

            {/* ক্যাটাগরি */}
            <details className="border-b border-white/20">
              <summary className="px-4 py-3 cursor-pointer hover:bg-white/10">
                ক্যাটাগরি
              </summary>
              <div className="pl-6 pb-2 text-white/90">
                {categories.map((cat) => (
                  <Link
                    key={cat.title}
                    to={cat.path}
                    className="block py-1 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            </details>

            <Link
              to="/mission"
              className="block px-4 py-3 border-b border-white/20 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              আমাদের উদ্দেশ্য
            </Link>
            <Link
              to="/about"
              className="block px-4 py-3 border-b border-white/20 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              আমাদের সম্পর্কে
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-3 hover:bg-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              যোগাযোগ
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
