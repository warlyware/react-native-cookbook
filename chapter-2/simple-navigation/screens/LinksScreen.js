import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>
          Links
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
    backgroundColor: '#F8759D',
  },
  headline: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  }
});