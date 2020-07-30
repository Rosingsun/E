import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default UserSetting = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.top]}>
                <View style={[styles.nav_container]}>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                            Alert.alert("返回")
                        }} />
                    </View>
                    <Text style={{ color: "#000", fontSize: 20, marginRight: 25 }}>设置</Text>
                    <View>

                    </View>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                Alert.alert("your press the text");
            }}>

                <View style={styles.clean}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>清除缓存</Text>
                    <Text style={{ fontSize: 12, color: '#999999', marginRight: 20 }}>7.64MB</Text>

                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={() => {
                Alert.alert("your press the text");
            }}>

                <View style={styles.new}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>检测新版本</Text>
                    <Text style={{ fontSize: 12, color: '#999999', marginRight: 20 }}>1.00.24</Text>

                </View>

            </TouchableWithoutFeedback>

            <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }} onPress={() => {
                Alert.alert("这是通往天堂的路")
            }} />
            {/* </View> */}
            <View style={{ marginTop: 10 }}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>隐私政策</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }} onPress={() => {
                        Alert.alert("这是通往查找聊天记录的路")
                    }} />
                </View>

                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>意见反馈</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }}
                        onPress={() => {
                            Alert.alert("这是通往清空聊天记录的路")
                        }}
                    />
                </View>

                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>关于</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }}
                        onPress={() => {
                            Alert.alert("这是通往清空聊天记录的路")
                        }}
                    />
                </View>

            </View>
        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '6%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: 'center',
        marginLeft: "5%",
    },
    button: {
        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 10,

    },
    clean: {

        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 30,
        justifyContent: 'space-between',
    },
    new: {
        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 10,
        justifyContent: 'space-between',
    }
})
