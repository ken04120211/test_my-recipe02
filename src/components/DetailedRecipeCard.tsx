import React, { useState, useEffect } from 'react';
import { Recipe } from '../types';
import * as echarts from 'echarts';

interface Props {
  recipe: Recipe;
  index: number;
  onToggleFavorite: (recipeId: number) => void;
}

const DetailedRecipeCard: React.FC<Props> = ({ recipe, index, onToggleFavorite }) => {
  const [activeTab, setActiveTab] = useState<'recipe' | 'nutrition'>('recipe');

  useEffect(() => {
    if (activeTab === 'nutrition') {
      const chartDom = document.getElementById(`nutrition-chart-${index}`);
      if (chartDom) {
        const myChart = echarts.init(chartDom);
        const option = {
          animation: false,
          radar: {
            indicator: [
              { name: 'カロリー', max: 800 },
              { name: 'タンパク質', max: 40 },
              { name: '脂質', max: 40 },
              { name: '炭水化物', max: 80 }
            ]
          },
          series: [{
            type: 'radar',
            data: [{
              value: [
                recipe.nutrition.calories,
                recipe.nutrition.protein,
                recipe.nutrition.fat,
                recipe.nutrition.carbs
              ],
              name: '栄養バランス',
              areaStyle: {
                color: 'rgba(255, 99, 71, 0.6)'
              }
            }]
          }]
        };
        myChart.setOption(option);
      }
    }
  }, [activeTab, index, recipe.nutrition]);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
      <div className="relative h-64 overflow-hidden">
        <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover object-top" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h2 className="text-white text-2xl font-bold">{recipe.name}</h2>
          <p className="text-white text-sm">{recipe.description}</p>
        </div>
        <div
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md cursor-pointer"
          onClick={() => onToggleFavorite(recipe.id)}
        >
          <i className={`fa ${recipe.isFavorite ? 'fa-heart text-red-500' : 'fa-heart-o text-gray-500'}`} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex border-b mb-4">
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'recipe' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('recipe')}
          >
            レシピ
          </button>
          <button
            className={`px-4 py-2 font-medium ${activeTab === 'nutrition' ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-500'}`}
            onClick={() => setActiveTab('nutrition')}
          >
            栄養成分
          </button>
        </div>

        {activeTab === 'recipe' ? (
          <div>
            <h3 className="text-lg font-bold mb-2">材料</h3>
            <ul className="list-disc pl-5 mb-4">
              {recipe.ingredients.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-2">作り方</h3>
            <ol className="list-decimal pl-5">
              {recipe.steps.map((step, idx) => (
                <li key={idx} className="mb-2">{step}</li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <h3 className="text-lg font-bold mb-2">栄養成分</h3>
              <table className="w-full border-collapse">
                <tbody>
                  <tr className="border-b"><td>カロリー</td><td className="text-right">{recipe.nutrition.calories} kcal</td></tr>
                  <tr className="border-b"><td>タンパク質</td><td className="text-right">{recipe.nutrition.protein} g</td></tr>
                  <tr className="border-b"><td>脂質</td><td className="text-right">{recipe.nutrition.fat} g</td></tr>
                  <tr className="border-b"><td>炭水化物</td><td className="text-right">{recipe.nutrition.carbs} g</td></tr>
                </tbody>
              </table>
            </div>
            <div className="md:w-1/2">
              <div id={`nutrition-chart-${index}`} style={{ width: '100%', height: '250px' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailedRecipeCard;
