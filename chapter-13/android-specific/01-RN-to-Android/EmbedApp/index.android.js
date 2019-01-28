/** @format */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class EmbedApp extends Component<{}> {
    render() {
      return (
        <View style={styles.container}>
          <Text>Hello in React Native</Text>
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
    }
});

AppRegistry.registerComponent('EmbedApp', () => EmbedApp);
