import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  NativeAppEventEmitter
} from 'react-native';

class FromNativeToRN extends Component {
  state = {
    userName: ''
  }

  componentWillMount() {
    this.setState({
      userName : this.props.userName
    });

    NativeAppEventEmitter.addListener('UserNameChanged', (body) => {
        this.setState({userName : body.userName});
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.userName}</Text>
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
  }
});

AppRegistry.registerComponent('FromNativeToRN', () => FromNativeToRN);