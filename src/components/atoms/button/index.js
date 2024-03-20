import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'


const ActionButton = ({ title, style, styleText }) => {
    return (
        <TouchableOpacity style={[styles.btnContaniner, style]}>
            <Text style={[styles.btnText, styleText]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ActionButton

