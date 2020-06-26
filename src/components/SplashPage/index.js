import React from 'react';

import css from './splashPage.module.css';

import logo from '../../SVGs/ParsnipLogo.svg';

function SplashPage() {
  return (
    <div id={css.SplashPage}>
      <img src={logo} />
    </div>
  );
}

export default SplashPage;
