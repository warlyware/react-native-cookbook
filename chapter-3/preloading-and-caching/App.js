import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Asset, AppLoading } from 'expo';

const localImage = require('./assets/images/magic.gif');
const remoteImage = 'https://farm5.staticflickr.com/4746/39224828534_cba811ba9c_b.jpg';

export default class App extends React.Component {
  state = {
    assetsLoaded: false
  }

  async loadAssets() {
    await Image.prefetch(remoteImage);
    await Asset.fromModule(localImage).downloadAsync();
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
          source={{ uri: remoteImage }}
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
