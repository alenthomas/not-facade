let data = require('../data')

// Action types
export const ADD_PAGE = 'ADD_PAGE'
export const ADD_ALBUM = 'ADD_ALBUM'
export const ADD_IMAGE = 'ADD_IMAGE'
export const FETCH_PAGE = 'FETCH_PAGE'
export const FETCH_PAGE_SUCCESS = 'FETCH_PAGE_SUCCESS'
export const FETCH_PAGE_FAILURE = 'FETCH_PAGE_FAILURE'
export const FETCH_IMAGES = 'FETCH_IMAGES'
export const FETCH_MORE_IMAGES = 'FETCH_MORE_IMAGES'

// Actions
export const actionNewPage = (pgId, pgName) => {
  return { type: ADD_PAGE, page: { pgId: pgId, pgName: pgName } }
}

export const actionNewImage = (imgId, imgSrc) => {
  return { type: ADD_IMAGE, image: { imgId: imgId, imgSrc: imgSrc } }
}

export const actionFetchPage = (pgName) => {
  return { type: FETCH_PAGE, page: data.page }
}

export const actionFetchImages = () => {
  return { type: FETCH_IMAGES, images: data.images }
}

export const actionFetchMoreImages = () => {
  return { type: FETCH_MORE_IMAGES, images: data.images }
}

export const actionFetchPageSuccess = (response) => {
  return { type: FETCH_PAGE_SUCCESS, data: response, isFetching: false }
}

export const actionFetchPageError = (error) => {
  return { type: FETCH_PAGE_FAILURE, error: error, isFetching: false }
}
