import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Chip,
  Box,
  Stack,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import { Recipe } from './../types';

interface Props {
  recipe: Recipe;
  onClick: (recipe: Recipe) => void;
  onToggleFavorite: (recipeId: number) => void;
  isFavorite: boolean;
}

const RecipeCard: React.FC<Props> = ({ recipe, onClick, onToggleFavorite, isFavorite }) => {
  return (
    <Card
      sx={{
        borderRadius: 2,
        boxShadow: 2,
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': { boxShadow: 6 },
      }}
      onClick={() => onClick(recipe)}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={recipe.image}
          alt={recipe.name}
          sx={{ objectFit: 'cover' }}
        />
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(recipe.id);
          }}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            backgroundColor: 'white',
            boxShadow: 1,
            '&:hover': { backgroundColor: '#f5f5f5' },
          }}
        >
          {isFavorite ? (
            <FavoriteIcon sx={{ color: 'red' }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: 'gray' }} />
          )}
        </IconButton>
      </Box>

      <CardContent>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          {recipe.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 1 }}
          onClick={(e) => {
            e.stopPropagation();
            onClick(recipe);
          }}
        >
          {recipe.description}
        </Typography>

        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 1 }}>
          {recipe.tags.map((tag, index) => (
            <Chip key={index} label={tag} size="small" />
          ))}
        </Stack>

        <Box display="flex" justifyContent="space-between" color="text.secondary" fontSize={14}>
          <Box display="flex" alignItems="center">
            <ThumbUpAltOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            {recipe.likes}
          </Box>
          <Box display="flex" alignItems="center">
            <CommentOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            {recipe.comments}
          </Box>
          <Box display="flex" alignItems="center">
            <CalendarTodayOutlinedIcon fontSize="small" sx={{ mr: 0.5 }} />
            {recipe.dateCooked}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
