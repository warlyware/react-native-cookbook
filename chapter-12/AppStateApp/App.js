import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component {
  previousAppState = null;
  currentAppState = 'active';
  state = {
    statusMessage = 'Welcome!'
  }

  componentWillMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange = (appState) => {
    let statusMessage;

    this.previousAppState = this.currentAppState;
    this.currentAppState = appState;
    switch(appState) {
      case 'inactive':
        statusMessage = "Good Bye.";
        break;
      case 'background':
        statusMessage = "App Is Hidden...";
        break;
      case 'active':
        statusMessage = 'Welcome Back!'
        break;
    }
    this.setState({ statusMessage });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.appStatus}
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
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
