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
  TouchableOpacity,
  Linking
} from 'react-native';

export class InvokeExternal extends Component {
  openExternalApp(url) {
    Linking.openURL(url).catch(err => console.error('error opening external link', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.openExternalApp('invoked://')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Open Invoked App</Text>
          </View>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#607D8B',
    width: 150,
    padding: 15,
    margin: 20,
    height: 50
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
});

AppRegistry.registerComponent('InvokedExternal', () => InvokeExternal);
