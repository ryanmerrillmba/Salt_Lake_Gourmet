# Categories Page Documentation

## Overview
The `/en/categories` page displays recipes organized by different categories with a focus on Salt Lake City and Utah specialties.

## Features
- **Category Organization**: Recipes grouped by type and geographic relevance
- **Visual Category Icons**: Each category has a distinctive icon and gradient color
- **Recipe Count Display**: Shows number of recipes in each category
- **Utah-Focused Categories**: Special sections for Utah Specialties and Salt Lake City Favorites
- **Empty State Handling**: Graceful display when categories have no recipes

## Categories Structure

### Priority Categories (Location-Based)
1. **Utah Specialties** 🏔️ - Traditional Utah dishes (orange/red gradient)
2. **Salt Lake City Favorites** 🍽️ - Local food culture recipes (emerald/teal gradient)

### Standard Categories
3. **Main Courses** 🍖 - Hearty dishes (blue/purple gradient)  
4. **Appetizers** 🥗 - Meal starters (green/emerald gradient)
5. **Desserts** 🍰 - Sweet dishes (pink/rose gradient)

## Implementation Details

### Data Sources
- `utahSpecialties`: Recipes with `utahSpecialty: true`
- `saltLakeRecipes`: Recipes with `saltLakeCityRelated: true`
- Standard categories: Filter by `category` field

### Category Object Structure
```typescript
{
  id: string           // unique identifier
  name: string         // display name
  description: string  // category description
  icon: string         // emoji icon
  recipes: Recipe[]    // filtered recipes
  color: string        // Tailwind gradient classes
}
```

### Empty State
Categories with no recipes show a friendly message with plate emoji instead of empty grid.

## File Location
`/app/[lang]/categories/page.tsx`

## Related Components
- Uses `RecipeCard` component for recipe display
- Inherits layout from `Navigation` and `Footer`
- Integrates with internationalization via `dictionaries`
