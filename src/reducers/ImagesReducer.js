import { FETCH_IMAGES } from '../actions/ActionTypes'

const initialState = {
  images: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        images: action.data
      }
    default:
      return state
  }
}
