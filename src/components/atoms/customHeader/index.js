import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { arrowLeft, heart } from '../../../assets'
import { colors } from '../../../utils'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = (props) => {

    const navigation = useNavigation(); // Get the navigation object

    // Function to handle arrow icon press (go back)
    const handleArrowPress = () => {
        navigation.goBack(); // Navigate back
    };

    const [isHeartFilled, setIsHeartFilled] = useState(false);

    // Function to handle heart icon press
    const handleHeartPress = () => {
        setIsHeartFilled(!isHeartFilled); // Toggle heart icon fill state
    };


    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 28, marginTop: 42 }}>
            <TouchableOpacity onPress={handleArrowPress}>
                <Image style={{ height: 21, width: 24 }} source={arrowLeft} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHeartPress}>
                <Image style={{ height: 28, width: 28, tintColor: isHeartFilled ? colors.default : colors.icon }} source={heart} />
            </TouchableOpacity>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({})