// src/data/dummyRecipes.ts
import { Recipe } from '../types';

const dummyRecipes: Recipe[] = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `ダミーレシピ ${i + 1}`,
  description: `これはダミーレシピ ${i + 1} の説明です。`,
  image: `https://via.placeholder.com/300x200?text=Recipe+${i + 1}`,
  mealType: '昼食',
  tags: ['簡単', '時短'],
  hashTags: ['#ダミー', '#レシピ'],
  nutrition: {
    calories: 500 + i,
    protein: 20 + i,
    fat: 10 + i,
    carbs: 50 + i,
  },
  ingredients: ['材料A', '材料B', '材料C'],
  steps: ['ステップ1', 'ステップ2', 'ステップ3'],
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
  author: `ユーザー${i + 1}`,
  isFavorite: false,
  reactions: {
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  },
  dateCooked: new Date().toISOString(),
}));

export default dummyRecipes;
