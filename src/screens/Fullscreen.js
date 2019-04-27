import React from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import { cleanFullSizeURL } from '../actions/Actions'

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    canvas: {
        width: "100%",
        height: "80%"
    },
});

const mapStateToProps = ({ images }) => {
    return {
        fullSize: images.fullSizeURL
    }
}

const FullScreen = (props) => {
    handleReturn = () => {
        props.cleanFullSizeURL();
        props.navigation.navigate("HomeScreen");
    }
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: `${props.fullSize}` }}
                style={styles.canvas}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Button
                onPress={this.handleReturn}
                title="Go Back"
                color="#841584"
                accessibilityLabel="Return to home page"
            />
        </View>
    )
}

export default connect(mapStateToProps, { cleanFullSizeURL })(FullScreen)
