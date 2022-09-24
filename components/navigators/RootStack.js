import React from 'react';
import {Button} from 'react-native';

//React navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import Start from './../../screens/Start';
import Login from '../../screens/Login';
import {Colors} from './../../constants/colors';

const { Navigator, Screen } = createNativeStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={screenOptions}
                initialRouteName="Start"
            >
                <Screen name="Start" component={Start}/>
                <Screen name="Login" options={changeHeaderTintColor(Colors.darkPurple)} component={Login}/>
            </Navigator>
        </NavigationContainer>
    );
}

const screenOptions = {
    headerStyled: {
        backgrounfColor: 'transparent'
    },
    headerTintColor: Colors.white,
    headerTransparent: true,
    headerBackTitle: 'Back',
    headerBackTitleStyle: {
        fontSize: 18,
        paddingTop: 20
    },
    headerTitle: '',
    headerLeftContainerStyle: {
        paddingLeft: 100
    }
};

function changeHeaderTintColor(color) {
    return {
        headerTintColor: color
    }
}

export default RootStack;