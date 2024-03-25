import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Hello, Tricia</Text>
            <Text style={styles.text2}>What do you want to read today?</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginBottom: 26,
        paddingHorizontal: 16
    },
    text1: {
        color: colors.default,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5
    },
    text2: {
        color: colors.text.dark,
        fontSize: 16,
    }
})