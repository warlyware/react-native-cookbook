import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  NativeModules
} from 'react-native';

class FromRNToNative extends Component {
  state = {
    userName: ''
  }

  onUserNameChange = (userName) => {
    this.setState({userName});
    NativeModules.UserNameManager.setUserName(userName);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Enter User Name</Text>
        <TextInput
          style={styles.userNameField}
          onChangeText={this.onUserNameChange}
          value={this.state.userName}
        />
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
  userNameField: {
    backgroundColor: 'white',
    height: 40,
    width: 100,
    margin: 25
  },
});

AppRegistry.registerComponent('FromRNToNative', () => FromRNToNative);