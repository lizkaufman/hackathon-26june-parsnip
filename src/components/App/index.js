import React from 'react';
import './App.css';

import MonthList from '../MonthList';
import RecipeDisplay from '../RecipeDisplay';

//Components:
//-list component with month and images of food
//-recipe button
//-recipe display

function App() {
  return (
    <div className="App">
      <MonthList />
      <RecipeDisplay />
    </div>
  );
}

export default App;
