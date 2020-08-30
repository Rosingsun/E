import React, { Component, useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    FlatList,
    Switch,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { TextInput, Button } from 'react-native-paper';
// import { text } from 'express';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
// export default class Search extends Component {
export default ChatInfoMation = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    // const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={[styles.container]}>
            <View style={[styles.top]}>
                <View style={[styles.nav_container]}>
                    <View style={{ flexDirection: "row" }}>
                        <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                            navigation.goBack();
                        }} />
                    </View>
                    <Text style={{ color: "#000", fontSize: 20, marginRight: 20 }}>聊天信息</Text>
                    <View>
                    </View>
                </View>
            </View>

            <View style={styles.text}>
                <TouchableWithoutFeedback onPress={() => {
                    Alert.alert("your press the text");
                }}>
                    <View style={styles.button1}>
                        <Image style={{ height: 55 * biLi, width: 55 * biLi, borderRadius: 30, marginLeft: 15 }} source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png'
                        }} />
                        <View style={{ marginHorizontal: 10, height: '90%', paddingVertical: 10, }}>
                            <Text style={{ fontSize: 15, color: "#000", paddingBottom: 5 }}>云生</Text>
                            <Text style={{ fontSize: 10, color: "#999999" }}>简介：暂无介绍</Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }} onPress={() => {
                    Alert.alert("这是通往天堂的路")
                }} />
            </View>
            <View style={{ marginTop: 10 }}>
                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>查找聊天记录</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }} onPress={() => {
                        navigation.navigate("ChatRecord")
                    }} />
                </View>
                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>消息免打扰</Text>
                    <Switch
                        trackColor={{ false: "#999999", true: "#6C9575" }}
                        style={{
                            transform: [{ scale: 1.2 }],
                            position: "absolute",
                            right: 13,
                            shadowColor:"#66666690",
                        }}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>清空聊天记录</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }}
                        onPress={() => {
                            setTimeout(() => {
                                    Alert.alert("消息清空完毕")
                            }, 300);
                        }}
                    />
                </View>
                <View style={styles.button}>
                    <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>投诉</Text>
                    <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }}
                        onPress={() => {
                            navigation.navigate("complaint");
                        }} />
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
        position: "absolute",
        top: 0,
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '11%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
    button1: {
        width: '100%',
        height: 63 * biLi,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 10,
        height: 78 * biLi,
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
    text: {
        marginTop: 110,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
        height: 80 * biLi,
        borderRadius: 15,
    }
})
