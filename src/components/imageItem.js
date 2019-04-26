import React from 'react'
import { StyleSheet, Image, Text } from 'react-native'

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

const ImageItem = previewURL => {
  console.log(previewURL)
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: `${previewURL}` }}
    />
  )
}

export default ImageItem
