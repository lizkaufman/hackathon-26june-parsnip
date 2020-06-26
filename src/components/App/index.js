import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';

import MonthList from '../MonthList';
import RecipeDisplay from '../RecipeDisplay';
import SplashPage from '../SplashPage';

import logo from '../../SVGs/ParsnipLogo.svg';

//Components:
//-list component with month and images of food
//-recipe button
//-recipe display

function App() {
  return (
    <Router>
      <div className="App">
        <img className="header" src={logo} />
        <Switch>
          <Route path="/month">
            <MonthList />
          </Route>

          <Route path="/recipe">
            <RecipeDisplay />
          </Route>

          <Route path="/">
            <SplashPage />
          </Route>
        </Switch>{' '}
      </div>
    </Router>
  );
}

export default App;
