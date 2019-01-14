/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NativeModules,
  DeviceEventEmitter
} from 'react-native';

import Button from 'react-native-button';

const MediaManager = NativeModules.MediaManager;

export default class AudioPlayer extends Component {
  componentWillMount() {
    this.setState({
      songPlaying : undefined
    });
    this.subscription = DeviceEventEmitter.addListener('SongPlaying', this.onSongPlaying);
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  onSongPlaying = (params) => {
    const songPlaying = params.songPlaying;

    this.setState({songPlaying});
  }

  onShowSongsPress() {
    MediaManager.showSongs();
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.onShowSongsPress}>
            Pick Song
        </Button>

        <Text style={styles.instructions}>Song Playing:</Text>
        <Text style={styles.welcome}>{this.state.songPlaying}</Text>
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
    backgroundColor: '#FF5722'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  }
});