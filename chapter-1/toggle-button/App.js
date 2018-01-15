import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const heartIcon = require('./images/heart.png');

export default class App extends React.Component {
  state = {
    liked: false,
  };

  handleClick = () => {
    // We will define the content on step 6
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn}
          underlayColor="#fefefe"
        >
          <Image
            source={heartIcon}
            style={styles.icon}
          />
        </TouchableHighlight>
        <Text style={styles.text}>Do you like this app?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center',
  },
  btn: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#f1f1f1',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
  },
});
