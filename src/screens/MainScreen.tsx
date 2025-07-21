import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from '@mui/material';
import { Home, Star, Favorite, History, ShoppingBasket } from '@mui/icons-material';
import { Recipe, InventoryItem } from '../types';
import RecipeCard from '../components/RecipeCard';
import dummyRecipes from '../data/dummyRecipes'

interface Props {
  user: {
    name: string;
    avatar: string;
  };
  favorites: Recipe[];
  history: Recipe[];
  inventory: InventoryItem[];
  recommended: Recipe[];
  activeTab: string;
  onChangeTab: (tab: string) => void;
  onSelectRecipe: (recipe: Recipe) => void;
  onToggleFavorite: (id: number) => void;
}

const tabConfig = [
  { key: 'home', label: 'ホーム', icon: <Home /> },
  { key: 'recommend', label: '今日のおすすめ', icon: <Star /> },
  { key: 'favorites', label: 'お気に入り', icon: <Favorite /> },
  { key: 'history', label: '履歴', icon: <History /> },
  { key: 'kitchen', label: 'キッチン', icon: <ShoppingBasket /> },
];

const MainScreen: React.FC<Props> = ({
  user,
  favorites,
  history,
  inventory,
  recommended,
  activeTab,
  onChangeTab,
  onSelectRecipe,
  onToggleFavorite,
}) => {
  const handleTabChange = (_: React.SyntheticEvent, newValue: string) => {
    onChangeTab(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      {/* ヘッダー */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center" onClick={() => onChangeTab('home')} sx={{ cursor: 'pointer' }}>
            <img src="/topIcon.png" alt="Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
            <Typography variant="h6" color="textPrimary" fontWeight="bold">
              マイレシピ
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Avatar src={user.avatar} sx={{ width: 32, height: 32, marginRight: 1 }} />
            <Typography variant="body2">{user.name}</Typography>
          </Box>
        </Toolbar>

        {/* タブ */}
        <Container>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            indicatorColor="primary"
            textColor="primary"
          >
            {tabConfig.map(({ key, label, icon }) => (
              <Tab
                key={key}
                value={key}
                label={
                  <Box display="flex" alignItems="center">
                    {icon}
                    <Box ml={1}>{label}</Box>
                  </Box>
                }
              />
            ))}
          </Tabs>
        </Container>
      </AppBar>

      {/* メインコンテンツ */}
      <Container sx={{ py: 4 }}>
        {activeTab === 'home' &&
          dummyRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onSelectRecipe(recipe)}
              onToggleFavorite={() => onToggleFavorite(recipe.id)}
              isFavorite={recipe.isFavorite}
            />
          ))}

        {activeTab === 'favorites' &&
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onClick={() => onSelectRecipe(recipe)}
              onToggleFavorite={() => onToggleFavorite(recipe.id)}
              isFavorite={true}
            />
          ))}
      </Container>
    </Box>
  );
};

export default MainScreen;
