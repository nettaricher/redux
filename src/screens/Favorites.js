import React, { Component, Fragment } from 'react'
import { StyleSheet, SafeAreaView, Text, View, ScrollView, Button } from 'react-native'
import { connect } from 'react-redux'
import { asyncStorageToState } from '../actions/Actions'
import ImageItem from '../components/imageItem'

const cyanColor = 'rgb(97, 149, 200)'
const styles = StyleSheet.create({
    safeAreaTop: {
        flex: 0,
        backgroundColor: "#393e43"
    },
    safeAreaBottom: {
        flex: 1,
        backgroundColor: "#393e43"
    },
    container: {
        flex: 1,
        backgroundColor: "#393e43"
    },
    header: {
        backgroundColor: "#393e43",
        padding: 10,
        fontSize: 36,
        textAlign: 'center',
        color: "white"
    },
    gridView: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center"
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
        this.switchToHome = this.switchToHome.bind(this)
    }

    componentDidMount() {
        this.props.asyncStorageToState()
    }
    switchToHome() {
        this.props.navigation.navigate("HomeScreen")
    }
    eachImage(item, key) {
        return <ImageItem key={key} previewURL={item.preview} largeImageURL={item.fullsize} />
    }
    render() {
        const { fullSize, favorites } = this.props
        if (fullSize !== '' && fullSize !== undefined && fullSize !== null) {
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
                                {favorites.map(this.eachImage)}
                            </View>
                        </ScrollView>
                    </View>
                    <Button
                        onPress={this.switchToHome}
                        title="Go Back"
                        color="#393e43"
                        accessibilityLabel="Return to home page"
                    />
                </SafeAreaView>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, { asyncStorageToState })(Favorites)