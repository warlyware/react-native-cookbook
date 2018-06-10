import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Font, AppLoading } from 'expo';
import {
  Spinner,
  Button,
  Body,
  Title,
  Container,
  Header,
  Fab,
  Icon,
} from 'native-base';

export default class App extends Component {
  state = {
    loading: true,
    fabActive: false,
  }

  async componentWillMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf'),
    });
    this.setState({ loading: false });
  }

  renderFab = () => {
    return (
      <Fab active={this.state.fabActive}
        direction="up"
        style={styles.fab}
        position="bottomRight"
        onPress={() => this.setState({ fabActive: !this.state.fabActive })}
      >
        <Icon name="share" />
        <Button style={styles.facebookButton}
          onPress={() => { console.log('facebook button pressed') }}
        >
          <Icon name="logo-facebook" />
        </Button>
        <Button style={styles.twitterButton}
          onPress={() => { console.log('twitter button pressed')}}
        >
          <Icon name="logo-twitter" />
        </Button>
      </Fab>
    );
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    } else {
      return (
        <Container>
          <Header>
            <Body>
              <Title>Header Title!</Title>
            </Body>
          </Header>
          <View style={styles.view}>
            <Spinner color='green' style={styles.spinner} />
            <Button block info
              onPress={() => { console.log('button 1 pressed') }}
            >
              <Text style={styles.buttonText}>Click Me! </Text>
            </Button>
            <Button block success
              onPress={() => { console.log('button 2 pressed') }}
            >
              <Text style={styles.buttonText}>No Click Me!</Text>
            </Button>
            {this.renderFab()}
          </View>
        </Container>
      );
    }
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 40
  },
  buttonText: {
    color: '#fff'
  },
  fab: {
    backgroundColor: '#007AFF'
  },
  twitterButton: {
    backgroundColor: '#1DA1F2'
  },
  facebookButton: {
    backgroundColor: '#3B5998'
  },
  spinner: {
    marginBottom: 180
  }
});
