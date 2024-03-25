import { Image, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './style'

const TextInputComponent = ({ title, image }) => {
    return (
        <View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder={title} />
                <Image style={styles.icon} source={image} />
            </View>
        </View>
    )
}

export default TextInputComponent