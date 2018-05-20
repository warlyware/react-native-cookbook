import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux';

import Albums from './views/Albums';

const App = () => (
  <Provider store={store}>
    <SafeAreaView style={styles.container}>
      <Albums />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
