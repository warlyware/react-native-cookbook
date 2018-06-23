import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  Switch
} from 'react-native';
import Button from 'react-native-button';

const HelloManager = NativeModules.HelloManager;

export default class App extends Component {
  state = {
    greetingMessage: null,
    userName: null,
    isAdmin: false
  }

  greetUser = () => {
    HelloManager.greetUser(
      this.state.userName,
      this.state.isAdmin,
      this.displayResults
    );
  }

  displayResults = (results) => {
    this.refs.userName.blur();
    this.setState({ greetingMessage: results });
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
          onChangeText={(text) => this.setState({ userName: text })}
        />
        <Text style={styles.label}>
          Admin
        </Text>
        <Switch style={styles.radio}
          value={this.state.isAdmin}
          onValueChange={(value) =>
            this.setState({ isAdmin: value })
          }
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
    fontSize: 30
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
