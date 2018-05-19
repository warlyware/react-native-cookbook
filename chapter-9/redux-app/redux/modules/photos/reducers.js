import {
  LOAD_PHOTOS,
  ADD_PHOTO,
  REMOVE_PHOTO,
  UPDATE_PHOTO
} from './actions';

const initialState = {
  photos: [],
};

export function reducer(state= initialState, action) {
  switch (action.type) {
    case LOAD_PHOTOS:
      return {
        ...state,
        photos: [...action.payload],
      };
    case ADD_PHOTO:
      return {
        ...state,
        photos: [...state.photos, action.payload],
      };
      case REMOVE_PHOTO:
    return {
        ...state,
          photos: state.photos.filter(
          photo => photo.id !== action.payload.id
        ),
      };
    case UPDATE_PHOTO:
      return {
        ...state,
        photos: state.photos.map(photo => {
          if(photo.id === action.payload.id) {
            return {
              ...action.payload,
            };
          }
          return photo;
        }),
      };
    default:
      return state;
  }
}