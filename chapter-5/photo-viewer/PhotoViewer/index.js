import React, { Component } from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class PhotoViewer extends Component {
  static defaultProps = {
    onClose: () => {},
  };

  onPressBtn = () => {
    this.props.onClose();
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 400,
        easing: Easing.in,
      }
    ).start();
  }

  render() {
    const { post: { image, title }, position } = this.props;
    const top = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [position.pageY, height/2 - position.height/2],
    });
    const opacity = this.animatedValue;

    return (
      <Animated.View
        style={[
          styles.main,
          { opacity },
        ]}
      >
        <Animated.Image
          source={image}
          style={[
            styles.image,
            { top, opacity }
          ]}
        />
        <TouchableOpacity style={styles.closeBtn} onPress={this.onPressBtn}>
          <Text style={styles.closeBtnText}>X</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#000',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  image: {
    width,
    height: 300,
  },
  closeBtn: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeBtnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});