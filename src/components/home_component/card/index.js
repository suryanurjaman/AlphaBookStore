import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { books } from '../../../utils';

const Card = ({ onCardPress }) => {

    const handleCardPress = (book) => {
        // Navigate to detail page with bookId
        onCardPress(book);
    };

    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={styles.container}>
            {books.map((book, index) => (
                <TouchableOpacity key={book.id} style={[styles.card, index !== books.length - 1 && styles.cardMarginRight]} onPress={() => handleCardPress(book)}>
                    <Image source={book.image} style={styles.coverImage} />
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{book.title}</Text>
                        <Text style={styles.author} numberOfLines={1} ellipsizeMode="tail">by {book.author}</Text>
                        <Text style={styles.price} numberOfLines={1} ellipsizeMode="tail">{book.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { marginTop: 20, marginBottom: 28, paddingHorizontal: 24 },
    card: { width: 160 },
    cardMarginRight: { marginRight: 12 },
    coverImage: { width: '100%', height: 250, marginBottom: 8, borderRadius: 20 },
    textContainer: { flexShrink: 1, marginLeft: 4 },
    title: { fontSize: 16, fontWeight: 'bold', color: '#333333', marginBottom: 4 },
    author: { fontSize: 12, color: '#888', marginBottom: 2 },
    price: { fontSize: 10 },
});

export default Card;
