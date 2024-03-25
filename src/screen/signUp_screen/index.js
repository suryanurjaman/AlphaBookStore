import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import TextInputComponent from '../../components/atoms/textInput'
import { Button } from '../../components'
import { eyeIcon, logoRed, xIcon } from '../../assets'
import { handleGoTo } from '../../utils'

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.wrapper.container}>
            <View style={styles.logo.logoContainer}>
                <Image style={styles.logo.img} source={logoRed} />
            </View>
            <View style={styles.textIput.textInputContainer}>
                <TextInputComponent title="Full Name" image={xIcon} />
                <TextInputComponent title="Username" image={xIcon} />
                <TextInputComponent title="Email" image={xIcon} />
                <TextInputComponent title="Password" image={eyeIcon} />
            </View>
            <View>
                <Button style={styles.button.btnLogin} styleText={styles.button.textBtnLogin} title="Sign Up" />
            </View>
            <View style={styles.text.textContainer}>
                <Text style={styles.text.text1}>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={() => handleGoTo(navigation, 'Login')}>
                    <Text style={styles.text.text2}>
                        Log in here
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SignUp

