import { FETCH_IMAGES, DISPLAY_FULL_SIZE } from '../actions/ActionTypes'

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
        fullSizeURL: action.payload
      }
    default:
      return state
  }
}
