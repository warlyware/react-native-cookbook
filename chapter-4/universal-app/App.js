import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dimensions from './utils/Dimensions';
import UserDetail from './UserDetail'

import UserList from './UserList'
import data from './data.json';

export default class App extends Component {
  // renderMaster() {
  //   return (
  //     <Text>Render on phone and tablets!!</Text>
  //   );
  // }

  renderMaster() {
    return (
      <UserList contacts={data.results} />
    );
  }

  renderDetail() {
    if (Dimensions.isTablet()) {
      return (
        <UserDetail contact={data.results[0]} />
      );
    }
  }

  // renderDetail() {
  //   if (Dimensions.isTablet()) {
  //     return (
  //       <Text>Render on tablets only!!</Text>
  //     );
  //   }
  // }

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
    paddingTop: 50,
    flex: 1,
    flexDirection: 'row',
  },
});