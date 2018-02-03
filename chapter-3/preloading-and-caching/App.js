import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Asset, AppLoading, FileSystem, Video } from 'expo';

const localImage = require('./assets/images/magic.gif');
const remoteImage = 'https://farm5.staticflickr.com/4746/39224828534_cba811ba9c_b.jpg';
let cachedImage;
let cachedVideo;

export default class App extends React.Component {
  state = {
    assetsLoaded: false
  }

  async loadAssets() {
    await Asset.fromModule(localImage).downloadAsync();
    cachedImage = await FileSystem.downloadAsync(
      remoteImage,
      FileSystem.documentDirectory + 'image.jpg'
    );
    console.log(FileSystem.cacheDirectory);
  }

  render() {
    if (!this.state.assetsLoaded) {
      return(
        <AppLoading
          startAsync={ this.loadAssets }
          onFinish={() => this.setState({ assetsLoaded: true })}
          onError={console.warn}
        />
      )
    }

    return (
      <View style={styles.container}>
        <ImageBackground style={[styles.container, { width: '100%', height: '100%' }]}
          source={{ uri: cachedImage.uri }}
        >
          <Image source={localImage}/>
        </ImageBackground>
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
