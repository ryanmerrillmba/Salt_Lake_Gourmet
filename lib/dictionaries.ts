export const dictionaries = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      recipes: 'Recipes',
      categories: 'Categories',
      about: 'About',
      contact: 'Contact',
      search: 'Search recipes...',
    },
    // Homepage
    hero: {
      title: 'Gourmet Recipes for Salt Lake City Foodies',
      subtitle: 'Discover exceptional culinary experiences crafted for the sophisticated palate. From mountain-inspired dishes to international flavors that celebrate Salt Lake City&apos;s diverse food scene.',
      cta: 'Explore Recipes',
      featured: 'Featured Recipes',
    },
    // Recipe Categories
    categories: {
      appetizers: 'Appetizers',
      mainCourses: 'Main Courses',
      desserts: 'Desserts',
      beverages: 'Beverages',
      vegetarian: 'Vegetarian',
      vegan: 'Vegan',
      glutenFree: 'Gluten-Free',
      healthy: 'Healthy Options',
      utahSpecialty: 'Utah Specialties',
      seasonal: 'Seasonal Favorites',
    },    // Recipe Details
    recipe: {
      ingredients: 'Ingredients',
      instructions: 'Instructions',
      prepTime: 'Prep Time',
      cookTime: 'Cook Time',
      totalTime: 'Total Time',
      servings: 'Servings',
      difficulty: 'Difficulty',
      calories: 'Calories',
      tags: 'Tags',
      description: 'Description',
      nutrition: 'Nutrition Information',
      reviews: 'Reviews',
      relatedRecipes: 'Related Recipes',
    },
    // Common UI
    ui: {
      minutes: 'minutes',
      hours: 'hours',
      people: 'people',
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard',
      loadMore: 'Load More',
      shareRecipe: 'Share Recipe',
      printRecipe: 'Print Recipe',
      saveRecipe: 'Save Recipe',
    },    // SEO Content
    seo: {
      homeTitle: 'Salt Lake City Gourmet Recipes | Foodie Paradise',
      homeDescription: 'Discover exceptional gourmet recipes perfect for Salt Lake City food enthusiasts. From mountain-inspired cuisine to international flavors, elevate your culinary journey.',
      recipesTitle: 'Gourmet Recipes Collection | Salt Lake City Food Guide',
      recipesDescription: 'Browse our curated collection of gourmet recipes crafted for Salt Lake City foodies. Find appetizers, mains, desserts, and specialty Utah dishes.',
    },
    // Footer
    footer: {
      tagline: 'Elevating Salt Lake City&apos;s Culinary Scene',
      quickLinks: 'Quick Links',
      categories: 'Recipe Categories',
      followUs: 'Follow Us',
      newsletter: 'Join Our Newsletter',
      newsletterText: 'Get the latest recipes and culinary tips delivered to your inbox.',
      subscribe: 'Subscribe',
      copyright: '© 2025 Salt Lake Gourmet Recipes. All rights reserved.',
    },
    // About Page
    about: {
      title: 'About Salt Lake Gourmet',
      subtitle: 'Celebrating Culinary Excellence in the Heart of Utah',
      story: 'Our passion for exceptional cuisine meets Salt Lake City&apos;s vibrant food culture. We curate gourmet recipes that honor both traditional Utah flavors and international culinary artistry.',
      mission: 'Our mission is to inspire food enthusiasts in Salt Lake City and beyond with accessible gourmet recipes that transform everyday cooking into extraordinary dining experiences.',
    }
  }
};

export type Dictionary = typeof dictionaries.en;
