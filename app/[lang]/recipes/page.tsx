import { dictionaries } from '../../../lib/dictionaries';
import { recipes } from '../../../data/recipes';
import Navigation from '../../../components/Navigation';
import RecipeCard from '../../../components/RecipeCard';
import Footer from '../../../components/Footer';

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function RecipesPage({ params }: PageProps) {
  const dict = dictionaries[params.lang as keyof typeof dictionaries] || dictionaries.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation dict={dict} lang={params.lang} />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            All Recipes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete collection of gourmet recipes crafted for Salt Lake City food enthusiasts. From Utah specialties to international cuisine.
          </p>
        </div>
      </section>
      {/* Recipes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {recipes.length} Recipes Found
            </h2>
            <div className="flex gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option>All Categories</option>
                <option>Appetizers</option>
                <option>Main Courses</option>
                <option>Desserts</option>
                <option>Utah Specialties</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                <option>All Difficulties</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                dict={dict}
                lang={params.lang}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={params.lang} />
    </div>
  );
}
