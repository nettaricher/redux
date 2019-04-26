import { TextInput } from 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { TodoList } from '../src/components/Todo/TodoList'
import TodoListItem from '../src/components/Todo/TodoListItem'

describe('TodoList tests', function() {
  test('renders correctly', async () => {
    const items = [
      { key: 'Laundry', isDone: false },
      { key: 'Shopping', isDone: false },
      { key: 'Call lawyer', isDone: false }
    ]

    const testRenderer = renderer.create(<TodoList items={items} showAddItemInput={false} />)
    expect(testRenderer.root.props).toHaveProperty('items')
    expect(testRenderer.root.props.items).toHaveLength(3)
  })

  test('renders todo items correctly', async () => {
    const items = [
      { key: 'Laundry', isDone: false },
      { key: 'Shopping', isDone: false },
      { key: 'Call lawyer', isDone: false }
    ]

    const testRenderer = renderer.create(<TodoList items={items} showAddItemInput={false} />)
    expect(testRenderer.root.findAllByType(TodoListItem)).toHaveLength(items.length)
  })

  test('toggle item on press', async () => {
    const items = [
      { key: 'Laundry', isDone: false },
      { key: 'Shopping', isDone: false },
      { key: 'Call lawyer', isDone: false }
    ]

    const onToggle = jest.fn()

    const testRenderer = renderer.create(
      <TodoList items={items} showAddItemInput={false} toggleItemDone={onToggle} />
    )
    const todoItemComponent = testRenderer.root.findAllByType(TodoListItem)[0]

    todoItemComponent.props.onPress()

    expect(onToggle).toHaveBeenCalledTimes(1)
    expect(onToggle).toHaveBeenCalledWith({ key: todoItemComponent.props.label, isDone: false })
  })

  test('calls action on add todo item press', function() {
    const onAddItem = jest.fn()
    const testRenderer = renderer.create(<TodoList items={[]} handleAddButtonClick={onAddItem} />)
    testRenderer.root.props.handleAddButtonClick()
    expect(onAddItem).toHaveBeenCalledTimes(1)
  })

  test('should not show input text field if showAddItemInput=false', function() {
    const testRenderer = renderer.create(<TodoList items={[]} showAddItemInput={false} />)
    expect(testRenderer.root.findAllByType(TextInput)).toEqual([])
  })

  test('should not show input text field if showAddItemInput=true', function() {
    const testRenderer = renderer.create(<TodoList items={[]} showAddItemInput />)
    expect(testRenderer.root.findByType(TextInput)).toBeDefined()
  })
})
