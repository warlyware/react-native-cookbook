import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { Permissions, Notifications } from 'expo';

const PUSH_REGISTRATION_ENDPOINT = 'http://51d1c2e3.ngrok.io/token';
const MESSAGE_ENPOINT = 'http://51d1c2e3.ngrok.io/message';

export default class App extends React.Component {
  state = {
    notification: null,
    messageText: 'asdf'
  }

  handleNotification = (notification) => {
    console.log('notification recieved!', notification);
    this.setState({ notification });
  }

  handleChangeText = (text) => {
    this.setState({ messageText: text });
  }

  sendMessage = async () => {
    console.log('sending', MESSAGE_ENPOINT);

    fetch(MESSAGE_ENPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'yourValue',
      }),
    });
  }

  registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    console.log(`token is: ${token}`);
    return fetch(PUSH_REGISTRATION_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
        user: {
          username: 'warly',
          name: 'Dan Ward'
        },
      }),
    });

    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.messageText}
          onChangeText={this.handleChangeText}
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.sendMessage}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
          {this.state.notification ?
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>Origin: {this.state.notification.origin}</Text>
              <Text>Data: {JSON.stringify(this.state.notification.data)}</Text>
            </View>
          : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#474747',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    width: 300,
    borderColor: '#f6f6f6',
    borderWidth: 1,
    backgroundColor: '#fff',
    padding: 10
  },
  button: {
    padding: 10
  },
  buttonText: {
    fontSize: 18,
    color: '#fff'
  }
});
