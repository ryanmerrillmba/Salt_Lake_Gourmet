import { Recipe } from './types';

export function generateRecipeStructuredData(recipe: Recipe) {
  return {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    "name": recipe.title,
    "description": recipe.description,
    "image": [`https://saltlakegourmet.com${recipe.image}`],
    "author": {
      "@type": "Organization",
      "name": recipe.author || "Salt Lake Gourmet Kitchen"
    },
    "datePublished": recipe.dateCreated,
    "prepTime": `PT${recipe.prepTime}M`,
    "cookTime": `PT${recipe.cookTime}M`,
    "totalTime": `PT${recipe.prepTime + recipe.cookTime}M`,
    "recipeCategory": recipe.category,
    "recipeYield": recipe.servings,
    "nutrition": recipe.calories ? {
      "@type": "NutritionInformation",
      "calories": `${recipe.calories} calories`
    } : undefined,
    "recipeIngredient": recipe.ingredients.map(ing => 
      `${ing.amount} ${ing.unit} ${ing.name}`
    ),
    "recipeInstructions": recipe.instructions.map(inst => ({
      "@type": "HowToStep",
      "text": inst.text
    })),
    "keywords": recipe.tags.join(', '),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Salt Lake Gourmet",
    "url": "https://saltlakegourmet.com",
    "logo": "https://saltlakegourmet.com/images/salt-lake-gourmet-logo.png",
    "description": "Elevating Salt Lake City's Culinary Scene",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Salt Lake City",
      "addressRegion": "UT",
      "addressCountry": "US"
    }
  };
}
