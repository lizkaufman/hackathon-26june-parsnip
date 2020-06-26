import React, { useState, useEffect } from 'react';

import RecipeButton from '../RecipeButton';

import css from './recipeDisplay.module.css';

import { appId, apiKey } from '../../libs/apiKey.js';

// recipe-finding API: https://api.spoonacular.com/recipes/findByIngredients?apiKey=**API KEY HERE**&ingredients=  <-put the ingredient after the = here (docs: https://spoonacular.com/food-api/docs#Search-Recipes-by-Ingredients)

/*PLAN:
- function that takes in the ingredients list, picks one at random, seeds it into the fetch URL, and does the fetch 
- once button's pressed, can conditionally render the recipe itself and hide the button
*/

const sampleIngredients = [
  'aubergine',
  'strawberry',
  'cauliflower',
  'new potatoes',
];

function RecipeDisplay() {
  //FIXME: will take in the month's list when that's ready
  const [showRecipe, setShowRecipe] = useState(false);
  const [ingredient, setIngredient] = useState('');
  const [recipeName, setRecipeName] = useState('');
  const [recipeImg, setRecipeImg] = useState('');
  const [recipeLink, setRecipeLink] = useState('');

  useEffect(() => {
    //TODO: change sample recipes to the month's ingredient list
    const pickedIngredient =
      sampleIngredients[Math.floor(Math.random() * sampleIngredients.length)];
    console.log({ pickedIngredient });
    setIngredient(pickedIngredient);
  }, []);

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
        <div>
          <h2>{recipeName}</h2>
          <img src={recipeImg} alt={recipeName} className={css.recipeImg} />
          <a className={css.recipeLink} href={recipeLink}>
            Click here to view the recipe and get cooking!
          </a>
        </div>
      )}
    </div>
  );
}

export default RecipeDisplay;
