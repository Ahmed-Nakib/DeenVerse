import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Book, Quote, BookOpen, PlayCircle } from "lucide-react";


const ItemDetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-5 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-green-800 text-center mb-8">
        বিষয় আইডি: {id}
      </h1>

      <div className="w-full max-w-4xl flex flex-col gap-6 ">
        {/* 🧾 সারসংক্ষেপ */}
        <section className="bg-white rounded-2xl shadow-lg p-6 space-y-8 border border-green-100">
          <div className="flex items-center gap-2 mb-3 ">
            <BookOpen className="text-green-700 w-6 h-6" />
            <h2 className="text-xl font-semibold text-green-800">সারসংক্ষেপ</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            এই সেকশনে বিষয়টির বিস্তারিত সারসংক্ষেপ দেখানো হবে। (id: {id})
          </p>
        </section>

        {/* 📖 কুরআন */}
        <section className="bg-white rounded-2xl shadow-lg p-6 space-y-8 border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <Book className="text-green-700 w-6 h-6" />
            <h2 className="text-xl font-semibold text-green-800">কুরআন</h2>
          </div>
          <blockquote className="border-l-4 border-green-400 pl-4 italic text-gray-700 bg-green-50 p-3 rounded-md">
            “হে মুমিনগণ! তোমাদের উপর রোযা ফরজ করা হয়েছে...”  
            <br />
            <span className="text-sm text-gray-500">
              — সূরা আল-বাকারা (২:১৮৩)
            </span>
          </blockquote>
        </section>

        {/* 🕋 হাদিস */}
        <section className="bg-white rounded-2xl shadow-lg p-6 space-y-8 border border-green-100">
          <div className="flex items-center gap-2 mb-3">
            <Quote className="text-green-700 w-6 h-6" />
            <h2 className="text-xl font-semibold text-green-800">হাদিস</h2>
          </div>
          <blockquote className="border-l-4 border-yellow-400 pl-4 italic text-gray-700 bg-yellow-50 p-3 rounded-md">
            “যে ব্যক্তি ঈমান ও সওয়াবের আশায় রমজানের রোজা রাখে...”  
            <br />
            <span className="text-sm text-gray-500">— সহিহ বুখারি</span>
          </blockquote>
        </section>

        {/* 🎤 বয়ান */}
        <div className="w-full flex justify-center">
          <div className="text-center mt-10">
          <button onClick={() => navigate("/lecture")} className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-700 text-white text-lg font-semibold px-10 py-4 rounded-full shadow-md hover:scale-105 hover:shadow-lg transition">
            <PlayCircle className="w-6 h-6" />
            বয়ান
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsPage;
