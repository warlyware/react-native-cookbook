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
    let { label, name, keyboard } = options;

    return (
      <TextInput
        style={styles.textfield}
        onChangeText={(value) => this.setState({ name: value })}
        placeholder={label}
        value={this.state.name}
        keyboardType={keyboard || 'default'}
      />
    );
  }

  renderButton() {
    return (
      <TouchableOpacity
        onPress={this.handleButtonPress}
        style={styles.btn}
      >
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={styles.instructions}>
          Please enter your contact information
        </Text>
        {this.renderTextfield({ name: 'name', label: 'Your name' })}
        {this.renderTextfield({ name: 'phone', label: 'Your phone number', keyboard: 'phone-pad' })}
        {this.renderTextfield({ name: 'email', label: 'Your email address', keyboard: 'email-address'})}
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
    color: '#bbb',
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  textfield: {
    height: 40,
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#34495e',
    borderRadius: 3,
    padding: 12,
    flex: 1,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 16,
  },
});