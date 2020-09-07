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
import { storage } from '../Accessories/storage/index'

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class load extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uid: '',
            password: '',
        }
    };

    _onClickLogin = () => {
        var navigation = this.props.navigation;
        fetch('http://192.168.1.151:3000/api/users/login', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid: this.state.uid,
                password: this.state.password
            })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.errno == 0) {
                let obj = {}
                obj.user_id = json.data.user_id
                obj.username = json.data.username
                obj.PersonalSignature = json.data.PersonalSignature
                obj.token = json.data.token
                obj.head = json.data.head
                storage.save('userInfo', obj)
                 
                // 登录成功
                //  console.log(json)
                navigation.navigate("bottomTab");
                alert("成功")
            } else if (json.errno == -1) {
                alert("用户名或密码错误")
            }
        })
    };

    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20 }}>登录</Text>
                        <View>
                            <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.navigate("dengru");
                            }} />
                        </View>
                    </View>
                </View>
                {/* 登陆框 */}
                <View style={[styles.userShopBox]}>
                    {/* <View style={{}}> */}

                        <View style={[styles.inputBox]}>
                            <Text style={{ position: "absolute", top: -30, fontSize: 20 }}>用户名</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='请输入账号'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ uid: text });
                                    }} />
                            </View>
                        </View>

                        <View style={[styles.inputBox]}>
                            <Text style={{ position: "absolute", top: -30, fontSize: 20 }}>密码</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.password}
                                    placeholder='请输入密码'

                                    keyboardType='numeric'
                                    secureTextEntry={true}
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
                                    }} />
                            </View>
                        </View>
                        
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                this._onClickLogin();
                            }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>登录</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row",width:'100%', justifyContent: "space-between" }}>
                            <Text style={{ color: "#000", fontSize: 15, marginTop: 20, marginLeft: "5%" }}>忘记密码</Text>
                            <Text style={{ color: "#000", fontSize: 15, marginTop: 20, marginRight: "5%" }}
                                onPress={() => {
                                    this.props.navigation.navigate("Register");
                                }}

                            >注册账号</Text>
                        </View>
                    </View>
                {/* </View> */}
                {/* <View style={{ width: '100%', height: 100, position: "absolute", bottom: 30 }}>
                    <View style={{ flexDirection: "row", width: '60%', marginLeft: '20%', backgroundColor: "#fff", justifyContent: "space-between" }}>
                        <Text style={{ marginTop: -7 }}>__________</Text>
                        <Text style={{ fontSize: 15, }}>其他方式登录</Text>
                        <Text style={{ marginTop: -7 }}>__________</Text>
                    </View>
                    <View style={{ marginTop: 20, width: '60%', marginLeft: '20%', flexDirection: "row", justifyContent: "space-between" }}>
                        <View style={{ alignItems: "center" }}>
                            <AntDesign name={'wechat'} size={50} color={'#46BB36'} />
                            <Text style={{ fontSize: 12, color: "#6C6C6C", marginTop: 2 }}>微信登录</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <AntDesign name={'weibo-circle'} size={50} color={'#EA5D5C'} />
                            <Text style={{ fontSize: 12, color: "#6C6C6C", marginTop: 2 }}>微博登录</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <Entypo name={'qq-with-circle'} size={50} color={'#5EAADE'} />
                            <Text style={{ fontSize: 12, color: "#6C6C6C", marginTop: 2 }}>QQ登录</Text>
                        </View>
                    </View>
                </View> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    top: {
        height:78,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '8%',
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
        marginTop: 20 * biLi,
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
        height: 50 ,
        width: '100%',
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6C9575",
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    inputBox: {
        height: 50,
        width: '100%',
        // marginLeft:'5%',
        backgroundColor: "#EFEFEF",
        borderRadius: 3,
        marginTop: 40,
    }
})
