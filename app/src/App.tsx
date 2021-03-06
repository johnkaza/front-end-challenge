import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Global } from '@emotion/core';
import { globalStyles } from '@/styles/globalStyles';
import queryConfig from '@/utils/queryConfig';

const App: React.FC<{ children: any }> = ({ children }) => {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <Global styles={globalStyles} />
      <div className="app-container">{children}</div>
    </ReactQueryConfigProvider>
  );
};

export default hot(App);
