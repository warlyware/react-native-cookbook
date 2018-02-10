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
        title: 'Codrops',
        url: 'https://tympanus.net/codrops/'
      }
     ],
  };

  handleButtonPress(btn) {
    console.log(this.props, url);
    const { url, title } = btn;
    this.props.navigation.navigate('Browser', { url, title });
  }

  renderButton = (btn, index) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => this.handleButtonPress(btn)}
        style={styles.btn}
      >
        <Text style={styles.text}>{btn.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.state.links.map(this.renderButton)}
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
  heading: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    fontSize: 30
  },
  btn: {
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