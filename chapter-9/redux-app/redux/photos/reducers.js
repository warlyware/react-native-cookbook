import {
  FETCH_PHOTOS_PENDING,
  FETCH_PHOTOS_FULFILLED,
  FETCH_PHOTOS_REJECTED,
  ADD_PHOTO_PENDING,
  ADD_PHOTO_FULFILLED,
  ADD_PHOTO_REJECTED,
  REMOVE_PHOTO,
  REMOVE_PHOTO_FULFILLED,
  REMOVE_PHOTO_REJECTED,
} from './actions';

const initialState = {
  loadedPhotos: [],
  isLoading: false,
  didError: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PHOTOS_PENDING:
      return {
        isLoading: true
      };
    case FETCH_PHOTOS_FULFILLED:
      return {
        loadedPhotos: action.payload.data,
        isLoading: false,
        didError: false
      };
    case FETCH_PHOTOS_REJECTED:
      return {
        loadedPhotos: [],
        isLoading: false,
        didError: true
      };

    case ADD_PHOTO_PENDING:
      console.log('UPLOAD GO');
      return {
        isLoading: true
      };
    case ADD_PHOTO_FULFILLED:
      console.log(action.payload.data);
      return {
        isLoading: false,
        didError: false
      };
    case ADD_PHOTO_REJECTED:
      return {
        isLoading: false,
        didError: true
      };
    default:
      return state;
  }
}