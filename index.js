import React, { Component } from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import rootReducer from './src/reducers/rootReducer'
import NavigationService from './NavigationService';

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}
const store = createStore(rootReducer, initialState, composedEnhancers)

class Application extends Component {
  render() {
    return (
      <Provider store={store}>
        <App
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }} />
      </Provider>
    )
  }
}
AppRegistry.registerComponent(appName, () => Application)
