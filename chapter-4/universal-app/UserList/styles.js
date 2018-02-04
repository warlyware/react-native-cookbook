import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#dde6e9',
  },
  toolbar: {
    backgroundColor: '#2989dd',
    color: '#fff',
    paddingTop: 50,
    padding: 20,
    textAlign: 'center',
    fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    padding: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    color: '#333',
    fontSize: 22,
    fontWeight: 'bold',
  },
  phone: {
    color: '#aaa',
    fontSize: 16,
  },
});