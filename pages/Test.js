import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import { useForm } from 'react-hook-form'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default Test = () => {
    
    const [input, setInput] = useState('')

    const ait = () => alert(input);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>dsd</Text>
            <TextInput
                style={styles.textinput}
                placeholder="tlqkf"
                placeholderTextColor="#aaa"
                onChangeText={input=>setInput(input)}
                />
            <TouchableOpacity style={styles.btn} onPress={()=>{ait()}}>
                <Text style={styles.text}>click</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    text: {
        fontSize: 20,
        color: '#000',
    },
    textinput: {
        width: 100,
        borderWidth: 1,
        padding: 10,
        marginTop: 20,
    },
    btn : {
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 20,
        padding: 10,
    }
})