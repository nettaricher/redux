import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

const styles = StyleSheet.create({
  itemWrapper: {
    borderWidth: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: 'black'
  }
})

const TodoListItem = ({ label, isDone, onPress }) => (
  <TouchableOpacity style={styles.itemWrapper} onPress={onPress}>
    <Text
      style={StyleSheet.flatten([
        styles.item,
        { textDecorationLine: isDone ? 'line-through' : 'none' }
      ])}
    >
      {label}
    </Text>
  </TouchableOpacity>
)

TodoListItem.propTypes = {
  label: PropTypes.string,
  isDone: PropTypes.bool,
  onPress: PropTypes.func
}
export default TodoListItem
