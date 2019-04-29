import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View, Button } from 'react-native'
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
        fullSize: images.fullSizeURL,
        favorites: images.favorites,
    }
}


class HomeScreen extends Component {
    initFavs = async () => {
        try {
            //await AsyncStorage.clear()
            const prevState = await AsyncStorage.getItem('favorites')
            if (!prevState)
                await AsyncStorage.setItem('favorites', '[]')
        } catch (e) {
            // saving error
        }
    }
    render() {
        this.initFavs()
        const { fullSize, navigation } = this.props
        if (fullSize !== '' && fullSize !== undefined && fullSize !== null) {
            navigation.navigate("FullScreen");
        }
        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaTop} />
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.container}>
                        <Text style={styles.header}>iPhotos</Text>
                        <Button
                            title="Favorites"
                            onPress={() => this.props.navigation.navigate("Favorites")}
                        />
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