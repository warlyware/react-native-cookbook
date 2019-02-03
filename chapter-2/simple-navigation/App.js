import React from 'react';
import { StyleSheet, View } from 'react-native';

import MainTabNavigator from './navigation/MainTabNavigator';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainTabNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});