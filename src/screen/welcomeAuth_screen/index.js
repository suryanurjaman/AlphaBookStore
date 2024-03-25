import { Image, Text, View } from 'react-native'
import React from 'react'
import { styles } from './style'
import { Button } from '../../components'
import { logowhite } from '../../assets'
import { handleGoTo } from '../../utils'

const WelcomeAuthentication = ({ navigation }) => {
    return (
        <View style={styles.wrapper.container}>
            <View style={styles.logo.logoContainer}>
                <Image style={styles.logo.logoStyle} source={logowhite} />
            </View>
            <View style={styles.text.textContainer}>
                <Text style={styles.text.text1}>Welcome</Text>
                <Text style={styles.text.text2}>Read without limit</Text>
            </View>
            <View style={styles.button.btnContainer}>
                <Button
                    onPress={() => handleGoTo(navigation, 'SignUp')}
                    style={styles.button.btnCreateAccount}
                    styleText={styles.button.btnCreateAccountText} title="Create Accounts"
                />
                <Button
                    onPress={() => handleGoTo(navigation, 'Login')}
                    style={styles.button.btnSignIn}
                    styleText={styles.button.btnSignInText}
                    title="Log In as Guest"
                />
            </View>
        </View>
    )
}

export default WelcomeAuthentication
