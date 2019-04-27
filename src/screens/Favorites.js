import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView } from 'react-native'
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

const mapStateToProps = ({ images }) => {
    return {
        favorites: images.favorites,
        fullSize: images.fullSize
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

    componentDidMount() {
        console.log("hihihihihi")
        this.props.asyncStorageToState()
    }

    eachImage(item, key) {
        return <ImageItem key={key} previewURL={item.preview} largeImageURL={item.fullsize} />
    }
    render() {
        console.log(this.props)
        const { fullSize, favorites } = this.props
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
                                {console.log(favorites)}
                            </View>
                        </ScrollView>
                    </View>
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, { asyncStorageToState })(Favorites)