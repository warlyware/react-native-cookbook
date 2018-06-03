import axios from 'axios';
const API_URL='http://jsonplaceholder.typicode.com';

export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const FETCH_PHOTOS_PENDING = 'FETCH_PHOTOS_PENDING';
export const FETCH_PHOTOS_FULFILLED = 'FETCH_PHOTOS_FULFILLED';
export const FETCH_PHOTOS_REJECTED = 'FETCH_PHOTOS_REJECTED';
export const fetchPhotos = () => {
  return {
    type: FETCH_PHOTOS,
    payload: axios.get(`${API_URL}/photos?_page=1&_limit=10`)
  }
}

export const ADD_PHOTO = 'ADD_PHOTO';
export const ADD_PHOTO_PENDING = 'ADD_PHOTO_PENDING';
export const ADD_PHOTO_FULFILLED = 'ADD_PHOTO_FULFILLED';
export const ADD_PHOTO_REJECTED = 'ADD_PHOTO_REJECTED';
export const addPhoto = (photo) => {
  return {
    type: ADD_PHOTO,
    payload: axios.post(`${API_URL}/photos`, photo)
  };
}

export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const REMOVE_PHOTO_PENDING = 'REMOVE_PHOTO_PENDING';
export const REMOVE_PHOTO_FULFILLED = 'REMOVE_PHOTO_FULFILLED';
export const REMOVE_PHOTO_REJECTED = 'REMOVE_PHOTO_REJECTED';
export const removePhoto = (photoId) => {
  return {
    type: REMOVE_PHOTO,
    payload: axios.delete(`${API_URL}/photos/${photoId}`),
    meta: { photoId }
  };
}