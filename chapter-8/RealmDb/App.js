import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Realm from 'realm';

export default class App extends Component {
  realm;
  state = {
    users: []
  }

  componentWillMount() {
    const realm = this.realm = new Realm({
      schema: [
        {
          name: 'User',
          properties: {
            firstName: 'string',
            lastName: 'string',
            email: 'string'
          }
        }
      ]
    });
  }

  getRandomUser() {
    return fetch('https://randomuser.me/api/')
      .then(response => response.json());
  }

  createUser = () => {
    const realm = this.realm;
    this.getRandomUser().then((response) => {
      const user = response.results[0];
      const userName = user.name;
      realm.write(() => {
        realm.create('User', {
          firstName: userName.first,
          lastName: userName.last,
          email: user.email
        });
        this.setState({ users: realm.objects('User') });
      });
    });

    this.setState({ users: realm.objects('User') });
  }

  updateUser = () => {
    const realm = this.realm;
    const users = realm.objects('User');
    realm.write(() => {
      if (users.length) {
        let firstUser = users.slice(0, 1)[0];
        firstUser.firstName = 'Bob';
        firstUser.lastName = 'Cookbook';
        firstUser.email = 'react.native@cookbook.com';
        this.setState(users);
      }
    });
  }

  deleteUsers = () => {
    const realm = this.realm;
    realm.write(() => {
      realm.deleteAll();
      this.setState({ users: realm.objects('User') });
    });
  }

  render() {
    const realm = this.realm;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Realm DB Test!
      </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}
            onPress={this.createUser}>
            <Text style={styles.buttontext}>Add User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={this.updateUser}>
            <Text>Update First User</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={this.deleteUsers}>
            <Text>Remove All Users</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          <Text style={styles.welcome}>Users:</Text>
          {this.state.users.map((user, idx) => {
            return <Text key={idx}>{user.firstName} {user.lastName}
              {user.email}</Text>;
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#67CAFF',
    padding: 15,
    margin: 10
  }
});