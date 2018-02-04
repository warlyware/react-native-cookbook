import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  getDimensions() {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }

  handleLayoutChange(e) {
    this.getDimensions();
  }

  componentWillMount() {
    this.getDimensions();
  }

  renderLayout() {
    if (this.state.width > this.state.height) {
      return <Text style={styles.text}>Landscape!</Text>;
    } else {
      return <Text style={styles.text}>Portrait!</Text>;
    }
  }

  render() {
    return (
      <View
        onLayout={() => this.handleLayoutChange}
        style={styles.container}
      >
        {this.renderLayout()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 40,
  }
})