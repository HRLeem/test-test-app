import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


import axios from 'axios'
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

    // const test = async () => {
    //     console.log('in)')
    //     const url = 'http://172.30.66.19:80/'
    //     const res = await axios.get(url);
    //     console.log(res)
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <TouchableOpacity disabled={true} style={[styles.btn, styles.disabled]} onPress={()=>{navigation.navigate('ResultPage')}}>
                <Text style={styles.btnText}>Start</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, styles.b]} onPress={()=>{navigation.navigate('MiniPage')}}>
                <Text style={styles.btnText}>Mini</Text>
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
    disabled: {
        backgroundColor: '#ccc',
        borderColor: '#999',
        borderWidth: 1,
    }


    // b: {borderWidth: 1}
})