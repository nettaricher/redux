import React, { Component } from 'react'
import { StyleSheet, View, Button, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { cleanFullSizeURL } from '../actions/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import { asyncStorageToState } from '../actions/Actions'

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
    },
    fullImage: {
        width: Dimensions.get('window').width,
        height: '70%',
        marginTop: "10%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    like: {
        width: 60,
        height: 60,
    }
});

const mapStateToProps = ({ images }) => {
    return {
        fullSize: images.fullSizeURL,
        preview: images.previewURL,
    }
}

class FullScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imageURL: props.fullSize
        }
    }
    componentDidMount() {
        this.props.asyncStorageToState()
    }

    handleReturn = () => {
        this.props.cleanFullSizeURL();
        this.props.navigation.navigate("HomeScreen");
    }
    storeFavoriteImage = async () => {
        try {
            const prevState = await AsyncStorage.getItem('favorites')
            let nextState
            if (!prevState)
                nextState = []
            else
                nextState = JSON.parse(prevState)
            nextState.push({
                fullsize: this.props.fullSize,
                preview: this.props.preview
            })
            console.log(nextState)
            await AsyncStorage.setItem('favorites', JSON.stringify(nextState))
            console.log("++++++LIKED++++++")

        } catch (e) {
            console.log("[Fullscreen] : storeFavoriteImage > " + e)
        }
    }

    render() {
        const { imageURL } = this.state
        return (
            <View>
                <View>
                    <Image
                        source={{ uri: `${imageURL}` }}
                        style={styles.fullImage}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <TouchableOpacity onPress={this.storeFavoriteImage}>
                        <Image
                            source={require('../../images/emptyLike.png')}
                            style={styles.like}
                        />
                    </TouchableOpacity>
                    <Button
                        onPress={this.handleReturn}
                        title="Go Back"
                        color="#841584"
                        accessibilityLabel="Return to home page"
                    />
                </View>
            </View >
        )
    }
}

export default connect(mapStateToProps, { cleanFullSizeURL, asyncStorageToState })(FullScreen)
