import React from 'react';

import css from './splashPage.module.css';

import logo from '';

function SplashPage() {
  return (
    <div id={css.SplashPage}>
      <img src="logo" id={css.logo} />
    </div>
  );
}

export default SplashPage;
