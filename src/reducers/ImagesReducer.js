import { FETCH_IMAGES, DISPLAY_FULL_SIZE, CLEAN_FULL_SIZE } from '../actions/ActionTypes'

const initialState = {
  images: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.payload
      }
    case DISPLAY_FULL_SIZE:
      return {
        ...state,
        fullSizeURL: action.payload.fullsize,
        previewURL: action.payload.preview
      }
    case CLEAN_FULL_SIZE:
      return {
        ...state,
        fullSizeURL: null,
        previewURL: null
      }
    default:
      return state
  }
}
