import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';

import styles from './styles';

export default class HomeScreen extends Component {
  state = {
    links: [
      {
        title: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/articles/'
      },
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/'
      },
      {
        title: 'Gitconnected Blog',
        url: 'https://medium.com/gitconnected'
      },
      {
        title: 'Hacker News',
        url: 'https://news.ycombinator.com/'
      }
     ],
  };

  handleButtonPress(button) {
    const { url, title } = button;
    this.props.navigation.navigate('Browser', { url, title });
  }

  renderButton = (button, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.handleButtonPress(button)}
        style={styles.button}
      >
        <Text style={styles.text}>{button.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonList}>
          {this.state.links.map(this.renderButton)}
        </View>
      </SafeAreaView>
    );
  }
}