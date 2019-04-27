import React, { Component } from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { storeFullSizeURL } from '../actions/Actions'

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    margin: 8
  }
})

class ImageItem extends Component {
  constructor(props) {
    super(props);
    this.setFullScreen = this.setFullScreen.bind(this);
  }

  setFullScreen() {
    console.log("setFullScreen = " + this.props.largeImageURL)
    this.props.storeFullSizeURL(this.props.largeImageURL)
  }

  render() {
    return (
      <TouchableOpacity onPress={this.setFullScreen}>
        <Image
          style={styles.item}
          source={{ uri: `${this.props.previewURL}` }}
        />
      </TouchableOpacity>
    )
  }
}

export default connect(
  null,
  { storeFullSizeURL }
)(ImageItem)
