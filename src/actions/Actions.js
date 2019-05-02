import { FETCH_IMAGES, DISPLAY_FULL_SIZE, CLEAN_FULL_SIZE, ASYNC_TO_STATE } from './ActionTypes'
import AsyncStorage from '@react-native-community/async-storage'

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


export const asyncStorageToState = () => async dispatch => {
  try {
    const value = await AsyncStorage.getItem('favorites')
    let obj = JSON.parse(value)
    dispatch({
      type: ASYNC_TO_STATE,
      payload: obj
    })
  } catch (e) {
    console.log("ERR asyncStorageToState()" + e)
  }

}

export const storeURL = (prevURL, fullURL) => dispatch => {
  console.log("storeFullSizeURL action url = " + prevURL)
  dispatch({
    type: DISPLAY_FULL_SIZE,
    payload: {
      preview: prevURL,
      fullsize: fullURL
    }
  })
}

export const cleanFullSizeURL = () => dispatch => {
  dispatch({
    type: CLEAN_FULL_SIZE,
    payload: null
  })
}
