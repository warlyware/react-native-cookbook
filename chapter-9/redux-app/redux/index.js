import { combineReducers, createStore, applyMiddleware } from 'redux';
import {
  loadPhotos,
  addPhoto,
  removePhoto,
  updatePhoto
} from './modules/photos/actions';
import reducers from './modules/photos/reducers';
import fetchMiddleware from './middleware/fetchMiddleware';

const store = createStore(reducers, applyMiddleware(fetchMiddleware));

export default store;