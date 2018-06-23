import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TextInput,
  Switch,
  DeviceEventEmitter,
  TouchableWithoutFeedback
} from 'react-native';

import Button from 'react-native-button';

const {
  HelloManager
} = NativeModules;

export default class App extends Component {
  componentWillMount() {
    this.subscription = DeviceEventEmitter.addListener('GreetingResponse', (response) => {
      this.displayResult(response.greeting);
    });

    this.setState({
      greetingMessage: undefined
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  displayResult = (result) => {
    this.refs.userName.blur();
    this.setState({ greetingMessage: result });
  }

  onBackgroundPress = () => {
    this.refs.userName.blur();
  }

  greetUserCallback = () => {
    const state = this.state;
    HelloManager.greetUser(state.userName, state.isAdmin, this.displayResult);
  }

  greetUserPromise = () => {
    const state = this.state;
    const promise = HelloManager.greetUserWithPromises(state.userName, state.isAdmin);
    promise.then(this.displayResult);
  }

  greetUserEvent = () => {
    const state = this.state;
    HelloManager.greetUserWithEvent(state.userName, !!state.isAdmin);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onBackgroundPress}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Android Native Modules</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              ref="userName"
              autoCorrect={false}
              style={styles.inputField}
              placeholder="User Name"
              onChangeText={(text) => this.setState({ userName: text }) }
            />
            <Text style={styles.label}>Admin</Text>
            <Switch style={styles.radio} onValueChange={(value) => this.setState({ isAdmin: value }) } value={this.state.isAdmin}/>
          </View>
          <View style={styles.flexContainer}>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.buttonStyle}
              onPress={this.greetUserCallback}>
              Greet (callback)
            </Button>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.buttonStyle}
              onPress={this.greetUserPromise}>
              Greet (promise)
            </Button>
            <Button
              containerStyle={styles.buttonContainer}
              style={styles.buttonStyle}
              onPress={this.greetUserEvent}>
              Greet (events)
            </Button>
          </View>
          <View style={styles.flexContainer}>
            <Text>Response: </Text>
            <Text>{this.state.greetingMessage}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
