import { useNavigate } from "react-router-dom";
import { Heart, Eye } from "lucide-react";

const data = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?w=600",
    title: "রমজানের গুরুত্ব",
    subtitle: "রমজান মাসে রোজা ও নামাজের ফজিলত নিয়ে বিস্তারিত আলোচনা।",
    reads: 1250,
    reactions: 340,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=600",
    title: "যাকাতের বিধান",
    subtitle: "ইসলামে যাকাতের মূল উদ্দেশ্য ও সামাজিক প্রভাব।",
    reads: 980,
    reactions: 210,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556484687-30636164638b?w=600",
    title: "নামাজের তাৎপর্য",
    subtitle: "প্রতিদিনের পাঁচ ওয়াক্ত নামাজে আমাদের আত্মার পবিত্রতা।",
    reads: 1780,
    reactions: 410,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1525101232309-30a1b6c40f87?w=600",
    title: "দোয়ার মাহাত্ম্য",
    subtitle: "দোয়ার মাধ্যমে আল্লাহর নিকট প্রার্থনার গুরুত্ব ও ফলাফল।",
    reads: 1120,
    reactions: 280,
  },
];

export default function KnowledgeCardList() {
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/item/${id}`);
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-14 px-4">
      <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">
        ইসলামিক জ্ঞানের গুরুত্বপূর্ণ বিষয়সমূহ
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-green-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">{item.subtitle}</p>

              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4 text-green-600" />
                  <span>{item.reads} জন পড়েছেন</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span>{item.reactions} জন রিয়্যাক্ট করেছেন</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
