import React from "react";
import { Facebook, Youtube, Instagram, Mail } from "lucide-react";

interface SocialLink {
  icon: React.ReactNode;
  href: string;
}

const Footer: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: <Facebook className="w-5 h-5" />, href: "#" },
    { icon: <Youtube className="w-5 h-5" />, href: "#" },
    { icon: <Instagram className="w-5 h-5" />, href: "#" },
    { icon: <Mail className="w-5 h-5" />, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* 🕌 Column 1: Website Info */}
        <div>
          <h2 className="text-2xl font-bold mb-3">ইসলামিক জ্ঞান</h2>
          <p className="text-sm text-gray-200 leading-relaxed">
            কুরআন, হাদিস ও ইসলামিক বিষয় সম্পর্কে সহজভাবে জানার একটি নির্ভরযোগ্য
            উৎস। প্রতিদিন নতুন নতুন জ্ঞান ও অনুপ্রেরণা।
          </p>
        </div>

        {/* 📚 Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-1 inline-block">
            গুরুত্বপূর্ণ লিংকসমূহ
          </h3>
          <ul className="space-y-2 text-gray-100">
            <li className="hover:text-yellow-300 transition cursor-pointer">
              🕌 হোম
            </li>
            <li className="hover:text-yellow-300 transition cursor-pointer">
              📚 ক্যাটাগরি
            </li>
            <li className="hover:text-yellow-300 transition cursor-pointer">
              💬 আমাদের সম্পর্কে
            </li>
            <li className="hover:text-yellow-300 transition cursor-pointer">
              📞 যোগাযোগ
            </li>
          </ul>
        </div>

        {/* 🌐 Column 3: Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3 border-b border-green-400 pb-1 inline-block">
            আমাদের সাথে যুক্ত থাকুন
          </h3>
          <div className="flex items-center gap-4 mt-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ⚖️ Bottom copyright */}
      <div className="border-t border-green-600 mt-10 pt-5 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} ইসলামিক জ্ঞান | সকল অধিকার সংরক্ষিত 🌿
      </div>
    </footer>
  );
};

export default Footer;
