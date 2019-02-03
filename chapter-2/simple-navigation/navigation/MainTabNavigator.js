import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Links: {
    screen: LinksScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused }) => {
      const { routeName } = navigation.state;
      let iconName;
      switch (routeName) {
        case 'Home':
          iconName = `ios-information-circle`;
          break;
        case 'Links':
          iconName = `ios-link`;
          break;
        case 'Settings':
          iconName = `ios-options`;
      }
      return (
        <Ionicons name={iconName}
          size={28} style={{ marginBottom: -3 }}
          color={focused ? Colors.tabIconSelected :
            Colors.tabIconDefault}
        />
      );
    },
  }),
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

const Colors = {
  tabIconDefault: '#ccc',
  tabIconSelected: '#2f95dc',
}