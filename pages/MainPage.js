import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function MainPage( {navigation, route}) {

    const [ date, setDate ] = useState('')

    useEffect(()=> {
        setDate(dateSet());
        navigation.setOptions({
            title:'Dollar Data Table',
        })
    })

    const dateSet = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() +1;
        const date = today.getDate();
        return `${year} / ${month} / ${date}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity style={[styles.btn, styles.b]} onPress={()=>{navigation.navigate('ResultPage')}}>
                <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    date: {
        fontSize: 18,
        fontWeight: '200',
        letterSpacing: 3,
        color: '#000'
        // width: '50%',
        // textAlign: 'right'
    },
    btn: {
        width: 170,
        height: 80,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: "#fdc453",
        justifyContent: 'center',
        alignItems:'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 27,
        letterSpacing: 3,
        fontWeight: '700',
    },


    // b: {borderWidth: 1}
})