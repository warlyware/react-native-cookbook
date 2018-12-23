import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import Notification from './Notification';

export default class App extends Component {

  state = {
    notify: false,
    message: 'This is a notification!',
  };

  toggleNotification = () => {
    this.setState({
      notify: !this.state.notify,
    });
  }

  render() {
    const notify = this.state.notify
      ? <Notification
          autoHide
          message={this.state.message}
          onClose={this.toggleNotification}
        />
    : null;
    return (
      <SafeAreaView>
        <Text style={styles.toolbar}>Main toolbar</Text>
        <View style={styles.content}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna.
          </Text>
          <TouchableOpacity
            onPress={this.toggleNotification}
            style={styles.btn}
          >
            <Text style={styles.text}>Show notification</Text>
          </TouchableOpacity>
          <Text>
            Sed ut perspiciatis unde omnis iste natus error sit
            accusantium doloremque laudantium.
          </Text>
          {notify}
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#8e44ad',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    overflow: 'hidden',
  },
  btn: {
    margin: 10,
    backgroundColor: '#9b59b6',
    borderRadius: 3,
    padding: 10,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
  },
});