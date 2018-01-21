import { StyleSheet } from 'react-native';

const Base = StyleSheet.create({
  main: {
    padding: 10,
    borderRadius: 3,
  },
  label: {
    color: '#fff',
  },
  rounded: {
    borderRadius: 20,
  },
});

const Danger = StyleSheet.create({
  main: {
    backgroundColor: '#e74c3c',
  },
});

const Info = StyleSheet.create({
  main: {
    backgroundColor: '#3498db',
  },
});

const Success = StyleSheet.create({
  main: {
    backgroundColor: '#1abc9c',
  },
});

const Default = StyleSheet.create({
  main: {
    backgroundColor: 'rgba(0 ,0 ,0, 0)',
  },
  label: {
    color: '#333',
  },
});

export {
  Base,
  Danger,
  Info,
  Success,
  Default,
};