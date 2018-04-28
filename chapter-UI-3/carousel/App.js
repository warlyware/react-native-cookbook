import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const imageUrls = [
  'https://source.unsplash.com/350x350/?books',
  'https://source.unsplash.com/350x350/?code',
  'https://source.unsplash.com/350x350/?nature',
  'https://source.unsplash.com/350x350/?cats',
];

export default class App extends React.Component {

  renderImages = () => {
    return imageUrls.map((imageUrl, index) => {
      return <Image
        source={{ uri: imageUrl }}
        key ={index}
        style={{ width:350, height: 350 }}
      />
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.renderImages()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
