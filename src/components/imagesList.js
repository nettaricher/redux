import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, ScrollView, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements';
import ImageItem from './imageItem'
import { fetchData } from '../actions/Actions'

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textInput: {
    height: 44,
    borderWidth: 1
  },

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
      search: ''
    };
    this.eachImage = this.eachImage.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchData()
  }
  updateSearch = search => {
    this.setState({ search });
  };
  eachImage(item, key) {
    return <ImageItem key={key} previewURL={item.previewURL} />
  }
  render() {
    const { search } = this.state;
    const { images } = this.props
    return (
      <View>
        <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
          />
        </View>
        <ScrollView>
          <View style={styles.list}>
            {images.map(this.eachImage)}
          </View>
        </ScrollView>
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
