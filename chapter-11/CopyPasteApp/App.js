import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Clipboard,
  TextInput
} from 'react-native';
import Button from 'react-native-button';

export default class App extends Component {
  state = {
    clipboardContent: null
  }

  copyToClipboard = () => {
    const sourceText = this.refs.sourceText.props.children;
    Clipboard.setString(sourceText);
  }

  getClipboardContent = async () => {
    const clipboardContent = await Clipboard.getString();
    this.setState({
      clipboardContent
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          Tap and Hold the next line to copy it to the Clipboard:
        </Text>
        <Text
          ref="sourceText"
          onLongPress={this.copyToClipboard}
        >
          React Native Cookbook
        </Text>
        <Text style={styles.instructions}>
          Input some text into the TextInput below and Cut/Copy as you normally would:
        </Text>
        <TextInput style={styles.textInput} />
        <View style={styles.row}>
          <Text style={styles.rowText}>
            Clipboard Contents:
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.content}>
            {this.state.clipboardContent}
          </Text>
        </View>
        <Button
          containerStyle={styles.buttonContainer}
          style={styles.buttonStyle}
          onPress={this.getClipboardContent}
        >
            Paste Clipboard
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
  content: {
    fontSize: 18,
    marginLeft : 5,
    marginRight : 5
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    width: 250,
    marginLeft: 20,
    marginRight: 20
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20
  },
  rowText: {
    color: '#333333'
  },
  buttonContainer: {
    width: 150,
    padding: 10,
    margin: 5,
    height: 40,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: '#FF5722'
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white'
  }
});