import { dictionaries } from '../../lib/dictionaries';
import { getFeaturedRecipes } from '../../data/recipes';
import Navigation from '../../components/Navigation';
import HeroSection from '../../components/HeroSection';
import RecipeCard from '../../components/RecipeCard';
import Footer from '../../components/Footer';

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function HomePage({ params }: PageProps) {
  const dict = dictionaries[params.lang as keyof typeof dictionaries] || dictionaries.en;
  const featuredRecipes = getFeaturedRecipes();

  return (
    <div className="min-h-screen bg-white">
      <Navigation dict={dict} lang={params.lang} />
      <HeroSection dict={dict} lang={params.lang} />
      
      {/* Featured Recipes Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {dict.hero.featured}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our handpicked collection of gourmet recipes that celebrate Salt Lake City&apos;s culinary diversity and Utah&apos;s local flavors.
            </p>
          </div>          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRecipes.map((recipe) => (
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
