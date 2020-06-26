import React from 'react';
import RecipeButton from '../RecipeButton';
import { julyFood } from '../../libs/foodImages';

import css from './monthList.module.css';

//h3 shows what month it is, displays the foods in season and then includes button

function MonthList() {
  const foodImages = julyFood.map((food) => food.image);

  return (
    <div>
      <h1>It's July!</h1>
      {/* TODO: hard coded but will eventually get date and show
      here */}
      {foodImages.map((image) => (
        <img className={css.foodImg} src={image} alt={image} key={image} />
      ))}
      <p>That means all these great foods are in season!</p>
      <RecipeButton />
    </div>
  );
}

export default MonthList;
