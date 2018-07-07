import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Button from 'react-native-button';

import TouchID from 'react-native-touch-id';

export default class App extends Component {
  state = {
    authStatus: null
  }

  onButtonPress = () => {
    TouchID.authenticate('React Native Cookbook')
      .then(this.handleAuthSuccess)
      .catch(this.handleAuthFailure);
  }

  handleAuthSuccess = () => {
    this.setState({
      authStatus : 'Authenticated'
    });
  }

  handleAuthFailure = () => {
    this.setState({
      authStatus : 'Not Authenticated'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.button}
          onPress={this.onButtonPress}>
            Authenticate
        </Button>
        <Text style={styles.instructions}>Authentication Status</Text>
        <Text style={styles.welcome}>{this.state.authStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  button: {
    fontSize: 16,
    color: 'white'
  }
});
