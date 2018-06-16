import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  state = {
    isOpen: false,
  };

  onClose = () => {
    console.log('modal is closed');
  }

  onOpen = () => {
    console.log('modal is open');
  }

  openModal1 = () => {
    this.refs.modal1.open();
  }

  openModal2 = () => {
    this.setState({ isOpen: true });
  }

  onCloseModal2 = () => {
    this.setState({ isOpen: false });
  }

  renderModal1 = () => {
    return(
      <Modal
        style={[styles.modal, styles.modal1]}
        ref={'modal1'}
        onOpened={this.onOpen}
      >
        <Text style={styles.modalText}>
          Hello from Modal 1
        </Text>
      </Modal>
    )
  }

  renderModal2 = () => {
    return(
      <Modal
        style={[styles.modal, styles.modal2]}
        position={'bottom'}
        onOpened={this.onOpen}
        onClosed={this.onCloseModal2}
        isOpen={this.state.isOpen}
      >
        <Text style={styles.modalText}>
          Hello from Modal 2
        </Text>
        <TouchableOpacity
          onPress={() => this.setState({isOpen: false})}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            OK
          </Text>
        </TouchableOpacity>
      </Modal>
    )
  }

  render = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.openModal1}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open Modal 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.openModal2}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open Modal 2
          </Text>
        </TouchableOpacity>
        {this.renderModal1()}
        {this.renderModal2()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6f6f6',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  modal: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal1: {
    height: 200,
    backgroundColor: "#4AC9B0"
  },
  modal2: {
    height: 300,
    backgroundColor: "#6CCEFF"
  },
  modalText: {
    fontSize: 25,
    padding: 10,
    color: '#474747'
  },
  button: {
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 10,
    marginTop: 20
  },
  buttonText: {
    fontSize: 30,
    color: '#fff'
  }
});