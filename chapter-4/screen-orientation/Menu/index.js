import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default class Menu extends Component {
  state = {
    options: [
      {title: 'Dashboard', icon: 'dashboard'},
      {title: 'Inbox', icon: 'inbox'},
      {title: 'Graphs', icon: 'pie-chart'},
      {title: 'Search', icon: 'search'},
      {title: 'Settings', icon: 'gear'},
    ],
  };

  renderOption = (option, index) => {
    const isLandscape = this.props.orientation === 'Landscape';
    const title = isLandscape
      ? <Text style={styles.title}>{option.title}</Text>
      : null;
    const iconSize = isLandscape ? 27 : 35;

    return (
      <View key={index} style={[styles.option, styles.landscape]}>
        <FontAwesome name={option.icon} size={iconSize} color="#fff" />
        {title}
      </View>
    );
  }

  render() {
    return (
      <View style={styles.content}>
        {this.state.options.map(this.renderOption)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#34495e',
    paddingTop: 50,
  },
  option: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  landscape: {
    paddingRight: 30,
    paddingLeft: 30,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    margin: 5,
    marginLeft: 20,
  },
});