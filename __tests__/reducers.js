
import rootReducer from '../src/reducers/rootReducer'
import imagesReducer from '../src/reducers/ImagesReducer'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux'

import * as actionsTypes from '../src/actions/actionTypes'

const initialState = {}
const middlewares = [thunk]
const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares))

it('exmpale test', () => {
    expect(true).toBe(true)
})



describe('actions types test', () => {
    it('should return the emptied initial state (1st arg)', () => {
        expect(imagesReducer(initialState, 'NOT_A_REAL_ACTION_NAME')).toEqual(initialState)
    })

    it('initial state properties test', () => {
        expect(store.getState().images).toHaveProperty('images', [])
        expect(store.getState().images).toHaveProperty('favorites', [])
    })

    it('should fetch images', () => {
        const fetchImages = {
            type: actionsTypes.FETCH_IMAGES,
            payload: {
                largeImageURL:
                    'https://pixabay.com/get/e832b00d20f1043ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5ecb1bddf_1280.jpg',
                webformatHeight: 246,
                webformatWidth: 640,
                likes: 249,
                imageWidth: 2100,
                id: 1712855,
                user_id: 1409366,
                views: 56193,
                comments: 46,
                pageURL: 'https://pixabay.com/photos/jerusalem-israel-old-town-1712855/',
                imageHeight: 809,
                webformatURL:
                    'https://pixabay.com/get/e832b00d20f1043ed1584d05fb1d4794e176e6dc1fb10c4090f5c77fa5ecb1bddf_640.jpg',
                type: 'photo',
                previewHeight: 57,
                tags: 'jerusalem, israel, old town',
                downloads: 23911,
                user: 'Walkerssk',
                favorites: 185,
                imageSize: 1006212,
                previewWidth: 150,
                userImageURL: 'https://cdn.pixabay.com/user/2015/09/15/18-54-19-776_250x250.png',
                previewURL: 'https://cdn.pixabay.com/photo/2016/10/03/21/13/jerusalem-1712855_150.jpg'
            }
        }

        expect(imagesReducer(initialState, fetchImages)).toHaveProperty('images')
    })
})