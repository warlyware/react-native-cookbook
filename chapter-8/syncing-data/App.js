import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NetInfo,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {
  pendingSync;

  state = {
    isConnected: null,
    syncStatus: null,
    serverResponse: null
  }

  onConnectionChange = (isConnected) => {
    this.setState({isConnected});
    if (this.pendingSync) {
      this.setState({syncStatus : 'Syncing'});
      this.submitData(this.pendingSync).then(() => {
        this.setState({syncStatus : 'Sync Complete'});
      });
    }
  }

  componentWillMount() {
    NetInfo.isConnected.fetch().then(isConnected => {
      this.setState({isConnected});
    });
    NetInfo.isConnected.addEventListener('connectionChange', this.onConnectionChange);
  }

  submitData(requestBody) {
    return fetch('http://jsonplaceholder.typicode.com/posts', {
      method : 'POST',
      body : JSON.stringify(requestBody)
    }).then((response) => {
      return response.text();
    }).then((responseText) => {
      this.setState({
        serverResponse : responseText
      });
    });
  }

  onSubmitPress = () => {
    const requestBody = {
      title: 'foo',
      body: 'bar',
      userId: 1
    };
    if (this.state.isConnected) {
      this.submitData(requestBody);
    } else {
      this.pendingSync = requestBody;
      this.setState({syncStatus : 'Pending'});
    }
  }

  render() {
    const {
      isConnected,
      syncStatus,
      serverResponse
    } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onSubmitPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Submit Data</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.status}>
          Connection Status: {isConnected ? 'Connected' : 'Disconnected'}
        </Text>
        <Text style={styles.status}>
          Sync Status: {syncStatus}
        </Text>
        <Text style={styles.status}>
          Server Response: {serverResponse}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3E6C7F',
    padding: 10,
    marginBottom: 20
  },
  buttonText: {
    color: '#fff',
    fontSize: 18
  },
  status: {
    fontSize: 20,
  }
});
