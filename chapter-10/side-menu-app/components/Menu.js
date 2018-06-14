import React from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

const window = Dimensions.get('window');

const Menu = ({ onColorSelected }) => {
  return (
    <View style={styles.menu}>
      <Text style={styles.heading}>Select a Color</Text>
      <TouchableOpacity onPress={() => onColorSelected('green')}>
        <Text style={styles.item}>
          Green
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('blue')}>
        <Text style={styles.item}>
          Blue
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('orange')}>
        <Text style={styles.item}>
          Orange
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('pink')}>
        <Text style={styles.item}>
          Pink
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('cyan')}>
        <Text style={styles.item}>
          Cyan
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('yellow')}>
        <Text style={styles.item}>
          Yellow
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onColorSelected('purple')}>
        <Text style={styles.item}>
          Purple
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#3C3C3C',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    color: '#f6f6f6',
    fontWeight: 'bold',
    paddingBottom: 20
  },
  item: {
    fontSize: 25,
    paddingTop: 10,
    color: '#f6f6f6'
  }
});

export default Menu;