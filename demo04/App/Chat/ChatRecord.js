
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Button,
    Dimensions,
    TouchableWithoutFeedback,
    FlatList,
    StatusBar
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { TextInput, Button } from 'react-native-paper';
// import { text } from 'express';


StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('light-content');



const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.search_container]}>
                    <View style={[styles.inputBox]}>
                        <FontAwesome style={{ lineHeight: 40, marginLeft: 10}} name={'search'} size={18} color={'#FFB16C'} />
                        <TextInput
                            placeholder="搜索"
                            style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft:10, width: '79%' }}>
                        </TextInput>
                        <AntDesign style={{ lineHeight: 40 }} name={'closecircle'} size={18} color={'#6C6C6C'} />
                    </View>
                    <View>
                        <TouchableOpacity
                            style={styles.button}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>取消</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.text}>
                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={[
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                            {
                                userName: 'aboutJOY',
                                userWord: '好突然',
                                userHead: './img/a.jpg',
                                create_Data: '7月18日'
                            },
                        ]}
                        renderItem={({ item }) =>
                            <TouchableWithoutFeedback onPress={() => {
                                Alert.alert("your press the text");
                            }}>
                                <View style={styles.button1}>
                                        {/* <Image style={{ height: 50 * biLi, width: 50 * biLi, borderRadius: 20, marginLeft: "5%" }} source={{ uri: item.userHead }} /> */}
                                        <Image style={{ height: 45 * biLi, width: 45 * biLi, borderRadius: 30, marginLeft:15}} source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
                                    <View style={{  marginHorizontal: 10,height:'100%',paddingVertical:5, }}>
                                        <Text style={{ fontSize: 15, color: "#000",paddingBottom:10 }}>{item.userName}</Text>
                                        <Text style={{ fontSize: 12, color: "#999999" }}>{item.userWord}</Text>
                                    </View>
                                    <View style={{ position: "absolute", right: 20, top: 10 }}>
                                        <Text style={{ fontSize: 12, color: "#999999" }}>{item.create_Data}</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>}
                    />
                </View>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43949B",
    },
    inputBox: {
        backgroundColor: "#fff",
        width: 313 * biLi,
        borderRadius: 15,
        padding: 0,
        height: 44 * biLi,
        fontSize: 15,
        flexDirection: "row",
    },
    search_container: {
        marginTop: '10%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%"
    },
    button: {
        backgroundColor: "#FFB16C",
        borderRadius: 15,
        width: 66 * biLi,
        height: 44 * biLi,
        justifyContent: "center",
        alignItems: "center",
    },
    button1: {
        width:'100%',
        height: 63 * biLi,
        backgroundColor: "#fff",
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 15,
        flexDirection: "row",
        marginTop: 10,
    },
    text: {
        marginTop: 14,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
        height:590*biLi,
    },

})
