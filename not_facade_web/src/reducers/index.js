import { combineReducers } from 'redux'
import {
  ADD_PAGE,
  ADD_IMAGE,
  ADD_ALBUM,
  FETCH_PAGE,
  FETCH_IMAGES,
  FETCH_MORE_IMAGES
} from '../actions/index'

const pageReducer = (state = { pgId: '', pgName: '' }, action) => {
  switch (action.type) {
    case ADD_PAGE:
      return Object.assign({}, state, action.page)
    case FETCH_PAGE:
      return Object.assign({}, state, action.page)
    default:
      return state
  }
}

const imageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_IMAGE:
      return [...state, action.image]
    case FETCH_IMAGES:
      return [...state, ...action.images]
    case FETCH_MORE_IMAGES:
      return [...state, ...action.images]
    default:
      return state
  }
}
const albumReducer = (state = { albumId: '', albumName: '' }, action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return Object.assign({}, state, action.album)
    default:
      return state
  }
}

export const AppReducer = combineReducers({
  page: pageReducer,
  album: albumReducer,
  images: imageReducer
})
