import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import ImagesList from './src/components/imagesList'

const cyanColor = 'rgb(97, 149, 200)'
const styles = StyleSheet.create({
  safeAreaTop: {
    flex: 0,
    backgroundColor: cyanColor
  },
  safeAreaBottom: {
    flex: 1,
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: cyanColor,
    padding: 10,
    fontSize: 36,
    textAlign: 'center'
  }
})

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <SafeAreaView style={styles.safeAreaTop} />
        <SafeAreaView style={styles.safeAreaBottom}>
          <View style={styles.container}>
            <Text style={styles.header}>Album</Text>
            <ImagesList />
          </View>
        </SafeAreaView>
      </Fragment>
    )
  }
}