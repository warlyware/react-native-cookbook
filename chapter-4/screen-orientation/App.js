import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Menu from './Menu';

export default class App extends React.Component {
  handleLayoutChange() {
    this.getOrientation();
  }

  componentWillMount() {
    this.getOrientation();
  }

  getOrientation() {
    const { width, height } = Dimensions.get('window');
    let orientation = height > width ? 'Portrait' : 'Landscape';
    console.log(orientation);
    this.setState({
      orientation
    });
  }

  render() {
    return (
      <View
        onLayout={() => {this.handleLayoutChange()}}
        style={styles.container}
      >
        <Menu orientation={this.state.orientation} />
        <View style={styles.main}>
          <Text>Main Content</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  main: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});