import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Device from './utils/Device';
import UserList from './UserList';
import UserDetail from './UserDetail';

import data from './data.json';

export default class App extends Component {
  renderMaster() {
    return (
      <UserList contacts={data.results} />
    );
  }

  renderDetail() {
    if (Device.isTablet()) {
      return (
        <UserDetail contact={data.results[0]} />
      );
    }
  }

  render() {
    return (
      <View style={styles.content}>
        {this.renderMaster()}
        {this.renderDetail()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
  },
});