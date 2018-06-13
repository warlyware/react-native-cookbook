import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import Spinner from 'react-native-spinkit';
import randomColor from 'randomcolor';

const types = [
  'Plane',
  'Bounce',
  'Wave',
  'WanderingCubes',
  'Pulse',
  'ChasingDots',
  'ThreeBounce',
  'Circle',
  '9CubeGrid',
  'FadingCircleAlt',
  'FadingCircle',
  'CircleFlip',
  'WordPress',
  'Arc',
  'ArcAlt'
];

export default class App extends Component {
  state = {
    isVisible: true,
    type: types[0],
    typeIndex: 0,
    color: randomColor()
  }

  changeSpinner = () => {
    const { typeIndex } = this.state;
    let nextType = typeIndex === types.length - 1 ? 0 : typeIndex + 1;
    this.setState({
      color: randomColor(),
      typeIndex: nextType,
      type: types[nextType]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeSpinner}>
          <Spinner
            isVisible={this.state.isVisible}
            size={120}
            type={this.state.type}
            color={this.state.color}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{this.state.type}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    paddingTop: 40,
    fontSize: 25
  }
});
