import { Image, StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { microphone, search, settingSearch } from '../../../assets'

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.logoWrapper.container}>
                    <Image style={styles.logoWrapper.image} source={search} />
                    <TextInput style={styles.logoWrapper.text} placeholder='Search here' />
                </View>
                <View style={styles.logo2Wrapper.container}>
                    <View style={styles.logo2Wrapper.imageContainer}>
                        <Image style={styles.logo2Wrapper.image} source={microphone} />
                    </View>
                    <Image source={settingSearch} />
                </View>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        marginBottom: 26,
        paddingHorizontal: 16
    },
    searchContainer: {
        borderWidth: 0.5, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
    },
    logoWrapper: {
        container: {
            flexDirection: 'row', alignItems: 'center'
        },
        image: {
            height: 24, width: 24, marginRight: 26
        },
        text: {
            paddingRight: 88, fontSize: 16
        }
    },
    logo2Wrapper: {
        container: {
            flexDirection: 'row'
        },
        imageContainer: {
            borderRightWidth: 1, marginRight: 16, borderColor: 'rgba(0, 0, 0, 0.3)',
        },
        image: {
            marginRight: 6, height: 24, width: 24
        }
    }
})