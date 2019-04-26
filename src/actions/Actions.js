import { FETCH_IMAGES } from './ActionTypes'

export const fetchData = query => dispatch => {
  if ((query === '') || (query == null) || (query == undefined))
    query = "girl"
  fetch(`https://pixabay.com/api/?key=12262400-9f9796ccc92696636fed65e93&q=${query}&image_type=photo`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: FETCH_IMAGES,
        payload: data.hits
      })
    })
}
