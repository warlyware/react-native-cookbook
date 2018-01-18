import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>

        </View>
        <View style={styles.middleSection}>

        </View>
        <View style={styles.bottomSection}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0,
    flexGrow: 3,
    backgroundColor: '#f00'
  },
  middleSection: {
    flex: 0,
    flexGrow: 1,
    backgroundColor: '#fff'
  },
  bottomSection: {
    flex: 0,
    flexGrow: 3,
    backgroundColor: 'green'
  }
});
