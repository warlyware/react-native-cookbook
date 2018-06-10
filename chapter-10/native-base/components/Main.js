import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { Root, Button, Body, Title, Container, Header, Fab, Icon, Toast, Content } from 'native-base';


export default class Main extends Component {
  state = {
    fabActive: false,
    showToast: false
  }

  componentWillMount() {
    Toast.toastInstance = null;
  }

  showToast = (destination) => {
    Toast.show({
      text: `Shared to ${destination}!`,
      buttonText: 'OK'
    });
  }

  render = () => {
    return(
      <Container>
      <Header>
        <Body>
          <Title>Header Title!</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.view}>
          <Button block info>
            <Text style={styles.buttonText}>Click Me! </Text>
          </Button>
          <Fab active={this.state.fabActive}
            direction="up"
            style={styles.fab}
            position="bottomRight"
            onPress={() => this.setState({ fabActive: !this.state.fabActive })}
          >
            <Icon name="share" />
            <Button style={styles.facebookButton}
              onPress={    Toast.show({
                text: `Shared to Facebook!`,
                buttonText: 'OK'
              })}
            >
              <Icon name="logo-facebook" />
            </Button>
            <Button style={styles.twitterButton}
              onPress={    Toast.show({
                text: `Shared to Twitter!`,
                buttonText: 'OK'
              })}
            >
              <Icon name="logo-twitter" />
            </Button>
          </Fab>
        </View>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});