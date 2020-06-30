import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Global } from '@emotion/core';
import { globalStyles } from './styles/globalStyles';

function App({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <div className="app-container">{children}</div>
    </>
  );
}

export default hot(App);