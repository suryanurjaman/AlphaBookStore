import { StyleSheet } from "react-native";
import { colors } from "../../utils";

export const styles = StyleSheet.create({
    wrapper: {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    },

    logo: {
        logoContainer: {
            marginBottom: 56,
        },
        img: {
            width: 188,
            height: 172,
        },
    },

    textIput: {
        textInputContainer: {
            gap: 24,
            marginBottom: 56
        },
    },

    button: {
        btnLogin: {
            backgroundColor: colors.default,
            width: 308,
        },
        textBtnLogin: {
            color: 'white',
            textAlign: 'center',
            fontSize: 18
        },
    },

    text: {
        textContainer: {
            flexDirection: 'row',
            gap: 2,
            marginTop: 28
        },

        text1: {
            fontSize: 14,
            color: colors.text.default
        },
        text2: {
            color: colors.text.default,
            fontSize: 14,
            fontWeight: 'bold'
        }
    }

})