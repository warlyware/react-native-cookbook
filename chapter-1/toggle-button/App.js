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

  onClick = () => {
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
