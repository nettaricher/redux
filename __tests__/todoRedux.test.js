import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../src/rootReducer'
import todoActions from '../src/components/Todo/todoActions'

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)
const initialState = {}

describe('todo redux e2e functionality', function() {
  test('add todo action adds new todo item', function() {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    expect(store.getState().todo).toHaveProperty('items', [])
    store.dispatch(todoActions.handleAddTodoSubmission('bla bla bla'))

    expect(store.getState().todo).toHaveProperty('items', [{ key: 'bla bla bla', isDone: false }])
  })

  test('toggle todo item', function() {
    const store = createStore(
      rootReducer,
      {
        ...initialState,
        todo: {
          items: [
            {
              isDone: false,
              key: 'todo1'
            },
            {
              isDone: false,
              key: 'todo2'
            }
          ],
          showAddItemInput: false
        }
      },
      composedEnhancers
    )
    store.dispatch(todoActions.toggleItemDone({ key: 'todo1' }))
    expect(store.getState().todo).toEqual({
      items: [
        {
          isDone: false,
          key: 'todo2'
        },
        {
          isDone: true,
          key: 'todo1'
        }
      ],
      showAddItemInput: false
    })
  })

  test('add button click todo item', function() {
    const store = createStore(rootReducer, initialState, composedEnhancers)
    store.dispatch(todoActions.handleAddButtonClick())
    expect(store.getState().todo).toEqual({
      items: [],
      showAddItemInput: true
    })
  })
})
