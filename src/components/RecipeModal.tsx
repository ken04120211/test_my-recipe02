import React from 'react';
import { Recipe } from '../types';
import DetailedRecipeCard from './DetailedRecipeCard';

interface Props {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
  onToggleFavorite: (recipeId: number) => void;
}

const RecipeModal: React.FC<Props> = ({ recipe, isOpen, onClose, onToggleFavorite }) => {
  if (!recipe || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">{recipe.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            <i className="fa fa-times" />
          </button>
        </div>
        <div className="p-4">
          <DetailedRecipeCard
            recipe={recipe}
            index={recipe.id}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
