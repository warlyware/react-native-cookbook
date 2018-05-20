import React, { Component } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';

import Album from './components/Album';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Album />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
