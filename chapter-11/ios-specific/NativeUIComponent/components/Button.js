import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

export default class Button extends Component {
  render() {
    return <ButtonView {...this.props} />;
  }
}

const ButtonView = requireNativeComponent('ButtonView', Button);