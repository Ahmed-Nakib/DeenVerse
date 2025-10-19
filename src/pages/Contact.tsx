
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white py-16 px-6 md:px-20 text-gray-800">
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
          📞 আমাদের সাথে যোগাযোগ করুন
        </h3>
        <p className="text-gray-600">
          আপনার মতামত, প্রশ্ন বা পরামর্শ আমাদের জন্য মূল্যবান।  
          নিচের মাধ্যমে আমাদের সাথে যোগাযোগ করুন — ইনশাআল্লাহ দ্রুত উত্তর দেওয়া হবে।
        </p>
      </div>

      {/* Contact Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Mail className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">ইমেইল</h4>
              <p className="text-gray-600">info@islamicmission.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Phone className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">ফোন</h4>
              <p className="text-gray-600">+880 1700-000000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-full">
              <MapPin className="text-green-700 w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900">ঠিকানা</h4>
              <p className="text-gray-600">
                ইসলাম প্রচার কেন্দ্র, ধানমন্ডি, ঢাকা – বাংলাদেশ।
              </p>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">
              আমাদের লক্ষ্য — ইসলামের বার্তা সহজভাবে ছড়িয়ে দেওয়া।  
              আপনার পরামর্শ আমাদের পথচলাকে আরও সুন্দর করবে ইনশাআল্লাহ 🌙
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-4 border border-green-100"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block text-sm font-medium mb-1">নাম</label>
            <input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">ইমেইল</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">বিষয়</label>
            <input
              type="text"
              placeholder="আপনার বার্তার বিষয়"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">বার্তা</label>
            <textarea
              rows={5}
              placeholder="আপনার বার্তা লিখুন..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-400 focus:outline-none resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300"
          >
            <Send className="w-5 h-5" />
            বার্তা পাঠান
          </button>
        </form>
      </div>

    </section>
  );
}
