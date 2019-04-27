import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, Button, ScrollView, TextInput } from 'react-native'
import { SearchBar } from 'react-native-elements';
import ImageItem from './imageItem'
import { fetchData } from '../actions/Actions'
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textInput: {
    height: 44,
    borderWidth: 1
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "center"
  },
  navButton: {
    margin: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    paddingRight: 13,
    fontSize: 20,
    backgroundColor: "#E3E5E7",
    justifyContent: "center"
  }

})

const mapStateToProps = ({ images }) => {
  return {
    images: images.images
  }
}

export class ImagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.eachImage = this.eachImage.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.submitEditing = this.submitEditing.bind(this);
  }

  componentDidMount() {
    this.props.fetchData()
  }
  updateSearch = search => {
    this.setState({ search });
  };
  submitEditing() {
    this.props.fetchData(this.state.search)
  }
  eachImage(item, key) {
    return <ImageItem key={key} previewURL={item.previewURL} largeImageURL={item.largeImageURL} />
  }
  render() {
    const { search } = this.state;
    const { images } = this.props
    return (
      <View>
        <View>
          <SearchBar
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            onSubmitEditing={this.submitEditing}
            value={search}
          />
        </View>
        <View style={styles.navBar}>
          <TouchableOpacity>
            <Text style={styles.navButton}>
              Grid View
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.navButton}>
              List View
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.list}>
            {images.map(this.eachImage)}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default connect(
  mapStateToProps,
  { fetchData }
)(ImagesList)
