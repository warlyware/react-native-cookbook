import { combineReducers, createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import photos from './photos/reducers';

const reducers = combineReducers({
  photos,
});

const store = createStore(reducers, applyMiddleware(promiseMiddleware()));

export default store;