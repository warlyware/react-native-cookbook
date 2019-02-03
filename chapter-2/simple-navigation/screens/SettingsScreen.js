import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Settings
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
    backgroundColor: '#F0642E',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  }
});