import 'antd/dist/antd.css';
import 'Styles/styles.css';
import '../public/index.html';

import React, { Suspense, useEffect } from 'react';
import { render } from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { persistor, store } from 'Redux/store';
import getRoutes from 'Routes';

import { PageLoader } from 'Components';


const App = () => {
  return <App.Wrapper>{getRoutes()}</App.Wrapper>;
};

App.Wrapper = styled.div`
  background-color: var(--white);
`;

render(
  <Suspense fallback={<PageLoader />}>
    {/* <Provider store={store}> */}
      {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
        <BrowserRouter>
          <App />
        </BrowserRouter>
      {/* </PersistGate>
    </Provider> */}
  </Suspense>,
  document.getElementById('root'),
);
