import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class UserForm extends Component {
  state = {};

  handleButtonPress = () => {
    const { name, phone, email } = this.state;

    Alert.alert(`User's data`,`Name: ${name}, Phone: ${phone}, Email: ${email}`);
  }

  renderTextfield(options) {
    return (
      <TextInput
        style={styles.textfield}
        onChangeText={(value) => this.setState({ [options.name]: value })}
        placeholder={options.placeholder}
        value={this.state[options.name]}
        keyboardType={options.keyboard || 'default'}
      />
    );
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={this.handleButtonPress}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.instructions}>
          Please enter your contact information
        </Text>
        {this.renderTextfield({ name: 'name', placeholder: 'Your name' })}
        {this.renderTextfield({ name: 'phone', placeholder: 'Your phone number', keyboard: 'phone-pad' })}
        {this.renderTextfield({ name: 'email', placeholder: 'Your email address', keyboard: 'email-address'})}
        {this.renderButton()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    backgroundColor: '#fff',
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
  instructions: {
    color: '#828282',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  textfield: {
    height: 40,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#34495e',
    borderRadius: 3,
    padding: 12,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});