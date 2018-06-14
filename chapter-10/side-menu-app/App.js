import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';

import Menu from './components/Menu';

export default class App extends React.Component {
  state = {
    isOpen: false,
    selectedBackgroundColor: 'green'
  }

  changeBackgroundColor = color => {
    this.setState({
      isOpen: false,
      selectedBackgroundColor: color,
    });
  }

  render() {
    const menu = <Menu onColorSelected={this.changeBackgroundColor} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this.setState({ isOpen })}
      >
        <View style={[
          styles.container,
          { backgroundColor: this.state.selectedBackgroundColor }
        ]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState({ isOpen: true })}
          >
            <Text style={styles.buttonText}>Open Menu</Text>
          </TouchableOpacity>
        </View>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 25
  }
});
