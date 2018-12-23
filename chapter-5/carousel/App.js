import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Picker,
  Dimensions,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default class App extends Component {
  state = {
    showCarousel: false,
    layoutType: 'default',
    imageSearchTerms: [
      'Books',
      'Code',
      'Nature',
      'Cats',
    ]
  }

  updateLayoutType = (layoutType) => {
    this.setState({
      layoutType
    });
  }

  toggleCarousel = () => {
    this.setState({
      showCarousel: !this.state.showCarousel
    });
  }

  renderControls = () => {
    return(
      <View style={styles.container}>
        <Picker
          selectedValue={this.state.layoutType}
          style={styles.picker}
          onValueChange={this.updateLayoutType}
        >
          <Picker.Item label="Default" value="default" />
          <Picker.Item label="Tinder" value="tinder" />
          <Picker.Item label="Stack" value="stack" />
        </Picker>
        <TouchableOpacity
          onPress={this.toggleCarousel}
          style={styles.openButton}
        >
          <Text style={styles.openButtonText}>Open Carousel</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderCarousel = () => {
    return(
      <View style={styles.carouselContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            onPress={this.toggleCarousel}
            style={styles.button}
          >
            <Text style={styles.label}>x</Text>
          </TouchableOpacity>
        </View>
        <Carousel
          layout={this.state.layoutType}
          data={this.state.imageSearchTerms}
          renderItem={this.renderItem}
          sliderWidth={350}
          itemWidth={350}
        >
        </Carousel>
      </View>
    );
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={{ uri: `https://source.unsplash.com/350x350/?${item}`}}
        />
        <Text style={styles.label}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.showCarousel ?
          this.renderCarousel() :
          this.renderControls()
        }
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#474747'
  },
  closeButtonContainer: {
    width: 350,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width:350,
    height: 350,
  },
  label: {
    fontSize: 30,
    padding: 40,
    color: '#fff',
    backgroundColor: '#474747'
  },
  openButton: {
    padding: 10,
    backgroundColor: '#000'
  },
  openButtonText: {
    fontSize: 20,
    padding: 20,
    color: '#fff',
  },
  closeButton: {
    padding: 10
  },
  picker: {
    height: 150,
    width: 100,
    backgroundColor: '#fff'
  }
});
