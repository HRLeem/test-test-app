import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import axios from 'axios';

// Components or Data
// import datas from '../data.json'
import Loading from '../components/Loading'
import Table from '../components/Table';

export default function ResultPage({navigation, route}) {
    console.disableYellowBox = true;

    const [detail, setDetail] = useState([]);
    const [simple, setSimple] = useState([]);
    const [ready, setReady] = useState(true);
    const [show, setShow] = useState('')
    const [did, setDid] = useState(false)
    const for_map = ['dw', 'dxy', 'd_gap_rate', 'profit_rate']

    useEffect(() => {
        navigation.setOptions({
            title: '결과'
        })
        if ( !did ) {
            async function api() {
                try {
                    const url = 'http://172.30.66.19:5000/crawl'
                    const response = await axios.get(url);
                    const data = await response['data']
                    console.log(data)
                    let result = set_data(data)
                    setDetail(result[0]);
                    setSimple(result[1])
                    // simple
                    setDid(true)
                    setReady(false)
                } catch (error) {
                    console.log(-1);
                    console.log(error)
                }
            }
            // detail
            api()
        }
    }, []);

    const set_data = (data) => {
        let detail = data;
        let simple = []
        detail.map((val, i) => {
            if (i!==0) {
                let b = val[1] < val[2] ? '___0' : '0___'
                let ox = b == val[3] ? 'ㅇ' : 'X';
                detail[i].splice(2, 0, b);
                simple.push([val[0], ox]);
            }
        })
        return [detail, simple];
    }

    // const set_simple = () => {
    //     state.map()
    // }

    const apitest = async () => {
        try {
            const url = 'http://115.68.95.177:5000/crawl'
            const response = await axios.get(url);
            const result = response['data']
            console.log(result)
            // result.map((val) => console.log(val))
        } catch (error) {
            console.log(-1);
            console.log(error)
        }
    }

    // const apitest = new Promise ((resolve) => {
    //     const url = 'http://172.30.66.19:5000/crawl'
    //     const response = axios.get(url);
    //     const result = response['data']
    //     console.log(result)
    //     // result.map((val) => console.log(val))
    //     resolve(result);
    //     // setTest(result);
    // })
    
    const set_show = (how) => {
        setShow(how)
    }

    return ready? <Loading/> : (
        <View style={styles.container}>
            <View style={styles.table}>
            {
                show == 'detail'? (
                detail.map((val, i) => {
                    return ( <Table key={i} content={val}/> )
                })
                ) : (
                    show == 'simple'? (
                        simple.map((val, i) => {
                            return ( <Table key={i} content={val}/> )
                        })
                    ) : (
                        <View></View>
                    )
                )
            }
                <View style={styles.btnArea}>
                    <TouchableOpacity style={[styles.btn, styles.detail]} onPress={()=>set_show('detail')}>
                        <Text style={styles.btnText}>자세히 보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>set_show('simple')}>
                        <Text style={styles.btnText}>간단히 보기</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    table: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },

    btnArea: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    btn: {
        width: 150,
        height: 60,
        marginTop: 30,
        borderRadius: 20,
        backgroundColor: "#fdc453",
        justifyContent: 'center',
        alignItems:'center'
    },
    detail: {
        backgroundColor: 'coral'
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        letterSpacing: 3,
        fontWeight: '700',
    },
})