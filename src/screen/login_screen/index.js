import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextInputComponent from '../../components/atoms/textInput'
import { Button } from '../../components'
import { handleGoTo } from '../../utils'
import { StackActions } from '@react-navigation/native'

const Login = ({ navigation }) => {
    return (
        <View style={styles.wrapper.container}>
            <View style={styles.logo.logoContainer}>
                <Image style={styles.logo.img} source={require('../../assets/image/logoRed.png')} />
            </View>
            <View style={styles.textIput.textInputContainer}>
                <TextInputComponent title="Username" image={require('../../assets/icon/xmark.png')} />
                <TextInputComponent title="Password" image={require('../../assets/icon/eyemark.png')} />
            </View>
            <View>
                <Button onPress={() => navigation.dispatch(StackActions.replace('Main'))} style={styles.button.btnLogin} styleText={styles.button.textBtnLogin} title="Login" />
            </View>
            <View style={styles.text.textContainer}>
                <Text style={styles.text.text1}>
                    Don't have an account yet?
                </Text>
                <TouchableOpacity
                    onPress={() => handleGoTo(navigation, 'SignUp')}
                >
                    <Text style={styles.text.text2}>
                        Sign up here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Login

