import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage'

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions = {{
            headerStyle : {
                backgroundColor: '#fff',
                borderBottomColor: '#999',
                shadowColor: '#aaa',
                height: 100,
            },
            headerTitleAlign: 'left',
            headerTintColor: "#000",
            headerBackTitleVisible: false,
        }}>
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="ResultPage" component={ResultPage}/>
        </Stack.Navigator>
    )
}

export default StackNavigator;