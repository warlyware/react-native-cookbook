import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Font } from 'expo';

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'josefin-sans-regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
      'josefin-sans-bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
      'josefin-sans-italic': require('./assets/fonts/JosefinSans-Italic.ttf'),
      'raleway-regular': require('./assets/fonts/Raleway-Regular.ttf'),
      'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
      'raleway-italic': require('./assets/fonts/Raleway-Italic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.fontLoaded ? (
            <View style={styles.container}>
              <Text style={[styles.josefinSans, styles.textFormatting]}>
                Hello, Josefin Sans!
              </Text>
              <Text style={[styles.josefinSansBold, styles.textFormatting]}>
                Hello, Josefin Sans!
              </Text>
              <Text style={[styles.josefinSansItalic, styles.textFormatting]}>
                Hello, Josefin Sans!
              </Text>
              <Text style={[styles.raleway, styles.textFormatting]}>
                Hello, Raleway!
              </Text>
              <Text style={[styles.ralewayBold, styles.textFormatting]}>
                Hello, Raleway!
              </Text>
              <Text style={[styles.ralewayItalic, styles.textFormatting]}>
                Hello, Raleway!
              </Text>
            </View>
          ) : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  josefinSans: {
    fontFamily: 'josefin-sans-regular',
  },
  josefinSansBold: {
    fontFamily: 'josefin-sans-bold',
  },
  josefinSansItalic: {
    fontFamily: 'josefin-sans-italic',
  },
  raleway: {
    fontFamily: 'raleway-regular',
  },
  ralewayBold: {
    fontFamily: 'josefin-sans-bold',
  },
  ralewayItalic: {
    fontFamily: 'josefin-sans-italic',
  },
  textFormatting: {
    fontSize: 40,
    paddingBottom: 20
  }
});
