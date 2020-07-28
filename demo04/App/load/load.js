import React, { Component } from 'react';
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

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchPass: '',
        }
    };

    render() {
        return (
            <View style={[styles.container]}>
                {/* <StatusBar
                    barStyle='light-content'
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true} /> */}
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'leftcircle'} size={30} color={'#fff'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{ color: "#fff", fontSize: 20 }}>登陆</Text>
                        <View>
                            <Entypo name={'home'} size={25} color={'#fff'} onPress={() => {
                                this.props.navigation.navigate("dengru");
                            }} />
                        </View>
                    </View>
                </View>
                <View style={[styles.imgBox]}>
                    <Image style={{ height: 151, width: 151 }} source={require('../img/LOGO.png')} />
                    <Text style={{ color: "#fff", fontSize: 20, marginTop: 10 }}>E交换，E旅游，E起玩</Text>
                </View>
                {/* 登陆框 */}
                <View style={[styles.userShopBox]}>
                    <View style={{}}>
                        <View style={[styles.inputBox]}>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='请输入账号'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ searchText: text });
                                    }} />
                            </View>
                        </View>
                        <View style={[styles.inputBox]}>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.password}
                                    placeholder='请输入密码'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ searchPass: text });
                                    }} />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this.props.navigation.navigate('App')
                                fetch('http://10.0.2.2:3000/insert/', {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                        a: this.state.searchText,
                                        b: this.state.searchPass
                                    })
                                })
                                    .then((response) => {
                                    })
                                    .catch((error) => {
                                        console.log(error);
                                    });
                            }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>登陆</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "#999999", fontSize: 15, marginTop: 20, marginLeft: "5%" }}>忘记密码</Text>
                            <Text style={{ color: "#999999", fontSize: 15, marginTop: 20, marginRight: "5%" }}
                            onPress={()=>{
                                this.props.navigation.navigate("Register");
                            }}
                            
                            >注册账号</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#43949B"
    },
    top: {
        position: "absolute",
        top: 0,
        height: (90) * biLi,
        width: "100%",
        backgroundColor: "#FFB16C",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '5%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
    imgBox: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 130,
    },
    userShopBox: {
        width: "90%",
        marginTop: 10 * biLi,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        height: 325 * biLi,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
    },
    password: {
        width: "80%",
        backgroundColor: "#EFEFEF",
        marginTop: 5,
        marginLeft: 10,
    },
    input: {
        width: "80%",
        backgroundColor: "#EFEFEF",
        marginTop: 5,
        marginLeft: 10,
    },
    button: {
        height: 52 * biLi,
        width: 312 * biLi,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFB16C",
        padding: 10,
        marginTop: 14,
        borderRadius: 10,
        marginLeft: "4%"
    },
    inputBox: {
        height: 64 * biLi,
        width: 346 * biLi,
        backgroundColor: "#EFEFEF",
        borderRadius: 32,
        marginTop: 15
    }
})
