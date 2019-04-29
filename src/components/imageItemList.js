import React, { Component } from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux'
import { storeURL } from '../actions/Actions'

const styles = StyleSheet.create({
    item: {
        width: 100,
        height: 100,
        margin: 8
    },
    details: {
        margin: 15
    },
    tags: {
        fontSize: 17,
        paddingBottom: 10,
        fontWeight: "bold",
        color: "white"
    }
})

class ImageItem extends Component {
    constructor(props) {
        super(props);
        this.setFullScreen = this.setFullScreen.bind(this);
    }

    setFullScreen() {
        console.log("setFullScreen = " + this.props.largeImageURL)
        this.props.storeURL(this.props.previewURL, this.props.largeImageURL)
    }

    render() {
        return (
            <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={this.setFullScreen}>
                    <Image
                        style={styles.item}
                        source={{ uri: `${this.props.previewURL}` }}
                    />
                </TouchableOpacity>
                <View style={styles.details}>
                    <Text style={styles.tags}>{this.props.tags}</Text>
                    <View style={{ flexDirection: "row", fontSize: 10 }}>
                        <Text style={{ marginRight: 7, color: "white" }}>Views: {this.props.views}</Text>
                        <Text style={{ color: "white" }}>Likes: {this.props.likes}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(
    null,
    { storeURL }
)(ImageItem)
