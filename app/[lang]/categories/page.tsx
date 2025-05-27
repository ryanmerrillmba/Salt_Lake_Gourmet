import { dictionaries } from '../../../lib/dictionaries';
import { recipes, getRecipesByCategory } from '../../../data/recipes';
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

export default function CategoriesPage({ params }: PageProps) {
  const dict = dictionaries[params.lang as keyof typeof dictionaries] || dictionaries.en;

  // Get recipes by category for display
  const mainCourses = getRecipesByCategory('mainCourses');
  const appetizers = getRecipesByCategory('appetizers');
  const desserts = getRecipesByCategory('desserts');
  
  // Get Utah specialties and Salt Lake City recipes
  const utahSpecialties = recipes.filter(recipe => recipe.utahSpecialty);
  const saltLakeRecipes = recipes.filter(recipe => recipe.saltLakeCityRelated);

  const categories = [
    {
      id: 'utah-specialties',
      name: 'Utah Specialties',
      description: 'Authentic Utah dishes that celebrate our local culinary traditions',
      icon: '🏔️',
      recipes: utahSpecialties,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'salt-lake-favorites',
      name: 'Salt Lake City Favorites',
      description: 'Recipes inspired by Salt Lake City&apos;s unique food culture',
      icon: '🍽️',
      recipes: saltLakeRecipes,
      color: 'from-emerald-500 to-teal-500'
    },    {
      id: 'main-courses',
      name: dict.categories.mainCourses,
      description: 'Hearty main dishes perfect for any occasion',
      icon: '🍖',
      recipes: mainCourses,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 'appetizers',
      name: dict.categories.appetizers,
      description: 'Start your meal with these delicious appetizers',
      icon: '🥗',
      recipes: appetizers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'desserts',
      name: dict.categories.desserts,
      description: 'Sweet endings to perfect your dining experience',
      icon: '🍰',
      recipes: desserts,
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation dict={dict} lang={params.lang} />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-emerald-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Recipe Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated recipe collections, featuring everything from authentic Utah specialties to international gourmet cuisine crafted for Salt Lake City food enthusiasts.
          </p>
        </div>
      </section>
      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.id} className="space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${category.color} text-white text-2xl mb-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    {category.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                      {category.recipes.length} {category.recipes.length === 1 ? 'Recipe' : 'Recipes'}
                    </span>
                  </div>
                </div>

                {/* Recipes Grid */}
                {category.recipes.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.recipes.map((recipe) => (
                      <RecipeCard
                        key={recipe.id}
                        recipe={recipe}
                        dict={dict}
                        lang={params.lang}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-400 text-6xl mb-4">🍽️</div>
                    <p className="text-gray-500 text-lg">
                      No recipes in this category yet. Check back soon for delicious additions!
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={params.lang} />
    </div>
  );
}
