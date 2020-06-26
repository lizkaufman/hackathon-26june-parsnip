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
      <img src={logo} onClick={goToMonth} />
    </div>
  );
}

export default SplashPage;
