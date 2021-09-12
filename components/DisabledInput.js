import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,  } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import * as Linking from 'expo-linking'

export default function DisabledInput({navigation}) {
    const link_it = (dwxy) => {
        Linking.openURL(`https://www.investing.com/${dwxy}`)
    }
    
    const [p_dw, setP_dw] = useState(0)
    const [p_dxy, setP_dxy] = useState(0)
    const [dis, setDis] = useState({'y_dw':1135.9, 'y_dxy':92.31})

    useEffect(()=> {
        // console.log(`dw - ${p_dw}`)
        // console.log(`dxy - ${p_dxy}`)
    })
    const goToResult = () => {
        // 자료 정리
        const content = {
            'y_dw': dis.y_dw,
            'y_dxy':dis.y_dxy,
            'p_dw': p_dw,
            'p_dxy':p_dxy
        }
        // 보내기
        navigation.navigate('MiniResultPage', content)
    }
    return (
        <View style={styles.container}>
            <View style={styles.tr}>
                <View style={[styles.td, styles.tdFirst]}>
                    <Text style={styles.tdText}>
                        52주 환율
                    </Text>
                </View>
                <View style={styles.td}>
                    <TouchableOpacity 
                        style={[styles.tdText, styles.tdTextInput]}
                        disabled={true}
                    >
                        <Text style={[styles.tdText, styles.textDisabled]}>
                        {dis.y_dw}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.tr}>
                <View style={[styles.td, styles.tdFirst]}>
                    <Text style={styles.tdText}>
                        52주 달러지수
                    </Text>
                </View>
                <View style={styles.td}>
                    <TouchableOpacity 
                        style={[styles.tdText, styles.tdTextInput]}
                        disabled={true}
                    >
                        <Text style={[styles.tdText, styles.textDisabled]}>
                        {dis.y_dxy}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.hr}></View>
            <View style={styles.tr}>
                <View style={[styles.td, styles.tdFirst]}>
                    <Text style={styles.tdText}>
                        현재 환율
                    </Text>
                </View>
                <View style={styles.td}>
                    <TextInput 
                        style={[styles.tdText, styles.tdTextInput]}
                        onChangeText={val=>setP_dw(val)}
                        placeholder=''
                        keyboardType="numeric"
                        returnKeyType="done"
                    />
                </View>
            </View>
            <View style={styles.tr}>
                <View style={[styles.td, styles.tdFirst]}>
                    <Text style={styles.tdText}>
                        현재 달러지수
                    </Text>
                </View>
                <View style={styles.td}>
                    <TextInput 
                        style={[styles.tdText, styles.tdTextInput]}
                        onChangeText={val=>setP_dxy(val)}
                        placeholder=''
                        keyboardType="numeric"
                        returnKeyType="done"
                    />
                </View>
            </View>
            <View style={[styles.tr, styles.link]}>
                <Text style={styles.ahref} onPress={()=>{link_it('currencies/usd-krw')}}>
                    Investing.com DW
                </Text>
                <Text style={styles.ahref} onPress={()=>{link_it('indices/usdollar')}}>
                    Investing.com DXY
                </Text>
            </View>
            <View style={styles.hr}></View>
            <TouchableOpacity style={styles.btn} onPress={()=>{goToResult()}}>
                <Text style={styles.btnText}>결과 확인</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        alignItems: 'center'
    },
    tr: {
        width: 320,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    td: {
        flex: 1,
        textAlign: 'right',
        paddingLeft: 20,
    },
    tdFirst: {
        borderRightColor: '#aaa',
        borderRightWidth: 1,
    },
    tdText: {
        fontSize: 20,
    },
    tdTextInput: {
        // borderWidth: 1,
        // borderRightWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#aaa',
        // borderRadius: 10,
        padding: 8,
        textAlign: 'right',
    },
    textDisabled: {
        textAlign: 'right',
    },
    link: {
        justifyContent: 'space-around',
        marginTop: 20,
    },
    ahref: { fontSize: 17, },
    btn: {
        width: 120,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#fdc453',
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },

    hr: {
        width: 280,
        borderTopWidth: 1,
        borderTopColor: '#bbb',
        marginTop: 5,
        marginBottom: 20,
    }
})