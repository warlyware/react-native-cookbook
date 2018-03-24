import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const icons = {
  angry: require('./images/angry.png'),
  heart: require('./images/heart.png'),
  laughing: require('./images/laughing.png'),
  like: require('./images/like.png'),
  surprised: require('./images/surprised.png'),
};

export default class Icon extends Component {
  static defaultProps = {
    delay: 0,
    onPress: () => {},
  };

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    const { delay } = this.props;

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 200,
        easing: Easing.elastic(1),
        delay,
      }
    ).start();
  }

  onPressIcon = () => {
    const { onPress, name } = this.props;
    onPress(name);
  }

  render() {
    const { name, index, onPress } = this.props;
    const left = index * 50;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -95],
    });
    const opacity = this.animatedValue;

    return (
      <Animated.View
        style={[
          styles.icon,
          { top, left, opacity },
        ]}
      >
        <TouchableOpacity onPress={this.onPressIcon}>
          <Image source={icons[name]} style={styles.image} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    position: 'absolute',
  },
  image: {
    width: 40,
    height: 40,
  },
});