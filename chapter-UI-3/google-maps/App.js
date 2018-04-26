import React from 'react';
import { Permissions } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  loadMap() {

  }

  async componentDidMount() {
    const permission = await Permissions.askAsync(Permissions.LOCATION);
    if (permission.status === 'granted') {
      this.loadMap();
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.</Text>
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
});
