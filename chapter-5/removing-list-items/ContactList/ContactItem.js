import React, { Component } from 'react';
import {
  Animated,
  Easing,
  PanResponder,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class ContactItem extends Component {
  static defaultProps = {
    onPress: () => {},
    onRemove: () => {},
    onDragEnd: () => {},
    onDragStart: () => {},
  };

  state = {
    pan: new Animated.ValueXY(),
  };

  handleShouldDrag = (e, gesture) => {
    const { dx } = gesture;
    return Math.abs(dx) > 2;
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: this.handleShouldDrag,
      onPanResponderMove: Animated.event(
        [null, { dx: this.state.pan.x }]
      ),
      onPanResponderRelease: this.handleReleaseItem,
      onPanResponderTerminate: this.handleReleaseItem,
    });
  }

  handleReleaseItem = (e, gesture) => {
    const { onRemove, contact,onDragEnd } = this.props;
    const move = this.rowWidth - Math.abs(gesture.dx);
    let remove = false;
    let config = {  // Animation to origin position
      toValue: { x: 0, y: 0 },
      duration: 500,
    };

    if (move < this.threshold) {
      remove = true;
      if (gesture.dx > 0) {
        config = { // Animation to the right
          toValue: { x: this.rowWidth, y: 0 },
          duration: 100,
        };
      } else {
        config = { // Animation to the left
          toValue: { x: -this.rowWidth, y: 0 },
          duration: 100,
        };
      }
    }

    onDragEnd();
    Animated.spring(
      this.state.pan,
      config,
    ).start(() => {
      if (remove) {
        onRemove(contact);
      }
    });
  }

  setThreshold = (event) => {
    const { layout: { width } } = event.nativeEvent;
    this.threshold = width / 3;
    this.rowWidth = width;
  }

  render() {
    const { contact, onPress } = this.props;

    return (
      <View style={styles.row} onLayout={this.setThreshold}>
        <Animated.View
          style={[styles.pan, this.state.pan.getLayout()]}
          {...this.panResponder.panHandlers}
        >
          <TouchableHighlight
            style={styles.info}
            onPress={() => onPress(contact)}
            underlayColor="#ecf0f1"
          >
            <Text>{contact.name}</Text>
          </TouchableHighlight>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1,
    borderColor: '#ecf0f1',
    flexDirection: 'row',
  },
  pan: {
    flex: 1,
  },
  info: {
    backgroundColor: '#fff',
    paddingBottom: 20,
    paddingLeft: 10,
    paddingTop: 20,
  },
});