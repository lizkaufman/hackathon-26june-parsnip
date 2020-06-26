import React, { useState, useEffect } from 'react';

import RecipeButton from '../RecipeButton';

import css from './recipeDisplay.module.css';

import { appId, apiKey } from '../../libs/apiKey.js';
//FIXME: these should move to environment variables if/for deployment!
import { julyFood } from '../../libs/foodImages';

/*PLAN:
- function that takes in the ingredients list, picks one at random, seeds it into the fetch URL, and does the fetch 
- once button's pressed, can conditionally render the recipe itself and hide the button
*/

// const sampleIngredients = [
//   'aubergine',
//   'strawberry',
//   'cauliflower',
//   'new potatoes',
// ];

function RecipeDisplay() {
  //FIXME: will take in the month's list when that's ready
  const [showRecipe, setShowRecipe] = useState(false);
  const [monthlyIngredients, setMonthlyIngredients] = useState([]);
  const [ingredient, setIngredient] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [recipeLink, setRecipeLink] = useState('');

  useEffect(() => {
    //FIXME: change to take in month's ingredients as props to this component once other months have been added; this logic should stay relatively the same though and just point to the props instead of the import
    const foodList = julyFood.map((food) => food.name);
    console.log({ foodList });
    setMonthlyIngredients(foodList);
  }, []);

  useEffect(() => {
    //FIXME: change sample recipes to the month's ingredient list
    const pickedIngredient =
      monthlyIngredients[Math.floor(Math.random() * monthlyIngredients.length)];
    console.log({ pickedIngredient });
    setIngredient(pickedIngredient);
  }, [monthlyIngredients]);

  function pickRecipe(ingredient) {
    fetch(
      //URL set up to take the chosen ingredient and then return 10 results
      `https://api.edamam.com/search?q=${ingredient}&to=9&app_id=${appId}&app_key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        const resultInfo = data;
        console.log({ resultInfo });
        //get the recipes array (with the key hits) out of the resultsInfo (array of objects):
        const recipesArray = resultInfo.hits;
        console.log({ recipesArray });
        //from this array, pick one of the objects randomly (and get out the recipe key):
        const pickedRecipe =
          recipesArray[Math.floor(Math.random() * recipesArray.length)].recipe;
        console.log({ pickedRecipe });
        //from recipe (which will be an object), get:
        //---label (name)
        setRecipeName(pickedRecipe.label);
        //---image (url to a jpg)
        setRecipeImg(pickedRecipe.image);
        //---recipe URL
        setRecipeLink(pickedRecipe.url);
      });

    //toggles the button off and the recipe info on:
    setShowRecipe(true);
  }

  return (
    <div id={css.RecipeDisplay}>
      {!showRecipe ? (
        <RecipeButton pickRecipe={() => pickRecipe(ingredient)} />
      ) : (
        <div className={css.recipeInfo}>
          <h2 className={css.recipeName}>{recipeName}</h2>
          <img src={recipeImg} alt={recipeName} className={css.recipeImg} />
          <a
            className={css.recipeLink}
            href={recipeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for the recipe for {recipeName}
          </a>
        </div>
      )}
    </div>
  );
}

export default RecipeDisplay;
