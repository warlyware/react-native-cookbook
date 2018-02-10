import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  WebView,
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

class HomeScreen extends Component {
  state = {
    links: [
      {
        title: 'Gitconnected Blog',
        url: 'https://medium.com/gitconnected'
      },
      {
        title: 'Smashing Magazine',
        url: 'https://www.smashingmagazine.com/articles/'
      },
      {
        title: 'CSS Tricks',
        url: 'https://css-tricks.com/'
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

class BrowserScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return(
      <WebView
        source={{uri: params.url}}
      />
    );
  }
}

const App = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
  Browser: {
    screen: BrowserScreen,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.title
    }),
  },
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonList: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
    backgroundColor: '#c0392b',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});