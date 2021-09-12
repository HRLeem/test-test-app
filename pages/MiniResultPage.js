import React,{useState, useEffect} from 'react'
import { StyleSheet, Text, View,TouchableOpacity, Dimensions } from 'react-native'

import Loading from '../components/Loading'
import MiniTable from '../components/MiniTable'

const windowWidth = Dimensions.get('window').width;

export default function MiniResultPage({navigation, route}) {

    const [ state, setState ] = useState()
    const [ makeState, setMakeState ] = useState()
    const [ ready, SetReady ] = useState(false)
    const [ show, setShow ] = useState()
useEffect(()=> {
    navigation.setOptions({
        title: "Today's Result"
    })
    if (!state) {
        let pull_it = route.params;
        console.log(pull_it)
        setState(pull_it);
        // 달러 갭 비율, 적정환율 계산
        const y_d_gap_rate = Math.round(pull_it.y_dxy/pull_it.y_dw*100*100)/100;
        const p_d_gap_rate = Math.round(pull_it.p_dxy/pull_it.p_dw*100*100)/100;
        const profit_rate = Math.round(pull_it.p_dxy/y_d_gap_rate*100*100)/100;
        const result = {
            'y_d_gap_rate' : y_d_gap_rate,
            'p_d_gap_rate': p_d_gap_rate,
            'profit_rate' :profit_rate
        }
        setMakeState(result)

            SetReady(true);
    }
    }, [])

    // self.p_d_gap_rate = round(self.p_dxy / self.p_dw * 100, 2)
    //     self.y_d_gap_rate = round(self.y_dxy / self.y_dw * 100, 2)
    //     return

    // def profit_rate(self):
    //     # 적정환율 = 현재 달러 지수 / 52주 평균 달러 갭 비율 * 100
        
    return (!ready)? <Loading/> : (
        <View style={styles.container}>
            <View style={styles.forCenter}>
            {
                show == 'detail' ? (
                    <MiniTable isSimple={false} state={state} makeState={makeState}/>
                ): (
                    show == 'simple'? (
                        <MiniTable isSimple={true} state={state} makeState={makeState}/>
                    ) : ( <View></View> )
                )
            }
            </View>
            <TouchableOpacity style={[styles.btn, styles.detail]} onPress={()=>setShow('detail')}>
                <Text style={styles.btnText}>자세히 보기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>setShow('simple')}>
                <Text style={styles.btnText}>간단히 보기</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
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
    forCenter: {
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center'
    }

    
})