import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SearchBar, ButtonGroup } from 'react-native-elements';
import ImageItem from './imageItem'
import ImageItemList from './imageItemList'
import { fetchData } from '../actions/Actions'


const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  list: {
    flex: 1,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  textInput: {
    height: 44,
    borderWidth: 1
  },
  // navBar: {
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   backgroundColor: "red"
  // },
  navButton: {
    // margin: 5,
    // paddingTop: 3,
    paddingBottom: 10,
    margin: 0,
    // paddingLeft: 13,
    // paddingRight: 13,
    fontSize: 20,
    textAlign: "center",
    backgroundColor: "#E3E5E7",
    // justifyContent: "center",
  },
  navButtonPressed: {
    margin: 5,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 13,
    paddingRight: 13,
    fontSize: 20,
    backgroundColor: "pink",
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
      search: '',
      gridView: true,
      selectedIndex: 0
    };
    this.eachImage = this.eachImage.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.submitEditing = this.submitEditing.bind(this);
    this.eachImageList = this.eachImageList.bind(this);
    this.updateIndex = this.updateIndex.bind(this);
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
  eachImageList(item, key) {
    return <ImageItemList
      key={key}
      previewURL={item.previewURL}
      largeImageURL={item.largeImageURL}
      views={item.views}
      likes={item.likes}
      tags={item.tags}
    />
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex })

  }
  render() {
    const { search, selectedIndex } = this.state;
    const { images } = this.props;
    const buttons = ['Grid View', 'List View']

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

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          textStyle={{ fontSize: 15 }}
        />
        <ScrollView>
          <View style={this.state.selectedIndex ? styles.list : styles.grid}>
            {images.map(this.state.selectedIndex ? this.eachImageList : this.eachImage)}
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
