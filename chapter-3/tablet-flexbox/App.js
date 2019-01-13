import React, { Component } from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';

import Post from './Post';
import data from './data.json';

const dataSouce = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
});

export default class App extends Component {
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
  container: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#34495e',
    padding: 10,
    paddingTop: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    backgroundColor: '#f0f3f4',
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});