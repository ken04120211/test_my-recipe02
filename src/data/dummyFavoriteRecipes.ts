import { Recipe } from '../types';

const dummyFavoriteRecipes: Recipe[] = [
{
    id: 1,
    name: 'カレー',
    image: '/curry.jpg',
    description: 'スパイスの効いた本格的なカレーです。',
    tags: ['スパイシー', 'ご飯'],
    hashTags: ['#カレー', '#夕食'],
    likes: 12,
    comments: 3,
    dateCooked: '2025-07-20',
    mealType: 'dinner',
    nutrition: {
    calories: 600,
    protein: 20,
    fat: 25,
    carbs: 70,
    },
    ingredients: ['玉ねぎ', 'にんじん', 'じゃがいも', '鶏肉', 'カレールー'],
    steps: ['材料を切る', '炒める', '煮込む', 'ルーを入れる', '仕上げる'],
    author: '山田太郎',
    isFavorite: true,
    reactions: {
    calories: 5,
    protein: 3,
    fat: 2,
    carbs: 4,
    },
},
{
    id: 2,
    name: 'パスタ',
    image: '/pasta.jpg',
    description: 'トマトソースのシンプルなパスタ。',
    tags: ['イタリアン', '簡単'],
    hashTags: ['#パスタ', '#ランチ'],
    likes: 8,
    comments: 1,
    dateCooked: '2025-07-19',
    mealType: 'lunch',
    nutrition: {
    calories: 500,
    protein: 15,
    fat: 18,
    carbs: 60,
    },
    ingredients: ['パスタ', 'トマトソース', 'にんにく', 'オリーブオイル'],
    steps: ['パスタを茹でる', 'ソースを作る', '和える'],
    author: '佐藤花子',
    isFavorite: false,
    reactions: {
    calories: 2,
    protein: 1,
    fat: 1,
    carbs: 2,
    },
},
];

export default dummyFavoriteRecipes;