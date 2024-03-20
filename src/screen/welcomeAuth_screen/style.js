import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const styles = StyleSheet.create({
    wrapper: {
        container: {
            backgroundColor: colors.default,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
    },
    logo: {
        logoContainer: {
            marginBottom: 58,
        },
        logoStyle: {
            width: 232,
            height: 212,
        },
    },
    text: {
        textContainer: {
            marginBottom: 54,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
        },
        text1: {
            fontSize: 42,
            fontWeight: 'bold',
            color: '#FFFFFF'
        },
        text2: {
            fontSize: 20,
            color: '#FFFFFF'
        },
    },
    button: {
        btnContainer: {
            gap: 20
        },
        btnCreateAccount: {
            backgroundColor: '#FFFFFF',
        },
        btnCreateAccountText: {
            color: colors.default,
        },
        btnSignIn: {
            borderWidth: 1,
            borderColor: '#FFFFFF'
        },
        btnSignInText: {
            color: '#FFFFFF',
        },
    }


})