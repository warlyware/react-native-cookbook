import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

const imageSearchTerms = [
  'Books',
  'Code',
  'Nature',
  'Cats',
];

export default class App extends React.Component {
  state = {
    showCarousel: false
  }

  showCarousel = () => {
    this.setState({ showCarousel: true });
  }

  renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={{ uri: `https://source.unsplash.com/350x350/?${item}`
        }}/>
        <Text style={styles.label}>{item}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.showCarousel ?
          <Carousel
            layout={'default'}
            data={imageSearchTerms}
            renderItem={this.renderItem}
            sliderWidth={350}
            itemWidth={350}
            loop={true}
          >
          </Carousel> :
          <TouchableOpacity
            onPress={this.showCarousel}
            style={styles.button}
          >
            <Text style={styles.label}>Open Carousel</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474747',
    alignItems: 'center',
    justifyContent: 'center',
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
    padding: 20,
    color: '#fff'
  },
  button: {
    padding: 10,
    backgroundColor: '#000'
  }
});
