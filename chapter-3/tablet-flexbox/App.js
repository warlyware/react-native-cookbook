import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

import Post from './Post';
import data from './data.json';

const dataSouce = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class App extends React.Component {
  state = {
    dataSource: dataSouce.cloneWithRows(data.posts),
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <Text style={styles.title}>Latest posts</Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={post => <Post {...post} />}
          style={styles.list}
          contentContainerStyle={styles.content}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // Defined on step 13
});