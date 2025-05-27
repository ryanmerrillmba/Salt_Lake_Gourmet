import Image from 'next/image';
import Link from 'next/link';
import { Dictionary } from '../lib/dictionaries';

interface HeroSectionProps {
  dict: Dictionary;
  lang: string;
}

export default function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-hero py-20 lg:py-32 overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-[100px] animate-pulse-soft"></div>
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full blur-[80px] animate-pulse-soft" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-3/4 left-1/5 w-6 h-6 bg-blue-400 rounded-full animate-ping opacity-40"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-orange-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/5 w-5 h-5 bg-purple-400 rounded-full animate-bounce opacity-30" style={{animationDelay: '0.5s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="space-y-10 animate-fade-in-up">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 text-base font-bold rounded-full border border-emerald-200 shadow-lg">
                🏔️ Inspired by Utah&apos;s Mountains
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] text-balance">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                  Gourmet Recipes
                </span>
                <br />
                <span className="text-gray-800">
                  for Salt Lake City
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Foodies
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                {dict.hero.subtitle}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                href={`/${lang}/recipes`}
                className="btn-primary inline-flex items-center justify-center text-lg px-8 py-4 group"
              >
                {dict.hero.cta}
                <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>              
              <Link 
                href={`/${lang}/categories`}
                className="btn-secondary inline-flex items-center justify-center text-lg px-8 py-4"
              >
                Browse Categories
              </Link>
            </div>

            {/* Enhanced Quick Stats */}
            <div className="flex items-center space-x-12 pt-8">
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">50+</div>
                <div className="text-sm text-gray-500 font-semibold">Recipes</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform">5⭐</div>
                <div className="text-sm text-gray-500 font-semibold">Utah Specialties</div>
              </div>
              <div className="text-center group cursor-pointer">
                <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">100%</div>
                <div className="text-sm text-gray-500 font-semibold">Local Inspired</div>
              </div>
            </div>
          </div>

          {/* Enhanced Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-[2rem] overflow-hidden shadow-2xl transform rotate-1 lg:rotate-3 hover:rotate-0 transition-transform duration-700 group">
              <Image
                src="/images/IMG_20160628_192942.jpg"
                alt="Gourmet food presentation showcasing Salt Lake City culinary excellence"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Enhanced overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Enhanced Floating Elements */}
            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass p-6 md:p-8 rounded-3xl shadow-2xl animate-float border border-white/20">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">50+</div>
                <div className="text-xs md:text-sm text-gray-700 font-bold">Gourmet Recipes</div>
              </div>
            </div>
            
            <div className="absolute -top-8 -right-8 md:-top-12 md:-right-12 glass p-6 md:p-8 rounded-3xl shadow-2xl animate-float border border-white/20" style={{animationDelay: '2s'}}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl">⭐</div>
                <div className="text-xs md:text-sm text-gray-700 font-bold">Utah Specialties</div>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce shadow-lg opacity-80"></div>
            <div className="absolute bottom-1/4 -right-8 w-10 h-10 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-ping shadow-lg opacity-60"></div>
            
            {/* Enhanced Logo Watermark */}
            <div className="absolute bottom-6 left-6 opacity-30 hover:opacity-60 transition-opacity group">
              <div className="relative w-20 h-20 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/salt-lake-gourmet-logo.png"
                  alt="Salt Lake Gourmet"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
