import React, { Component } from 'react';
import axios from 'axios';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const endpoint = 'http://jsonplaceholder.typicode.com/posts';

export default class App extends Component {
  state = {
    results: '',
    title: '',
    body: '',
  };

  onTitleChange = (title) => this.setState({ title });
  onPostChange = (body) => this.setState({ body });

  onLoad = async () => {
    this.setState({ results: 'Loading, please wait...' });
    const response = await axios.get(endpoint);
    const results = JSON.stringify(response);
    this.setState({ results });
  }

  onSave = async () => {
    const { title, body } = this.state;
    try {
      const response = await axios.post(endpoint, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
        params: {
          userId: 1,
          title,
          body
        }
      });
      const results = JSON.stringify(response);
      Alert.alert('Success', 'Post successfully saved');
      this.onLoad();
    } catch (error) {
      Alert.alert('Error', `There was an error while saving the post: ${error}`);
    }
  }

  render() {
    const { results, title, body } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.toolbar}>Add a new post</Text>
        <ScrollView style={styles.content}>
          <TextInput
            style={styles.input}
            onChangeText={this.onTitleChange}
            value={title}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={this.onPostChange}
            value={body}
            placeholder="Post body..."
          />
          <TouchableOpacity onPress={this.onSave} style={styles.button}>
            <Text>Save</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.preview}
            value={results}
            placeholder="Results..."
            editable={false}
            multiline
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toolbar: {
    backgroundColor: '#3498db',
    color: '#fff',
    textAlign: 'center',
    padding: 25,
    fontSize: 20,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  preview: {
    backgroundColor: '#bdc3c7',
    flex: 1,
    height: 500,
  },
  input: {
    backgroundColor: '#ecf0f1',
    borderRadius: 3,
    height: 40,
    padding: 5,
    marginBottom: 10,
    flex: 1,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 3,
    marginBottom: 30,
  },
});