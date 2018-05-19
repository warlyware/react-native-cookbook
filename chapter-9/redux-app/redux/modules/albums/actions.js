export const LOAD_ALBUMS = 'LOAD_ALBUMS';
export const LOAD_ALBUMS_SUCCESS = 'LOAD_ALBUMS_SUCCESS';
export const LOAD_ALBUMS_FAIL = 'LOAD_ALBUMS_FAIL';

export function loadAlbums() {
  return {
    types: [
      LOAD_ALBUMS,
      LOAD_ALBUMS_SUCCESS,
      LOAD_ALBUMS_FAIL
    ],
    promise: {
      url: 'https://my-bookmarks-api.herokuapp.com/api/categories',
      method: 'GET',
    },
  };
}
