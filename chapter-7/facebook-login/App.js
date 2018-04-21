import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Expo from 'expo';

export default class App extends React.Component {
  state = {
    loggedIn: false,
    facebookInfo: {},
  }

  logIn = async () => {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('432496933841985', {
      permissions: ['public_profile'],
    });

    if (type === 'success') {
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
      const facebookInfo = await response.json();
      console.log(facebookInfo);
      this.setState({
        facebookInfo,
        loggedIn: true
      });
    }
  }

  renderFacebookUserInfo = () => {
    return this.state.loggedIn ? (
      <View style={styles.facebookUserInfo}>
        <Text style={styles.facebookUserInfoLabel}>Name:</Text>
        <Text style={styles.facebookUserInfoText}>{this.state.facebookInfo.name}</Text>
        <Text style={styles.facebookUserInfoLabel}>Session ID:</Text>
        <Text style={styles.facebookUserInfoText}>{this.state.facebookInfo.id}</Text>
      </View>
    ) : null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Login via Facebook</Text>
        <TouchableOpacity
          onPress={this.logIn}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {this.renderFacebookUserInfo()}
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
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#3B5998'
  },
  buttonText: {
    color: '#fff',
    fontSize: 30
  },
  headerText: {
    fontSize: 30
  },
  facebookUserInfo: {
    paddingTop: 30
  },
  facebookUserInfoText: {
    fontSize: 24
  },
  facebookUserInfoLabel: {
    fontSize: 20,
    marginTop: 10,
    color: '#474747'
  }
});
