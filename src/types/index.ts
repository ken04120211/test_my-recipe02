export interface Nutrition {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Reactions {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  image: string;
  mealType: string;
  tags: string[];
  hashTags: string[];
  nutrition: Nutrition;
  ingredients: string[];
  steps: string[];
  likes: number;
  comments: number;
  author: string;
  isFavorite: boolean;
  reactions: Reactions;
  dateCooked: string;
}

export interface InventoryItem {
  id: number;
  name: string;
  quantity: number;
}
