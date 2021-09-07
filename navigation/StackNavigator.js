import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import ResultPage from '../pages/ResultPage'
import MiniPage from '../pages/MiniPage'
import MiniResultPage from '../pages/MiniResultPage'

// import Test from '../pages/Test'

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
            <Stack.Screen name="MiniPage" component={MiniPage}/>
            <Stack.Screen name="MiniResultPage" component={MiniResultPage}/>
            {/* <Stack.Screen name="Test" component={Test}/> */}
        </Stack.Navigator>
    )
}

export default StackNavigator;