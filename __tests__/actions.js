simport { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/reducers/rootReducer'
import { cleanFullSizeURL } from '../src/actions/Actions'

const middlewares = [thunk]
const initialState = {}

describe('actions functionality test', () => {
    it('cleanFullSizeURL Action test', () => {
        const store = createStore(rootReducer, { ...initialState }, applyMiddleware(...middlewares))
        store.dispatch(cleanFullSizeURL())
        expect(store.getState().images.fullSizeURL).toEqual(null)

    })
})