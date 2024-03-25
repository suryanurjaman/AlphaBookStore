import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Card, ElevatedCard, Header, Search } from '../../../components';

const HomeScreen = ({ navigation }) => {

    const handleCardPress = (book) => {
        navigation.navigate('Details', { book });
    };

    return (
        <View style={styles.container}>
            <Header />
            <Search />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollViewContent}>
                <ElevatedCard />
                <Card onCardPress={handleCardPress} />
                <View style={styles.section}>
                    <Text style={styles.text}>New Arrival</Text>
                </View>
                <Card onCardPress={handleCardPress} />
            </ScrollView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    section: {
        paddingLeft: 16,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#19191B',
    },
});

export default HomeScreen;
