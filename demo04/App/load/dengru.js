import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableHighlight,
    Dimensions, TouchableWithoutFeedback, StatusBar, Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('light-content');
const { width, scale } = Dimensions.get('window');
const biLi = width * scale / 1125;

export default function dengru({navigation}) {
        return (
            <View style={styles.container}>

                {/* 文字 欢迎词 名字 */}
                <View style={styles.topText}>
                    {/* 标签按钮 */}
                    <View style={{ paddingTop: 60, width: 40 }}>
                            <FontAwesome name='angle-left' size={30} color="white" backgroundColor=" #43949B00 "
                            onPress={()=>{
                                navigation.navigate('MainFadeView')
                            }}
                            />
                    </View>
                    <View>
                        <Text style={{ fontSize: 50, color: '#FFFFFF', paddingTop: 20 }}>欢迎来E</Text>
                        <Text style={{ fontSize: 15, color: '#FFFFFF', paddingTop: 6 }}>阿巴，阿巴，阿巴阿巴</Text>
                    </View>
                </View>
                {/* 按钮打包 */}
                <View style={{ position:"absolute" ,bottom:"17%",right:"6%"}}>
                    <View style={styles.buttonLocation}>
                        <View>
                            <TouchableHighlight activeOpacity={0.5}
                                style={[styles.touchButtonup]}
                                onPress={() => { 
                                    navigation.navigate('Search')
                                 }}
                                
                                >
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>登入</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight activeOpacity={0.5}
                                style={[styles.touchButtonnew]}
                                onPress={() => {navigation.navigate('Register') }}>
                                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>注册</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                {/* 底部文字 */}
                <View style={styles.downText}>
                    <Text style={{ fontSize: 15, color: 'white', width: 65 * biLi, height: 40 * biLi }}>_________</Text>
                    <Text style={{ fontSize: 15, color: 'white' }}>E起旅行让终点更温暖</Text>
                    <Text style={{ fontSize: 15, color: 'white', width: 65 * biLi, height: 40 * biLi }}>_________</Text>
                </View>


            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43949B",
    },

    word: {
        marginLeft: 24 * biLi,
        marginTop: 119 * biLi,

    },
    touchButtonup: {
        height: 35 * biLi,
        width: 90 * biLi,
        borderRadius: 3,
        backgroundColor: '#FFB16C',
        justifyContent: 'center',

    },
    touchButtonnew: {
        height: 35 * biLi,
        width: 90 * biLi,
        borderRadius: 3,
        backgroundColor: '#FFB16C',
        justifyContent: 'center'
    },
    topText: {
        paddingTop: "15%",
        justifyContent: 'center',
        paddingLeft: '6%',
        height: "17%"
    },
    buttonLocation: {
        alignItems: 'flex-end',
        height: 120 * biLi,
        justifyContent: 'space-around',
    },
    downText: {
        position:"absolute",
        width:"80%",
        left:'10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        bottom:'5%',
        paddingTop: 60 * biLi,
    }
})