import Link from 'next/link';
import Image from 'next/image';
import { Dictionary } from '../lib/dictionaries';

interface FooterProps {
  dict: Dictionary;
  lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/salt-lake-gourmet-logo.png"
                  alt="Salt Lake Gourmet Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
                Salt Lake Gourmet
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {dict.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center hover:bg-emerald-600/40 transition-colors cursor-pointer">
                <span className="text-emerald-400">📧</span>
              </div>
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center hover:bg-blue-600/40 transition-colors cursor-pointer">
                <span className="text-blue-400">📱</span>
              </div>
              <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center hover:bg-orange-600/40 transition-colors cursor-pointer">
                <span className="text-orange-400">🏔️</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{dict.footer.quickLinks}</h3>
            <div className="space-y-3">
              <Link href={`/${lang}`} className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1">
                {dict.nav.home}
              </Link>
              <Link href={`/${lang}/recipes`} className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1">
                {dict.nav.recipes}
              </Link>
              <Link href={`/${lang}/about`} className="block text-gray-300 hover:text-emerald-400 transition-all duration-300 hover:translate-x-1">
                {dict.nav.about}
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{dict.footer.categories}</h3>
            <div className="space-y-3 text-sm">
              <div className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">🥗 Appetizers</div>
              <div className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">🍖 Main Courses</div>
              <div className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">🏔️ Utah Specialties</div>
              <div className="text-gray-300 hover:text-emerald-400 transition-colors cursor-pointer">🍰 Desserts</div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">{dict.footer.newsletter}</h3>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {dict.footer.newsletterText}
            </p>
            <div className="flex rounded-xl overflow-hidden shadow-lg">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white/20 transition-all"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white hover:from-emerald-700 hover:to-emerald-800 transition-all duration-300 font-semibold">
                {dict.footer.subscribe}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left text-gray-400 text-sm">
              {dict.footer.copyright}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span className="hover:text-emerald-400 transition-colors cursor-pointer">Made with ❤️ in Salt Lake City</span>
              <span className="hover:text-emerald-400 transition-colors cursor-pointer">🏔️ Utah Proud</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
