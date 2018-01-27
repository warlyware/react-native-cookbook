import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'josefin-sans-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.josefineSans}>
                Hello, Josefin Sans!
              </Text>
            ) : null
          }
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
  josefineSans: {
    fontSize: 40,
    fontFamily: 'josefin-sans-regular'
  }
});
