import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainApp extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});