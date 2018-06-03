import {
  FETCH_PHOTOS_FULFILLED,
  ADD_PHOTO_FULFILLED,
  REMOVE_PHOTO_FULFILLED,
} from './actions';

const initialState = {
  loadedPhotos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_FULFILLED:
      return {
        ...state,
        loadedPhotos: [...action.payload.data],
      };
    case ADD_PHOTO_FULFILLED:
      return {
        ...state,
        loadedPhotos: [action.payload.data, ...state.loadedPhotos],
      };
    case REMOVE_PHOTO_FULFILLED:
      return {
        ...state,
        loadedPhotos: state.loadedPhotos.filter(photo => {
          return photo.id !== action.meta.photoId
        })
      };
    default:
      return state;
  }
}