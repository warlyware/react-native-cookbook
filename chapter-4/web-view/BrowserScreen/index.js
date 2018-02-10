import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class BrowserScreen extends Component {
  render() {
    const { params } = this.props.navigation.state;

    return(
      <WebView
        source={{uri: params.url}}
      />
    );
  }
}