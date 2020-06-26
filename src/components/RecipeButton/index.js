import React from 'react';

import css from './recipeButton.module.css';

function RecipeButton({ pickRecipe }) {
  return (
    <button className={css.recipeButton} onClick={pickRecipe}>
      Give me a seasonal recipe!
    </button>
  );
}

export default RecipeButton;
