import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { cleanFullSizeURL } from '../actions/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    canvas: {
        width: "100%",
        height: "78%",
        marginTop: "10%"
    },
    like: {
        width: 60,
        height: 60,
    }
});

const mapStateToProps = ({ images }) => {
    console.log(images.fullSizeURL)
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
            console.log("######LIKED#######")
            const prevState = await AsyncStorage.getItem('favorites')
            console.log(prevState)
            let nextState = JSON.parse(prevState)
            nextState.push({
                fullsize: props.fullSize,
                preview: props.preview
            })

            await AsyncStorage.setItem('favorites', JSON.stringify(nextState))
            console.log("######LIKED#######")
            this.handleReturn()

        } catch (e) {
            // saving error
        }
    }
    return (
        <View>
            <View>
                <Image
                    source={{ uri: `${props.fullSize}` }}
                    style={styles.canvas}
                    PlaceholderContent={<ActivityIndicator />}
                />
            </View>
            <View style={{ alignItems: 'center' }}>
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
