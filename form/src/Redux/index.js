import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../Sagas/';
import formReducer from './FormReducer';

export const reducers = combineReducers({
  form: formReducer,
});

export default (initialState, context = {}) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware({});
  middleware.push(sagaMiddleware);


  enhancers.push(applyMiddleware(...middleware));

  const store = createStore(reducers, compose(...enhancers));

  // kick off root saga
  sagaMiddleware.run(rootSaga, context);

  return store;
};
