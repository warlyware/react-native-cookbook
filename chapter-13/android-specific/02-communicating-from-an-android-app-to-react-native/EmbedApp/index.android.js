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
  View,
  Text,
  NativeAppEventEmitter
} from 'react-native';

export default class EmbedApp extends Component<{}> {
  componentWillMount() {
    this.setState({
      userName : this.props.userName
    });

    NativeAppEventEmitter.addListener('UserNameChanged', (body) => {
        this.setState({userName : body.userName});
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.userName}</Text>
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

AppRegistry.registerComponent('EmbedApp', () => EmbedApp);