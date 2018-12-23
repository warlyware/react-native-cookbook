import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  Platform,
  UIManager
} from 'react-native';
import Panel from './Panel';


export default class App extends Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <SafeAreaView style={[styles.main]}>
        <Text style={styles.toolbar}>Animated containers</Text>
        <View style={styles.content}>
          <Panel
            title={'Container 1'}
            style={styles.panel}
          >
            <Text style={styles.panelText}>
              Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            </Text>
          </Panel>
          <Panel
            title={'Container 2'}
            style={styles.panel}
              >
            <Text style={styles.panelText}>
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque.
            </Text>
          </Panel>
          <Panel
            expanded
            title={'Container 3'}
            style={styles.panel}
           >
            <Text style={styles.panelText}>
              Nullam lobortis eu lorem ut vulputate.
            </Text>
            <Text style={styles.panelText}>
              Donec id elementum orci. Donec fringilla lobortis ipsum, vitae commodo urna.
            </Text>
          </Panel>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    fontSize: 22,
    padding: 20,
    textAlign: 'center',
  },
  content: {
    padding: 10,
    backgroundColor: '#ecf0f1',
    flex: 1,
  },
  panel: {
    marginBottom: 10,
  },
  panelText: {
    paddingBottom: 15,
  }
});
