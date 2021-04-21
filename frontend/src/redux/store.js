import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { isDev } from 'Utils';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const appliedMiddleware = applyMiddleware(sagaMiddleware);

const enhancer = isDev
  ? composeWithDevTools(appliedMiddleware)
  : appliedMiddleware;

const store = createStore(rootReducer, enhancer);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
