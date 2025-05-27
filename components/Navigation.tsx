'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dictionary } from '../lib/dictionaries';

interface NavigationProps {
  dict: Dictionary;
  lang: string;
}

export default function Navigation({ dict, lang }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center space-x-3 group">
            <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/salt-lake-gourmet-logo.png"
                alt="Salt Lake Gourmet Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="text-xl font-bold text-emerald-600 group-hover:text-emerald-700 transition-colors">
              Salt Lake Gourmet
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href={`/${lang}`} 
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              {dict.nav.home}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>            
            <Link 
              href={`/${lang}/recipes`} 
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              {dict.nav.recipes}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href={`/${lang}/categories`} 
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              {dict.nav.categories}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href={`/${lang}/about`} 
              className="text-gray-700 hover:text-emerald-600 transition-all duration-300 font-medium relative group"
            >
              {dict.nav.about}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 focus:outline-none p-2 rounded-lg hover:bg-emerald-50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-sm border-t border-emerald-100 rounded-b-lg">
              <Link href={`/${lang}`} className="block px-3 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium">{dict.nav.home}</Link>
              <Link href={`/${lang}/recipes`} className="block px-3 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium">{dict.nav.recipes}</Link>
              <Link href={`/${lang}/categories`} className="block px-3 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium">{dict.nav.categories}</Link>
              <Link href={`/${lang}/about`} className="block px-3 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium">{dict.nav.about}</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
