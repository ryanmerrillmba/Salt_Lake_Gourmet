import Image from 'next/image';
import Link from 'next/link';
import { Recipe } from '../lib/types';
import { Dictionary } from '../lib/dictionaries';

interface RecipeCardProps {
  recipe: Recipe;
  dict: Dictionary;
  lang: string;
}

export default function RecipeCard({ recipe, dict, lang }: RecipeCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-emerald-100 text-emerald-800 border border-emerald-200';
      case 'medium': return 'bg-amber-100 text-amber-800 border border-amber-200';
      case 'hard': return 'bg-rose-100 text-rose-800 border border-rose-200';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <Link href={`/${lang}/recipe/${recipe.id}`}>
      <div className="recipe-card bg-white rounded-3xl shadow-xl overflow-hidden group relative transform transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/25">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          
          {/* Enhanced Badges */}
          <div className="absolute top-4 left-4 flex gap-2">
            {recipe.utahSpecialty && (
              <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20 animate-pulse-soft">
                ⭐ Utah Specialty
              </span>
            )}
            {recipe.featured && (
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                🎖️ Featured
              </span>
            )}
          </div>          
          <div className={`absolute top-4 right-4 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md ${getDifficultyColor(recipe.difficulty)} shadow-lg`}>
            {dict.ui[recipe.difficulty as keyof typeof dict.ui]}
          </div>

          {/* Floating Utah Badge for Utah-related recipes */}
          {recipe.saltLakeCityRelated && (
            <div className="absolute bottom-4 left-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg backdrop-blur-sm border border-white/20">
              🏔️ SLC Inspired
            </div>
          )}
        </div>

        {/* Enhanced Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-base mb-6 line-clamp-3 leading-relaxed">
            {recipe.description}
          </p>
          
          {/* Enhanced Recipe Info */}
          <div className="flex items-center justify-between text-sm mb-6">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-emerald-600 font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {totalTime} minutes
              </span>
              <span className="flex items-center gap-2 text-blue-600 font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                {recipe.servings} people
              </span>
            </div>
            
            {recipe.calories && (
              <span className="bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-800 px-4 py-2 rounded-xl text-sm font-bold shadow-md">
                {recipe.calories} cal
              </span>
            )}
          </div>

          {/* Enhanced Tags */}
          <div className="flex flex-wrap gap-3">
            {recipe.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-4 py-2 rounded-xl text-sm font-medium hover:from-emerald-100 hover:to-emerald-200 hover:text-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md transform hover:scale-105">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/0 to-emerald-600/0 group-hover:from-emerald-600/10 group-hover:to-transparent transition-all duration-500 pointer-events-none"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12 group-hover:animate-pulse"></div>
        </div>
      </div>
    </Link>
  );
}
