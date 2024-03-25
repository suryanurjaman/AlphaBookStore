import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const titles = ['Novel', 'Self Love', 'Science', 'Romance', 'Crime', 'Education'];

const ElevatedCard = () => {
    const [activeTitle, setActiveTitle] = useState('Novel');

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
            {titles.map((title, index) => (
                <TouchableOpacity key={title} onPress={() => setActiveTitle(title)} style={index !== titles.length - 1 ? styles.titleContainer : null}>
                    <Text style={[styles.text, activeTitle === title && styles.activeText]}>
                        {title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    titleContainer: {
        marginRight: 40,
    },
    text: {
        fontSize: 16,
        color: '#9D9D9D',
    },
    activeText: {
        color: '#333333'
    },
});

export default ElevatedCard;
