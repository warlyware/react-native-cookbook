import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ApplicationState extends Component {
  previousAppState = null;
  currentAppState = null;

  onAppStateChange = (appState) => {
    let appStatus;

    this.previousAppState = this.currentAppState;
    this.currentAppState = appState;
    switch(appState) {
      case 'inactive':
        appStatus = "Good Bye";
        break;
      case 'background':
        appStatus = "I'm Hidden";
        break;
      case 'active':
        appStatus = 'Welcome Back!'
        break;
    }
    this.setState({ appStatus });
  }

  componentWillMount() {
    this.currentAppState = 'active';
    this.setState({
      appStatus: 'Welcome!'
    });
    AppState.addEventListener('change', this.onAppStateChange);
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
    backgroundColor: '#F5FCFF',
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
