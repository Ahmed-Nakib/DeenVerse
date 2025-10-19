import React from "react";

export default function AboutUs() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-16 px-6 md:px-20 text-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
          🕌 আমাদের সম্পর্কে (About Us)
        </h3>
      </div>

      <div className="space-y-10 text-lg leading-relaxed text-gray-700">
        {/* Section 1 */}
        <div>
          <p>
            আমরা একটি ইসলামী উদ্যোগ, যার মূল উদ্দেশ্য — ইসলামকে সহজ, প্রাসঙ্গিক ও সুন্দরভাবে
            মানুষের কাছে পৌঁছে দেওয়া। আধুনিক প্রযুক্তি ও বিশুদ্ধ জ্ঞানের সমন্বয়ে আমরা এমন একটি
            প্ল্যাটফর্ম গড়ে তুলছি যেখানে ইসলাম শেখা হবে সহজ, আকর্ষণীয় ও বিশ্বাসযোগ্য।
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            🌿 আমাদের প্রেরণা
          </h4>
          <p>
            আজকের যুগে অনেক মানুষ ইসলাম সম্পর্কে জানতে চায়, কিন্তু নির্ভরযোগ্য উৎসের অভাবে
            বিভ্রান্ত হয়। এই বাস্তবতাই আমাদের অনুপ্রেরণা। আমরা বিশ্বাস করি — ইসলাম প্রচার ও
            প্রসার করা কেবল দাওয়াত নয়, বরং এক ইমানি দায়িত্ব।  
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            📖 আমাদের কাজ
          </h4>
          <p>
            আমরা খতিব, আলেম, ছাত্র ও সাধারণ মুসলমান — সবাইকে এক জায়গায় ইসলামী জ্ঞানের সুযোগ
            দিতে চাই। এখানে পাওয়া যাবে খুতবা, দাওয়াত, কুরআন তাফসির, হাদীস, জীবনী ও বাস্তব জীবনের
            ইসলামী দিকনির্দেশনা।  
            আমাদের লক্ষ্য — “জ্ঞানের আলো ঘরে ঘরে পৌঁছে দেওয়া”।
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            💡 আমাদের ভিশন
          </h4>
          <p>
            আমরা চাই এমন এক প্রজন্ম গড়ে উঠুক যারা ইসলামকে বুঝে, ভালোবেসে ও আধুনিকভাবে ধারণ করে।
            ইসলাম হোক তাদের চিন্তার আলো, নৈতিকতার মেরুদণ্ড, ও জীবনের দিশা।  
            প্রযুক্তি ও তাওহীদের শক্তি একত্রে ব্যবহার করেই আমরা সেই পথে এগোচ্ছি ইনশাআল্লাহ।
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">
            🕋 আমাদের মূলনীতি
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>কুরআন ও সহীহ হাদীসের আলোকে সব কার্যক্রম পরিচালনা।</li>
            <li>কোনো মতবাদ বা গোষ্ঠীর প্রভাব ছাড়া বিশুদ্ধ ইসলামী জ্ঞান প্রচার।</li>
            <li>ঐক্য, ন্যায়, মানবতা ও ভ্রাতৃত্বের শিক্ষা ছড়িয়ে দেওয়া।</li>
            <li>প্রযুক্তিকে ইসলামী দাওয়াতের শক্তিতে রূপান্তর করা।</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div>
          <h4 className="text-xl font-semibold text-green-700 mb-2">🤲 আমাদের দোআ</h4>
          <p>
            আল্লাহ তায়ালা যেন আমাদের এই কাজ কবুল করেন, আমাদেরকে হিদায়াত দেন,  
            এবং এই প্ল্যাটফর্মের মাধ্যমে মানুষকে কুরআনের আলোয় ফিরিয়ে আনেন।  
            আমাদের সকল প্রচেষ্টা কেবল আল্লাহর সন্তুষ্টির জন্যই —{" "}
            <span className="font-semibold">ইনশাআল্লাহ।</span>
          </p>
        </div>
      </div>
    </section>
  );
}
