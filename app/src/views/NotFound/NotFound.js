import React from 'react';
import App from '@/App';
import { notFoundContainer } from './styles.js';

const NotFound = () => {
  return (
    <App>
      <div css={notFoundContainer}>Games have left the building</div>
    </App>
  );
};

export default NotFound;
