import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  Switch,
  DeviceEventEmitter
} from 'react-native';
import Button from 'react-native-button';

const { HelloManager } = NativeModules;

export default class App extends Component {
  state = {
    userName: null,
    greetingMessage: null,
    isAdmin: false
  }

  updateGreetingMessage = (result) => {
    this.setState({ greetingMessage: result });
  }

  greetUser = () => {
    this.refs.userName.blur();
    HelloManager.greetUser(
      this.state.userName,
      this.state.isAdmin,
      this.updateGreetingMessage
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Enter User Name
        </Text>
        <TextInput
          ref="userName"
          autoCorrect={false}
          style={styles.inputField}
          placeholder="User Name"
          onChangeText={(text) => this.setState({ userName: text }) }
        />
        <Text style={styles.label}>
          Admin
        </Text>
        <Switch
          style={styles.radio}
          onValueChange={
            value => this.setState({ isAdmin: value })
          }
          value={this.state.isAdmin}
        />
       <Button
          disabled={!this.state.userName}
          style={[
            styles.buttonStyle,
            !this.state.userName ? styles.disabled : null
          ]}
          onPress={this.greetUser}
        >
          Greet
        </Button>
        <Text style={styles.label}>
          Response:
        </Text>
        <Text style={styles.message}>
          {this.state.greetingMessage}
        </Text>
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
  inputField:{
    padding: 20,
    fontSize: 30,
    width: 200
  },
  label: {
    fontSize: 18,
    marginTop: 18,
    textAlign: 'center',
  },
  radio: {
    marginBottom: 20
  },
  buttonStyle: {
    padding: 20,
    backgroundColor: '#1DA1F2',
    color: '#fff',
    fontSize: 18
  },
  message: {
    fontSize: 22,
    marginLeft: 50,
    marginRight: 50,
  },
  disabled: {
    backgroundColor: '#3C3C3C'
  }
});