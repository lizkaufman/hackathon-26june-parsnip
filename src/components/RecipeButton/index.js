import React from 'react';
import { useHistory } from 'react-router-dom';

import css from './recipeButton.module.css';

function RecipeButton() {
  const history = useHistory();

  function goToRecipe() {
    history.push('/recipe');
  }

  return (
    <button className={css.recipeButton} onClick={goToRecipe}>
      Give me a seasonal recipe!
    </button>
  );
}

export default RecipeButton;
