import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Button } from '../../../components';
import { colors } from '../../../utils';

const Detail_page = () => {
    const route = useRoute();
    const { book } = route.params;

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={book.image} />
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>Author: {book.author}</Text>
                <Text style={styles.rating}>Rating: {book.rating}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>About the author</Text>
                <Text style={styles.description}>{book.authorBio}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.heading}>Overview</Text>
                <Text style={styles.description}>{book.overview}</Text>
            </View>
            <Button style={styles.button} styleText={styles.buttonText} title='Add to cart' />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 28,
        paddingTop: 20,
        paddingBottom: 20
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    image: {
        height: 300,
        width: 196,
        borderRadius: 20,
        marginBottom: 16
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#19191B',
        marginBottom: 4
    },
    author: {
        fontSize: 18,
        color: '#9D9D9D',
        marginBottom: 8
    },
    rating: {
        color: '#19191B'
    },
    section: {
        marginBottom: 20
    },
    heading: {
        color: '#19191B',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12
    },
    description: {
        fontSize: 16,
        color: '#9D9D9D',
        textAlign: 'justify'
    },
    button: {
        backgroundColor: colors.default,
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
});

export default Detail_page;
