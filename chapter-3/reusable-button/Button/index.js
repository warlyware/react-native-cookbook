import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Base,
  Default,
  Danger,
  Info,
  Success
} from './styles';

const { array, string, object, bool, func, any } = PropTypes;

export default class Button extends Component {
  static propTypes = {
    children: any,
    danger: bool,
    info: bool,
    style: View.propTypes.style,
    success: bool,
    onPress: func,
  };

  getTheme() {
    const { danger, info, success } = this.props;

    if (info) {
      return Info;
    }

    if (success) {
      return Success;
    }

    if (danger) {
      return Danger;
    }

    return Default;
  }

  render() {
    const theme = this.getTheme();
    const {
      children,
      onPress,
      style,
      rounded,
    } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          Base.main,
          theme.main,
          rounded ? Base.rounded : null ,
          style,
        ]}
        onPress={onPress}>
        <Text style={[Base.label, theme.label]}>{children}</Text>
      </TouchableOpacity>
    );
  }
}