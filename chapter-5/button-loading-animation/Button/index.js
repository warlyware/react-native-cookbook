import React, { Component } from 'react';
import {
  ActivityIndicator,
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default class Button extends Component {
  static defaultProps = {
    loading: false,
    onPress: () => {},
  };

  renderLabel() {
    const { label, loading } = this.props;
    if(!loading) {
      return (
        <Text style={styles.label}>{label}</Text>
      );
    }
  }

  renderActivityIndicator() {
    if (this.props.loading) {
      return (
        <ActivityIndicator size="small" color="#fff" />
      );
    }
  }

  handleButtonPress = () => {
    const { loading, onPress } = this.props;

    LayoutAnimation.easeInEaseOut();
    onPress(!loading);
  }

  render() {
    const { loading, style } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.main,
          style,
          loading ? styles.loading : null,
        ]}
        activeOpacity={0.6}
        onPress={this.handleButtonPress}
      >
        <View>
          {this.renderLabel()}
          {this.renderActivityIndicator()}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e67e22',
    borderRadius: 20,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  loading: {
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
});