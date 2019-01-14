import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  DeviceEventEmitter,
  Image
} from 'react-native';

export default class App extends Component {
  state = {
    showMask: false
  }

  componentWillMount() {
    this.subscription = DeviceEventEmitter.addListener(
      'focusChange',
      this.onFocusChange
    );
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  onFocusChange = (params) => {
    this.setState({showMask: !params.appHasFocus})
  }

  render() {
    if(this.state.showMask) {
      return (<Image source={require('./assets/hidden.jpg')} />);
    }
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
