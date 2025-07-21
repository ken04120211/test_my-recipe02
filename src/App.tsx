import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MainScreen from './screens/MainScreen';
import { Recipe, InventoryItem } from './types'
import dummyFavoriteRecipes from './data/dummyFavoriteRecipes'


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const dummyUser = {
    name: 'ユーザー名',
    avatar: '/avatar.png',
  };

  

  const dummyInventory: InventoryItem[] = [
    { id: 1, name: 'にんじん', quantity: 2 },
  ];

  return (
    <MainScreen
      user={dummyUser}
      favorites={dummyFavoriteRecipes}
      history={dummyFavoriteRecipes}
      inventory={dummyInventory}
      recommended={dummyFavoriteRecipes}
      activeTab={activeTab}
      onChangeTab={setActiveTab}
      onSelectRecipe={(recipe: Recipe) => console.log('選択:', recipe)}
      onToggleFavorite={(id: number) => console.log('お気に入り切替:', id)}
    />
  );
};

export default App;

