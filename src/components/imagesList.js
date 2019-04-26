import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, FlatList, TextInput } from 'react-native'
// import TodoListItem from './ListItem'
import { fetchData } from '../actions/Actions'

const styles = StyleSheet.create({
  list: {
    alignContent: 'flex-start'
  },
  textInput: {
    height: 44,
    borderWidth: 1
  }
})

const mapStateToProps = ({ images }) => {
  return {
    images: images
  }
}

export class ImagesList extends Component {
  state = {
    addTodoText: ''
  }

  componentDidMount() {
    this.props.fetchData()
  }

  render() {
    const {
      images
    } = this.props

    return (
      <View>
        <Button title={'Add Item'} />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Type here to translate!"
          />
        </View>
        <FlatList
          style={styles.list}
          data={images}
          renderItem={({ image }) => (
            <Text>{console.log("123")}</Text>
          )}
        />
      </View>
    )
  }
}

// TodoList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string, isDone: PropTypes.bool })),
//   showAddItemInput: PropTypes.bool,
//   userName: PropTypes.string,
//   handleAddButtonClick: PropTypes.func,
//   toggleItemDone: PropTypes.func,
//   handleAddTodoSubmission: PropTypes.func
// }

export default connect(
  mapStateToProps,
  { fetchData }
)(ImagesList)
