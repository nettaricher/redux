import React from 'react'
import { StyleSheet, Image } from 'react-native'

const styles = StyleSheet.create({
    item: {
        width: 100,
        height: 100,
        margin: 8
    }
})

const ImageItem = () => {
    const { navigation } = this.props
    return (
        <Image
            style={styles.item}
            source={{ uri: `${navigation.getParam(largeImageURL)}` }}
        />
    )
}

export default ImageItem
