/** @format */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';

export class Invoked extends Component {
  componentWillMount() {
    this.setState({
      status: 'App Running'
    });
    Linking.addEventListener('url', this.onAppInvoked);
  }
  componentWillUnmount() {
   Linking.removeEventListener('url', this.onAppInvoked); 
  }
  onAppInvoked = (event) => {
    this.setState({
      status: `App Invoked by ${event.url}`
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          App Status:
        </Text>
        <Text style={styles.welcome}>
          {this.state.status}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Invoked', () => Invoked);
