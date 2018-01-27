import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Font } from 'expo';

export default class App extends React.Component {

  componentDidMount() {
    Font.loadAsync({
      'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.roboto}>
          Hello, Roboto!
        </Text>
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
  roboto: {
    fontSize: 40,
    fontFamily: 'roboto-regular'
  }
});
