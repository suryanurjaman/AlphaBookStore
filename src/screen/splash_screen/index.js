import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { logoRed, logowhite } from '../../assets'
import { colors } from '../../utils'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth')
        }, 2000);
    })

    return (
        <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={logoRed} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})