import React from 'react';
import './App.css';

import MonthList from '../MonthList';
import RecipeDisplay from '../RecipeDisplay';
import SplashPage from '../SplashPage';

//Components:
//-list component with month and images of food
//-recipe button
//-recipe display

function App() {
  return (
    <div className="App">
      <header className="header">Parsnip</header>
      <MonthList />
      <RecipeDisplay />
      {/* <SplashPage/> */}
    </div>
  );
}

export default App;
