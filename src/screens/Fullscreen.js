import React from 'react'
import { StyleSheet, View, Button, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { cleanFullSizeURL } from '../actions/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

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
        preview: images.previewURL
    }
}

const FullScreen = (props) => {
    handleReturn = () => {
        props.cleanFullSizeURL();
        props.navigation.navigate("HomeScreen");
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
                fullsize: props.fullSize,
                preview: props.preview
            })

            await AsyncStorage.setItem('favorites', JSON.stringify(nextState))
            console.log("++++++LIKED++++++")
            this.handleReturn()

        } catch (e) {
            console.log("Fullscreen - storeFavoriteImage > " + e)
        }
    }
    return (
        <View>
            <View>
                <Image
                    source={{ uri: `${props.fullSize}` }}
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
        </View>
    )
}

export default connect(mapStateToProps, { cleanFullSizeURL })(FullScreen)
