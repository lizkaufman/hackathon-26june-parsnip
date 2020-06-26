import React from 'react';

import css from './recipeButton.module.css';

function RecipeButton({ pickRecipe }) {
  return <button onClick={pickRecipe}>Give me a seasonal recipe!</button>;
}

export default RecipeButton;
