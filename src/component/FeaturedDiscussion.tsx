import { Star } from "lucide-react";
import React from "react";

interface FeaturedDiscussionProps {
  title?: string;
  description?: string;
  author?: string;
  link?: string;
}

const FeaturedDiscussion: React.FC<FeaturedDiscussionProps> = ({
  title = "আজকের বিশেষ আলোচনা",
  description = "রমজানের ফজিলত ও আমলের বিস্তারিত আলোচনা। কিভাবে এই মাসে আমাদের জীবনকে সঠিকভাবে পরিচালনা করা যায়...",
  author = "আনোয়ার রহমান",
  link = "#",
}) => {
  return (
    <div className="mt-10 w-full max-w-2xl bg-white rounded-2xl shadow-md border border-green-100 p-5">
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold text-green-800">{title}</h2>
      </div>

      <p className="text-gray-700 leading-relaxed">{description}</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-gray-500">যাজক: {author}</span>
        <a
          href={link}
          className="text-green-700 hover:text-green-900 text-sm font-medium"
        >
          আরও পড়ুন →
        </a>
      </div>
    </div>
  );
};

export default FeaturedDiscussion;
