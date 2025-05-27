export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  difficulty: 'easy' | 'medium' | 'hard';
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  calories?: number;
  ingredients: Ingredient[];
  instructions: Instruction[];
  nutrition?: NutritionInfo;
  featured: boolean;
  saltLakeCityRelated: boolean;
  utahSpecialty: boolean;
  seasonal?: string[];
  dateCreated: string;
  author?: string;
}

export interface Ingredient {
  amount: string;
  unit: string;
  name: string;
  notes?: string;
}

export interface Instruction {
  step: number;
  text: string;
  image?: string;
  time?: number; // in minutes
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}
