import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Asset } from 'expo';

const localImage = require('./assets/images/magic.gif');

export default class App extends React.Component {
  state = {
    assetsLoaded: false
  }

  componentWillMount() {
    Asset.fromModule(localImage).downloadAsync();
    this.setState({ assetsLoaded: true });
  }

  render() {
    if (!this.state.assetsLoaded) {
      return(
        <View style={styles.container}></View>
      )
    }

    return (
      <View style={styles.container}>
        <Image source={require('./assets/images/magic.gif')}/>
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
