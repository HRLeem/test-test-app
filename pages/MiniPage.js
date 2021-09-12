import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';


import Loading from '../components/Loading'
import DisabledInput from '../components/DisabledInput';
import AbleInput from '../components/AbleInput'

export default function MiniPage({navigation, route}) {

    const [yData, setYData] = useState()
    const [newData, setNewData] = useState()

    useEffect(()=> {
        navigation.setOptions({
            title: 'Dollar Data Table'
        })
    })

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.picker}>
                <RNPickerSelect
                style={{ ...pickerSelectStyles }}
                onValueChange={(value) => setNewData(value)}
                placeholder={{label: '선택해주세요!', value: null}}
                items={[
                    { label: '1년 데이터 (21년 9월 7일 기준)', value: false },
                    { label: '새로 입력하기', value: true },
                ]}
            />
            </TouchableOpacity>
            {/* {
                newData == 'undefined'||'null'? (<View></View>) : (newData?(<AbleInput/>):<DisabledInput/>)
            } */}
            {
                newData? <AbleInput navigation={navigation}/> : (
                    newData == false? <DisabledInput navigation={navigation}/> : (<View></View>)
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
const pickerSelectStyles = StyleSheet.create({

    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 10,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
        width: 300,
        textAlign: 'center'
    },

    });