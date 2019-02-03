import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Home
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#608FA0',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  }
});