import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './navigation/StackNavigator'


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <StackNavigator/>
    </NavigationContainer>
  );
}