import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SignUp, SplashScreen, WelcomeAuthentication } from '../screen';
import { BottomTabBar } from '../components';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
            <Stack.Screen name="Splash" component={SplashScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuthentication} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Main" component={BottomTabBar} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default Router