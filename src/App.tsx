import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MainScreen from './screens/MainScreen';
import { Recipe, InventoryItem } from './types'


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const dummyUser = {
    name: 'ユーザー名',
    avatar: '/avatar.png',
  };

  const dummyRecipes: Recipe[] = [
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

  const dummyInventory: InventoryItem[] = [
    { id: 1, name: 'にんじん', quantity: 2 },
  ];

  return (
    <MainScreen
      user={dummyUser}
      favorites={dummyRecipes}
      history={dummyRecipes}
      inventory={dummyInventory}
      recommended={dummyRecipes}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
      onSelectRecipe={(recipe: Recipe) => console.log('選択:', recipe)}
      onToggleFavorite={(id: number) => console.log('お気に入り切替:', id)}
    />
  );
};

export default App;

