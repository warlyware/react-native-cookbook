import React, { Component } from 'react';
import {
  Animated,
  Easing,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const cloudImage = require('./assets/images/cloud.png');
const imageHeight = 200;
const imageWidth = 300;

export default class MainApp extends Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value();
  }

  componentDidMount() {
    this.startAnimation();
  }

  startAnimation() {
    this.animatedValue.setValue(width);
    Animated.timing(
      this.animatedValue,
      {
        toValue: -imageWidth,
        duration: 6000,
        easing: Easing.linear,
      }
    ).start(() => this.startAnimation());
  }

  render() {
    return (
      <View style={styles.background}>
        <Animated.Image
          style={[
            styles.image,
            { left: this.animatedValue },
          ]}
          source={cloudImage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'cyan',
  },
  image: {
    height: imageHeight,
    position: 'absolute',
    top: height / 3,
    width: imageWidth,
  },
});