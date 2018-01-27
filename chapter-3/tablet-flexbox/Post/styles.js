import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 3,
    height: 340,
    margin: 5,
    width: 240,
  },
  image: {
    backgroundColor: '#ccc',
    height: 120,
    resizeMode: 'cover',
  },
  content: {
    padding: 10,
    overflow: 'hidden',
    zIndex: 1,
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1abc9c',
    borderRadius: 3,
    padding: 10,
    margin: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;