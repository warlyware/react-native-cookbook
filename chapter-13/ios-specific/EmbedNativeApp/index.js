import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';

class EmbedNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello from React Native</Text>
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

AppRegistry.registerComponent('EmbedNativeApp', () => EmbedNativeApp);
