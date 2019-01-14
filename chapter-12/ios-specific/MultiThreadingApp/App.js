import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';
import Button from 'react-native-button';

const BackgroundTaskManager = NativeModules.BackgroundTaskManager;

export default class App extends Component {
  state = {
    backgroundTaskStatus: 'Not Started',
    counter: 0
  }

  componentWillMount = () => {
    this.subscription = NativeAppEventEmitter.addListener(
      'backgroundProgress',
      event => this.setState({ backgroundTaskStatus: event.status })
    );
  }

  componentWillUnmount = () => {
    this.subscription.remove();
  }

  runBackgroundTask = () => {
    BackgroundTaskManager.loadInBackground();
  }

  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.runBackgroundTask}>
            Run Task
        </Button>
        <Text style={styles.instructions}>
          Background Task Status:
        </Text>
        <Text style={styles.welcome}>
          {this.state.backgroundTaskStatus}
        </Text>
        <Text style={styles.instructions}>
          Pressing "Increase Conter" button shows that the task is not blocking the main thread
        </Text>
        <Button
          containerStyle={[
            styles.buttonContainer,
            styles.altButtonContainer
          ]}
          style={styles.buttonStyle}
          onPress={this.increaseCounter}
        >
            Increase Counter
        </Button>
        <Text style={styles.instructions}>
          Current Count:
        </Text>
        <Text style={styles.welcome}>
          {this.state.counter}
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
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20
  },
  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  altButtonContainer : {
    backgroundColor : '#CDDC39',
    marginTop : 30
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  }
});