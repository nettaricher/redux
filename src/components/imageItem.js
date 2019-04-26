import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    margin: 8
  }
})

const ImageItem = (previewURL, largeImageURL) => {
  setFullScreen = () => {
    console.log("hi")
  }
  return (
    <TouchableOpacity onPress={this.setFullScreen}>
      <Image
        style={styles.item}
        source={{ uri: `${previewURL.previewURL}` }}
      />
    </TouchableOpacity>
  )
}

export default ImageItem
