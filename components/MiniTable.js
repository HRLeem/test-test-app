import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const MiniTable = ( {isSimple, state, makeState} ) => {
    // const [state, setState] = useState(s);
    // const [makeState, setMakeState] = useState();
    // useEffect(()=> {
    //     setState(s);
    //     setMakeState(ms);
    // })
    return (
        <View>
            {
                isSimple? (
                    <View style={[styles.table, styles.tableSimple]}>
                            <View style={styles.tr}>
                                <View style={styles.th}>
                                    <Text style={styles.tdText}>원달러</Text>
                                </View>
                                <View style={styles.td}>
                                    <Text style={styles.tdText}>
                                        { state.y_dw > state.p_dw ? 'O': 'X'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tr}>
                                <View style={styles.th}>
                                    <Text style={styles.tdText}>달러지수</Text>
                                </View>
                                <View style={styles.td}>
                                    <Text style={styles.tdText}>
                                        { state.y_dxy > state.p_dxy ? 'O': 'X'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tr}>
                                <View style={styles.th}>
                                    <Text style={styles.tdText}>달러갭비율</Text>
                                </View>
                                <View style={styles.td}>
                                    <Text style={styles.tdText}>
                                        { makeState.y_d_gap_rate < makeState.p_d_gap_rate ? 'O': 'X'}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.tr}>
                                <View style={styles.th}>
                                    <Text style={styles.tdText}>적정환율</Text>
                                </View>
                                <View style={styles.td}>
                                    <Text style={styles.tdText}>
                                        { makeState.profit_rate > state.p_dw ? 'O': 'X'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                ): (
                    <View style={styles.table}>
                        <View style={styles.tr}>
                            <View style={styles.th}>
                                <Text style={styles.thText}></Text>
                            </View>
                            <View style={styles.th}>
                                <Text style={styles.thText}>52주</Text>
                            </View>
                            <View style={styles.th}>
                                <Text style={styles.thText}>비교</Text>
                            </View>
                            <View style={styles.th}>
                                <Text style={styles.thText}>현재</Text>
                            </View>
                            <View style={styles.th}>
                                <Text style={styles.thText}>바람직한</Text>
                            </View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>원달러</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ state.y_dw }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>
                                    { state.y_dw > state.p_dw ? 'O__': '__O'}
                                </Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ state.p_dw }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>O__</Text>
                            </View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>달러지수</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ state.y_dxy }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>
                                    { state.y_dxy > state.p_dxy ? 'O__': '__O'}
                                </Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ state.p_dxy }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>O__</Text>
                            </View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>달러갭비율</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ makeState.y_d_gap_rate }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>
                                    { makeState.y_d_gap_rate < makeState.p_d_gap_rate ? '__O': 'O__'}
                                </Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ makeState.p_d_gap_rate }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>__O</Text>
                            </View>
                        </View>
                        <View style={styles.tr}>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>적정환율</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ makeState.profit_rate }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>
                                    { makeState.profit_rate > state.p_dw ? 'O__': '__O'}
                                </Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>{ state.p_dw }</Text>
                            </View>
                            <View style={styles.td}>
                                <Text style={styles.detailText}>O__</Text>
                            </View>
                        </View>
                    </View>
                )
            }
        </View>
    )
}

export default MiniTable;

const styles = StyleSheet.create({
    table: {
        width: windowWidth,
        marginBottom: 30,
    },
    tableSimple: { width: 300, },
    tr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    td: {flex: 1},
    th: {flex:1},
    tdText: { fontSize: 23, },
    thText: {
        fontSize: 20,
        textAlign: 'center'
    },
    detailText: {
        fontSize: 18,
        textAlign: 'center'
    }
})