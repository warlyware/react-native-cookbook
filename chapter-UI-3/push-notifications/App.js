import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Permissions, Notifications } from 'expo';

const PUSH_ENDPOINT = 'https://your-server.com/users/push-token';

export default class App extends React.Component {
  registerForPushNotificationsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
        user: {
          username: 'Warly',
          name: 'Dan Ward'
        },
      }),
    });
  }

  componentDidMount() {
    this.registerForPushNotificationsAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
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
