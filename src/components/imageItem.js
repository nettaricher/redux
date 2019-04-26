import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    margin: 8
  }
})

const ImageItem = (previewURL, largeImageURL) => {
  return (
    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('FullScreen', {
      largeImageURL: largeImageURL
    })}>
      <Image
        style={styles.item}
        source={{ uri: `${previewURL.previewURL}` }}
      />
    </TouchableWithoutFeedback>
  )
}

export default ImageItem
