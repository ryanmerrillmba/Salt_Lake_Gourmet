import { notFound } from 'next/navigation';
import Image from 'next/image';
import { dictionaries } from '../../../../lib/dictionaries';
import { getRecipeById, recipes } from '../../../../data/recipes';
import { generateRecipeStructuredData } from '../../../../lib/structured-data';
import Navigation from '../../../../components/Navigation';
import PrintRecipeButton from '../../../../components/PrintRecipeButton';
import Footer from '../../../../components/Footer';

interface PageProps {
  params: {
    lang: string;
    id: string;
  };
}

export async function generateStaticParams() {
  const paths: { lang: string; id: string }[] = [];
  
  recipes.forEach((recipe) => {
    paths.push({ lang: 'en', id: recipe.id });
  });
  
  return paths;
}

export default function RecipePage({ params }: PageProps) {
  const dict = dictionaries[params.lang as keyof typeof dictionaries] || dictionaries.en;
  const recipe = getRecipeById(params.id);

  if (!recipe) {
    notFound();
  }

  const structuredData = generateRecipeStructuredData(recipe);

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Navigation dict={dict} lang={params.lang} />
      
      {/* Recipe Header */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Recipe Image */}
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Recipe Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {recipe.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {recipe.description}
                </p>
              </div>

              {/* Recipe Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl font-bold text-emerald-600">{recipe.prepTime}</div>
                  <div className="text-sm text-gray-600">Prep {dict.ui.minutes}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl font-bold text-orange-600">{recipe.cookTime}</div>
                  <div className="text-sm text-gray-600">Cook {dict.ui.minutes}</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{recipe.servings}</div>
                  <div className="text-sm text-gray-600">Servings</div>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                  <div className="text-2xl font-bold text-purple-600">{recipe.calories || 'N/A'}</div>
                  <div className="text-sm text-gray-600">Calories</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {recipe.tags.map((tag) => (
                  <span key={tag} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <PrintRecipeButton recipe={recipe} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Recipe Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ingredients */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.recipe.ingredients}</h2>
              <ul className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">
                      <span className="font-medium">{ingredient.amount} {ingredient.unit}</span> {ingredient.name}
                      {ingredient.notes && <span className="text-gray-500 italic"> ({ingredient.notes})</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.recipe.instructions}</h2>
              <ol className="space-y-4">
                {recipe.instructions.map((instruction) => (
                  <li key={instruction.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {instruction.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed">{instruction.text}</p>
                      {instruction.time && (
                        <p className="text-sm text-gray-500 mt-1">⏱️ {instruction.time} minutes</p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <Footer dict={dict} lang={params.lang} />
    </div>
  );
}
