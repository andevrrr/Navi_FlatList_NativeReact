import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import StackNavigator from './Navigation/StackNavigator';
import DrawerNavigator from './Navigation/DrawerNavigator';
//import TabNavigator from './Navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}