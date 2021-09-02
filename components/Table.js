import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Table = ( {content, navigation} ) => {
    return (
        <View style={styles.tr} >
            {
                content.map((value, j) => {
                    return (
                    <View style={styles.td} key={j}>
                        <Text style={styles.tdText}>
                            {value}
                        </Text>
                    </View>
                    )
                })
            }
        </View>
    )

}

const styles = StyleSheet.create({
    tr: {
        flexDirection: 'row',
        width: '90%',
        height: 50,
        justifyContent:'space-between',
    },
    td: {
        width: '20%'
    },
    tdText: {
        fontSize: 18,
        textAlign:'center'
    },
})

export default Table;