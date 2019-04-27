import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import ImagesList from '../components/imagesList'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';

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

const mapStateToProps = ({ images }) => {
    return {
        fullSize: images.fullSizeURL
    }
}
const _retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('test')
        if (value !== null) {
            console.log(value)
        }
    } catch (e) {
        // error reading value
    }
};

class HomeScreen extends Component {

    render() {
        const { fullSize, navigation } = this.props
        console.log("homescreen --- " + fullSize)
        if (fullSize !== '' && fullSize !== undefined && fullSize !== null) {
            console.log("navigate to full")
            this.props.navigation.navigate("FullScreen");
        }
        _retrieveData()
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaTop} />
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.container}>
                        <Text style={styles.header}>iPhotos</Text>
                        <ImagesList />
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default connect(
    mapStateToProps
)(HomeScreen)