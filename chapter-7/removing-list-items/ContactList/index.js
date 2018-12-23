import React, { Component } from 'react';
import {
  ListView,
  ScrollView,
} from 'react-native';
import ContactItem from './ContactItem';

const data = [
  { id: 1, name: 'Jon Snow' },
  { id: 2, name: 'Luke Skywalker' },
  { id: 3, name: 'Bilbo Baggins' },
  { id: 4, name: 'Bob Labla' },
  { id: 5, name: 'Mr. Magoo' },
];

export default class ContactList extends Component {
  ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
  });

  state = {
    dataSource: this.ds.cloneWithRows(data),
    swiping: false,
  };

  handleRemoveContact = (contact) => {
    const index = data.findIndex(
      (item) => item.id === contact.id
    );
    data.splice(index, 1);

    this.setState({
        dataSource: this.ds.cloneWithRows(data),
    });
  }

  handleToggleSwipe = () => {
    this.setState({ swiping: !this.state.swiping });
  }

  renderItem = (contact) => (
    <ContactItem
      contact={contact}
      onRemove={this.handleRemoveContact}
      onDragEnd={this.handleToggleSwipe}
      onDragStart={this.handleToggleSwipe}
    />
  );

  render() {
    const { dataSource, swiping } = this.state;

    return (
    <ListView
        key={data}
        enableEmptySections
        dataSource={dataSource}
        renderScrollComponent={
        (props) => <ScrollView {...props} scrollEnabled={!swiping}/>
        }
        renderRow={this.renderItem}
      />
    );
  }
}