import {
  FETCH_PHOTOS,
  FETCH_PHOTOS_FULFILLED,
  FETCH_PHOTOS_REJECTED,
  ADD_PHOTO,
  ADD_PHOTO_FULFILLED,
  ADD_PHOTO_REJECTED,
  REMOVE_PHOTO,
  REMOVE_PHOTO_FULFILLED,
  REMOVE_PHOTO_REJECTED,
} from './actions';

const initialState = {
  photos: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHOTOS_FULFILLED:
      console.log('FETCH_PHOTOS_FULFILLED', action.payload.data);
      return {
        ...state,
        photos: [...action.payload.data],
      };
    case ADD_PHOTO_FULFILLED:
      return {
        ...state,
        photos: [action.payload.data, ...state.photos],
      };
    case REMOVE_PHOTO_FULFILLED:
      console.log('REMOVE_PHOTO_FULFILLED', action.meta.photoId);
      return {
        ...state,
        photos: state.photos.filter(photo => {
          return photo.id !== action.meta.photoId
        })
      };
    default:
      return state;
  }
  // switch (action.type) {
  //   case FETCH_PHOTOS_PENDING:
  //     return {
  //       isLoading: true
  //     };
  //   case FETCH_PHOTOS_FULFILLED:
  //     return {
  //       loadedPhotos: action.payload.data,
  //       isLoading: false,
  //       didError: false
  //     };
  //   case FETCH_PHOTOS_REJECTED:
  //     return {
  //       loadedPhotos: [],
  //       isLoading: false,
  //       didError: true
  //     };

  //   case ADD_PHOTO_PENDING:
  //   case REMOVE_PHOTO_PENDING:
  //     return {
  //       isLoading: true
  //     };
  //   case ADD_PHOTO_FULFILLED:
  //   case REMOVE_PHOTO_FULFILLED:
  //     return {
  //       isLoading: false,
  //       didError: false
  //     };
  //   case ADD_PHOTO_REJECTED:
  //   case REMOVE_PHOTO_REJECTED:
  //     return {
  //       isLoading: false,
  //       didError: true
  //     };

  //   default:
  //     return state;
  // }
}