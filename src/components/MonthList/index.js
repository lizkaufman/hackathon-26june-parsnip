import React from 'react';
import { julyFood } from '../../libs/foodImages';

import css from './monthList.module.css';

//h3 shows what month it is, displays the foods in season and then includes button

function MonthList() {
  const foodImages = julyFood.map((food) => food.image);
  console.log(foodImages);

  return (
    <div>
      <h3>It's July!</h3>
      {/* TODO: hard coded but will eventually get date and show
      here */}
      {foodImages.map((image) => (
        <img src={image} alt={image} />
      ))}

      <p>That means all these great foods are in season!</p>
    </div>
  );
}

export default MonthList;
