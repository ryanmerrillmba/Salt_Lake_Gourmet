# Developer Quick Reference

## 🚀 Quick Start Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
```

## 📝 Common Tasks

### Add New Recipe
1. Edit `/data/recipes.ts`
2. Add image to `/public/images/`
3. Follow Recipe interface structure

### Update Site Content
- Navigation: `/components/Navigation.tsx`
- Text content: `/lib/dictionaries.ts`  
- SEO meta: `/app/layout.tsx`

### Styling Changes
- Global styles: `/app/globals.css`
- Components: Tailwind classes inline
- Theme: `tailwind.config.ts`

## 🗂 Key Files
- **Recipes**: `/data/recipes.ts`
- **Types**: `/lib/types.ts`
- **Content**: `/lib/dictionaries.ts`
- **Components**: `/components/`
- **Pages**: `/app/[lang]/`

## 🎨 Design System
- **Primary**: `emerald-600` (#059669)
- **Secondary**: `orange-500` (#f97316)
- **Font**: Inter (Google Fonts)
- **Spacing**: Tailwind defaults

## 🔗 URL Structure
- Homepage: `/en`
- All recipes: `/en/recipes`
- Individual recipe: `/en/recipe/[recipe-id]`
- About: `/en/about`

## 🏷 Recipe Properties
```typescript
{
  id: string              // unique identifier
  saltLakeCityRelated: boolean  // local SEO
  utahSpecialty: boolean       // Utah highlighting  
  featured: boolean           // homepage display
  difficulty: 'easy'|'medium'|'hard'
  category: 'mainCourses'|'appetizers'|'desserts'
}
```
