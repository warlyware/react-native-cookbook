import React from 'react';
import { Audio } from 'expo';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const playlist = [
  {
    title: 'People Watching',
    artist: 'Keller Williams',
    album: 'Keller Williams Live at The Westcott Theater on 2012-09-22',
    uri: 'https://ia800308.us.archive.org/7/items/kwilliams2012-09-22.at853.flac16/kwilliams2012-09-22at853.t16.mp3'
  },
  {
   title: 'Hunted By A Freak',
   artist: 'Mogwai',
   album: 'Mogwai Live at Ancienne Belgique on 2017-10-20',
   uri: 'https://ia601509.us.archive.org/17/items/mogwai2017-10-20.brussels.fm/Mogwai2017-10-20Brussels-07.mp3'
  },
  {
    title: 'Nervous Tic Motion of the Head to the Left',
    artist: 'Andrew Bird',
    album: 'Andrew Bird Live at Rio Theater on 2011-01-28',
    uri: 'https://ia800503.us.archive.org/8/items/andrewbird2011-01-28.early.dr7.flac16/andrewbird2011-01-28.early.t07.mp3'
  }
];

export default class App extends React.Component {
  state = {
    playing: false,
    playbackInstance: null,
    volume: 1.0,
    currentTrackIndex: 0,
    isBuffering: false,
  }

	componentDidMount() {
		Audio.setAudioModeAsync({
			allowsRecordingIOS: false,
			interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
			playsInSilentModeIOS: true,
			shouldDuckAndroid: true,
			interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });
    this.loadAudio();
  }

  handlePlayPause = async () => {
    const { playing, playbackInstance } = this.state;
    playing ? await playbackInstance.pauseAsync() : await playbackInstance.playAsync();
    this.setState({
      playing: !playing
    });
  }

  handlePreviousTrack = async () => {
    let { playbackInstance, currentTrackIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentTrackIndex < playlist.length - 1 ? currentTrackIndex += 1 : currentTrackIndex = 0;
      this.setState({
        currentTrackIndex
      });
      this.loadAudio();
    }
  }

  handleNextTrack = async () => {
    let { playbackInstance, currentTrackIndex } = this.state;
    if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentTrackIndex < playlist.length - 1 ? currentTrackIndex += 1 : currentTrackIndex = 0;
      this.setState({
        currentTrackIndex
      });
      this.loadAudio();
    }
  }

  onPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering
    });
    console.log('onPlaybackStatusUpdate called', status.isLoaded, this.state.isLoaded);
  }

  async loadAudio() {
    const playbackInstance = new Expo.Audio.Sound();
    const source = {
      uri: playlist[this.state.currentTrackIndex].uri
    }
		const status = {
			shouldPlay: this.state.playing,
			volume: this.state.volume,
    };
    playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
    await playbackInstance.loadAsync(source, status, false);
    this.setState({
      playbackInstance
    });
  }

  renderSongInfo() {
    const { playbackInstance, currentTrackIndex } = this.state;
    return playbackInstance ?
    <View>
      <Text>{playlist[currentTrackIndex].title}</Text>
      <Text>{playlist[currentTrackIndex].artist}</Text>
      <Text>{playlist[currentTrackIndex].album}</Text>
    </View>
    : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.isBuffering ? 'Buffering...' : null}</Text>
        {this.renderSongInfo()}
        <TouchableOpacity
          onPress={this.handlePreviousTrack}
        >
          <Text>Previous Track</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handlePlayPause}
        >
          <Text>Play/Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleNextTrack}
        >
          <Text>Next Track</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
