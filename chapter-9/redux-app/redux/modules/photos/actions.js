export const LOAD_PHOTOS = 'LOAD_PHOTOS';

export function loadPhotos() {
  return {
    type: LOAD_PHOTOS,
    payload: [
      {
        "albumId": 1,
        "id": 42,
        "title": "culpa qui quos reiciendis aut nostrum et id temporibus",
        "url": "http://placehold.it/600/a1ff25",
        "thumbnailUrl": "http://placehold.it/150/a1ff25"
      },
      {
        "albumId": 5,
        "id": 4242,
        "title": "ut voluptatem maiores nam ipsa beatae",
        "url": "http://placehold.it/600/40d9b8",
        "thumbnailUrl": "http://placehold.it/150/40d9b8"
      },
      {
        "albumId": 5,
        "id": 424242,
        "title": "voluptatibus sit amet vel natus qui voluptatem",
        "url": "http://placehold.it/600/88c71d",
        "thumbnailUrl": "http://placehold.it/150/88c71d"
      },
      {
        "albumId": 8,
        "id": 42424242,
        "title": "et nisi tenetur nam amet sed",
        "url": "http://placehold.it/600/67d26",
        "thumbnailUrl": "http://placehold.it/150/67d26"
      }
    ],
  };
}

export const ADD_PHOTO = 'ADD_PHOTO';

export function addPhoto(photo) {
  return {
    type: ADD_PHOTO,
    payload: photo,
  };
}

export const REMOVE_PHOTO = 'REMOVE_PHOTO';

export function removePhoto(photo) {
  return {
    type: REMOVE_PHOTO,
    payload: photo,
  };
}

export const UPDATE_PHOTO = 'UPDATE_PHOTO';

export function updatePhoto(photo) {
  return {
    type: UPDATE_PHOTO,
    payload: photo,
  };
}