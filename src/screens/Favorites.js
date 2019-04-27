import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux'
import { asyncStorageToState } from '../actions/Actions'

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

const mapStateToProps = ({ favorites, images }) => {
    return {
        favorites: favorites,
        fullSize: images.fullSizeURL
    }
}

class Favorites extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
        this.eachImage = this.eachImage.bind(this)
    }

    componentDidMount() { }

    eachImage(item, key) {
        return <ImageItem key={key} previewURL={item.previewURL} largeImageURL={item.largeImageURL} />
    }
    render() {
        const { fullSize, navigation } = this.props
        console.log("favorites --- " + favorites)
        if (fullSize !== '' && fullSize !== undefined && fullSize !== null) {
            console.log("navigate to full")
            this.props.navigation.navigate("FullScreen");
        }

        return (
            <Fragment>
                <SafeAreaView style={styles.safeAreaTop} />
                <SafeAreaView style={styles.safeAreaBottom}>
                    <View style={styles.container}>
                        <Text style={styles.header}>Favorites</Text>
                        <ScrollView>
                            <View style={styles.gridView}>
                                {images.map(this.eachImage)}
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, { asyncStorageToState })(Favorites)