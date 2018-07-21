import React from 'react';
import { StyleSheet } from 'react-native';

import Toolbar from './Toolbar';

export default class App extends React.Component {
  render() {
    var toolbarItems = [{
      id: 1,
      title: 'Tab One',
    }, {
      id: 2,
      title: 'Tab Two',
    }, {
      id: 3,
      title: 'Tab Three',
    }];

    return (
      <Toolbar items={toolbarItems} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
