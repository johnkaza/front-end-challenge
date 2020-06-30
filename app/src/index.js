import React from 'react';
import { render } from 'react-dom';
import AppRouter from './AppRouter';

render(<AppRouter />, document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}
