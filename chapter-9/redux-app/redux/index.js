import { combineReducers, createStore, applyMiddleware } from 'redux';
import {
  loadPhotos,
  addPhoto,
  removePhoto,
  updatePhoto
} from './modules/photos/actions';
import fetchMiddleware from './middleware/fetchMiddleware';
import albums from './modules/albums/reducers';
import photos from './modules/photos/reducers';

const reducers = combineReducers({
  photos,
  albums,
});

const store = createStore(reducers, applyMiddleware(fetchMiddleware));

import { loadAlbums } from './modules/albums/actions';
const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

store.dispatch(loadAlbums());

export default store;