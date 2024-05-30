export interface Recipe {
    [x: string]: any;
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
  }

  export interface RecipesResponse {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
  }