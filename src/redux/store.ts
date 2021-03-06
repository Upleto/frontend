import { applyMiddleware, Middleware } from 'redux';
import getConfig from 'next/config';
import configureStore, { ReducerEnhancedStore } from '../utils/redux/configureStore';
import { ActionWithPayload } from '../utils/redux/types';
import commonReducers from './reducers';
import rootSaga from './sagas/rootSaga';

export type Store = ReducerEnhancedStore<ActionWithPayload>;

const { publicRuntimeConfig } = getConfig();
const { isProd } = publicRuntimeConfig;

const enhancer = (...middlewareArray: Middleware[]) => {
  if (isProd) {
    return applyMiddleware(...middlewareArray);
  }
  // eslint-disable-next-line @typescript-eslint/no-var-requires, global-require
  const { composeWithDevTools } = require('redux-devtools-extension');
  return composeWithDevTools(applyMiddleware(...middlewareArray));
};

const initStore = configureStore({ commonReducers, enhancer, rootSaga });

export default initStore;
