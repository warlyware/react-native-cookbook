import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  NativeAppEventEmitter
} from 'react-native';
import Button from 'react-native-button';

const MediaManager = NativeModules.MediaManager;

export default class App extends Component {
  state = {
    currentSong: null
  }

  componentWillMount() {
    this.subscription = NativeAppEventEmitter.addListener(
      'SongPlaying',
      this.updateCurrentlyPlaying
    );
  }

  componentWillUnmount = () => {
    this.subscription.remove();
  }

  updateCurrentlyPlaying = (currentSong) => {
    this.setState({ currentSong });
  }

  showSongs() {
    MediaManager.showSongs();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.showSongs}>
            Pick Song
        </Button>

        <Text style={styles.instructions}>Song Playing:</Text>
        <Text style={styles.welcome}>{this.state.currentSong}</Text>
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
  },
  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#3B5998'
  },
  buttonStyle: {
    fontSize: 16,
    color: '#fff'
  }
});