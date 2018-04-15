import React, { PureComponent } from 'react';
import {
  NetInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class App extends PureComponent {
  state = {
    online: null,
    offline: null,
  };

  componentWillMount() {
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      this.onConnectivityChange(connectionInfo);
    })

    NetInfo.addEventListener('connectionChange', this.onConnectivityChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.onConnectivityChange);
  }

  onConnectivityChange = connectionInfo => {
    // const type = connectionInfo.toLowerCase();
    console.log('connection change', connectionInfo.type);
    this.setState({
      online: connectionInfo.type !== 'none',
      offline: connectionInfo.type === 'none',
    });
  }

  renderMask() {
    if (this.state.offline) {
      return (
        <View style={styles.mask}>
          <View style={styles.msg}>
            <Text style={styles.alert}>Seems like you do not have
             network connection anymore.</Text>
            <Text style={styles.alert}>You can still continue
            using the app, with limited content.</Text>
          </View>
        </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.toolbar}>My Awesome App</Text>
        <Text style={styles.text}>Lorem...</Text>
        <Text style={styles.text}>Lorem ipsum...</Text>
        {this.renderMask()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#3498db',
    padding: 15,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    padding: 10,
  },
});