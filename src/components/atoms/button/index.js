import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'


const ActionButton = ({ title, style, styleText, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.btnContaniner, style]}>
            <Text style={[styles.btnText, styleText]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default ActionButton

