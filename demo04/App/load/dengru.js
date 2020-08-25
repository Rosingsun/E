import React, { Component } from 'react';
import {
    View, StyleSheet, Text, TouchableHighlight,
    Dimensions, TouchableWithoutFeedback, StatusBar, Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width, scale } = Dimensions.get('window');
const biLi = width * scale / 1125;

export default function dengru({navigation}) {
        return (
            <View style={styles.container}>
<View style={{height:150,width:150,borderRadius:100,top:-60,left:-60,backgroundColor:"#FAAF3D",position:"absolute"}}></View>
<View style={{height:123,width:123,borderRadius:100,top:'40%',right:60,backgroundColor:"#2F3843",position:"absolute"}}></View>
<View style={{height:300,width:300,borderRadius:300,top:'45%',left:-150,backgroundColor:"#6C9575",position:"absolute"}}></View>
                {/* 文字 欢迎词 名字 */}
                <View style={styles.topText}>
                    {/* 标签按钮 */}
                    <View style={{ paddingTop: 60, width: 40 }}>
                            <FontAwesome name='angle-left' size={30} color="white" backgroundColor=" #43949B00 "
                            onPress={()=>{
                                navigation.navigate('bottomTab')
                            }}
                            />
                    </View>
                    <View>
                        <Text style={{ fontSize: 50, color: '#000000', paddingTop: 20 }}>欢迎来E</Text>
                        <Text style={{ fontSize: 15, color: '#000000', paddingTop: 6 }}>E交换，E旅行，E起玩</Text>
                    </View>
                </View>
                {/* 按钮打包 */}
                <View style={{ position:"absolute" ,bottom:"17%",right:"6%"}}>
                    <View style={styles.buttonLocation}>
                        <View>
                            <TouchableHighlight activeOpacity={0.5}
                                style={[styles.touchButtonup]}
                                onPress={() => { 
                                    navigation.navigate('load')
                                 }}
                                >
                                <Text style={{ fontSize: 20, color: '#2F3843', textAlign: 'center' }}>登入</Text>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight activeOpacity={0.5}
                                style={[styles.touchButtonnew]}
                                onPress={() => {navigation.navigate('Register') }}>
                                <Text style={{ fontSize: 20, color: '#2F3843', textAlign: 'center' }}>注册</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                {/* 底部文字 */}
                <View style={styles.downText}>
                    <Text style={{ fontSize: 15, color: '#000000', width: 65 * biLi, height: 40 * biLi }}>_________</Text>
                    <Text style={{ fontSize: 15, color: '#000000' }}>E起旅行让终点更温暖</Text>
                    <Text style={{ fontSize: 15, color: '#000000', width: 65 * biLi, height: 40 * biLi }}>_________</Text>
                </View>


            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
    },

    word: {
        marginLeft: 24 * biLi,
        marginTop: 119 * biLi,

    },
    touchButtonup: {
        height: 35 * biLi,
        width: 90 * biLi,
        borderRadius: 3,
        backgroundColor: "#fff",
        borderWidth:3,
        borderColor:"#2F3843",
        justifyContent: 'center',

    },
    touchButtonnew: {
        height: 35 * biLi,
        width: 90 * biLi,
        borderRadius: 3,
        backgroundColor: "#fff",
        borderWidth:3,
        borderColor:"#2F3843",
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