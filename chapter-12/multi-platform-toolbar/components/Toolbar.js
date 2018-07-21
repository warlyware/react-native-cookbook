import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const Toolbar = ({ items }) => {
  if (Platform.OS === 'ios') {
    return <View style={{ flex: 1, flexDirection: 'row', marginTop: 24 }}>
      {items.map((item, idx) => (
        <TouchableOpacity key={idx}>
          <View style={{ padding: 20 }}>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  }
  if (Platform.OS === 'android') {
    return (<View style={{ flex: 1, flexDirection: 'column' }}>
      {items.map((item, idx)=>{
        return (
          <TouchableNativeFeedback key={idx}>
            <View style={{ padding: 20 }}>
              <Text>{item.title}</Text>
            </View>
          </TouchableNativeFeedback>
        )
      })}
    </View>);
  }
};

export default Toolbar;