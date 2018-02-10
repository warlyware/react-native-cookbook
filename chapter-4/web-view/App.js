import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import BrowserScreen from './BrowserScreen';

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