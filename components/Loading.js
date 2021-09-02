import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>로딩중</Text>
            <ActivityIndicator size="large" color="#fdc453"></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fdc453',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        marginBottom: 20,
    }
})