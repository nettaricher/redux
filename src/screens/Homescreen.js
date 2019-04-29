import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View, Image } from 'react-native'
import ImagesList from '../components/imagesList'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const cyanColor = 'rgb(97, 149, 200)'
const styles = StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: cyanColor
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: "#393e43"
    },
    container: {
        flex: 1,
        backgroundColor: "#393e43"
    },
    allHeader: {
        flexDirection: "row",
        backgroundColor: "#393e43",
        justifyContent: "center",
        color: "white"
    },
    header: {
        padding: 10,
        fontSize: 36,
        color: "white"

    },
    like: {
        width: 60,
        height: 60
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
            // await AsyncStorage.clear()
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
                        <View style={styles.allHeader}>
                            <Text style={styles.header}>iPhotos</Text>
                            <View style={{ paddingLeft: 80, paddingTop: 5 }}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate("Favorites") }}>
                                    <Image source={require('../../images/emptyLike.png')} style={styles.like} />
                                </TouchableOpacity>
                            </View>
                        </View>
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