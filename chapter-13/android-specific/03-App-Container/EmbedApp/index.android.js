/** @format */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput,
  NativeModules
} from 'react-native';
const UserNameManager = NativeModules.UserNameManager;

export default class EmbedApp extends Component<{}> {
    componentWillMount() {
        this.setState({
          userName : ''
        });
    }
  
    onUserNameChange = (userName) => {
      this.setState({userName});
      UserNameManager.setUserName(userName);
    }
  
    render() {
      return (
        <View style={styles.container}>
          <Text>Embedded RN App</Text>
          <Text>Enter User Name</Text>
          <TextInput 
            style={styles.userNameField}
            onChangeText={this.onUserNameChange}
            value={this.state.userName}
          />
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
    userNameField : {
      backgroundColor : 'white',
      height : 40,
      margin : 25,
      width : 250
    },
  });

AppRegistry.registerComponent('EmbedApp', () => EmbedApp);
