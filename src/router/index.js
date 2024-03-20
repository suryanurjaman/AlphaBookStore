import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, SplashScreen, WelcomeAuthentication } from '../screen';

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuthentication} options={{
                headerShown: false,
            }} />
            <Stack.Screen name="Login" component={Login} options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    )
}

export default Router

const styles = StyleSheet.create({})