import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, FlatList, TextInput } from 'react-native'
import ImageItem from './imageItem'
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
    images: images.images
  }
}

export class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.eachImage = this.eachImage.bind(this);
  }

  componentDidMount() {
    this.props.fetchData()
  }

  eachImage(item, key) {
    return <ImageItem key={key} previewURL={item.previewURL} />
  }
  render() {
    const {
      images
    } = this.props
    console.log(images)
    return (
      <View>
        <Button title={'Add Item'} />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Type here to translate!"
          />
        </View>
        <View>
          {images.map(this.eachImage)}
        </View>
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
