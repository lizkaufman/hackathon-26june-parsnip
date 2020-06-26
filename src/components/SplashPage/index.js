import React from 'react';
import { useHistory } from 'react-router-dom';

import css from './splashPage.module.css';

import logo from '../../SVGs/ParsnipLogo.svg';

function SplashPage() {
  const history = useHistory();
  function goToMonth() {
    history.push('/month');
  }

  return (
    <div id={css.SplashPage}>
      <img
        src={logo}
        onClick={goToMonth}
        alt="logo to click to go to main app"
      />
    </div>
  );
}

export default SplashPage;
