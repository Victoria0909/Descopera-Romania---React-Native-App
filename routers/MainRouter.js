import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
//import * as screns from '../screens';
import Home from '../screens/Home';
import Details from '../screens/Details';


const MainStack = createStackNavigator();

export const MainRouter = () => (
    <MainStack.Navigator
        initialRouteName="Home"
    >
        <MainStack.Screen
            name="Caută un tur"
            component={Home}
        />
        <MainStack.Screen
            name="Details"
            component={Details}
        />
    </MainStack.Navigator>
)