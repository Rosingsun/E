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

 // 监听键盘
        // this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow);
        // this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide);

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tipsShowKey: "none",
            secChoiceBoy: "#5DDA6B",
            secChoiceGirl: "#5DDA6B00",
            choiceSex: "boy",
            borderWidth: "0",
            password: "",
            passwordCheck: "",
            username: "",
        }
    };  
    _onClickRegister = () => {
        var navigation = this.props.navigation;
        fetch('http://192.168.56.1:3000/users/reg', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password

            })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.code == "200") {
                alert("注册成功")
                // navigation.navigate("App");
            } else if (json.code == "400") {
                alert("用户名或密码已存在")
            }
        })
    };

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    barStyle='dark-content'
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true} />
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20 }}>注册</Text>
                        <View>
                            <Entypo name={'home'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.navigate("dengru");
                            }} />
                        </View>
                    </View>
                </View>
                <View style={[styles.imgBox]}>
                    {/* boy */}
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState({ secChoiceGirl: "#5DDA6B00", secChoiceBoy: "#5DDA6B", choiceSex: "boy" })
                        }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ height: 100, width: 100 }} source={require('../img/login/theboy.png')} />
                            <AntDesign name={'checkcircle'} size={25} color={this.state.secChoiceBoy} style={{ position: "absolute", right: 0, bottom: 30, }} />
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 5 }}>男孩</Text>

                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            this.setState({ secChoiceGirl: "#5DDA6B", secChoiceBoy: "#5DDA6B00", choiceSex: "girl" })
                        }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image style={{ height: 100, width: 100, }} source={require('../img/login/thegirl.png')} />
                            <AntDesign name={'checkcircle'} size={25} color={this.state.secChoiceGirl} style={{ position: "absolute", right: 0, bottom: 30, }} />
                            <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 5 }}>女孩</Text>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                {/* 登陆框 */}
                <View style={[styles.userShopBox]}>
                    <View style={{}}>
                        <View style={[styles.inputBox, { marginTop: 20 }]}>
                            <Text style={{ position: "absolute", top: -30, fontSize: 20 }}>用户名</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 15 }} name={'user'} size={25} color={'#999999'} />
                                <TextInput
                                    style={styles.input}
                                    placeholder='请输入账号'
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ username: text });
                                    }} />
                            </View>
                        </View>
                        <View style={[styles.inputBox]}>
                            <Text style={{ position: "absolute", top: -30, fontSize: 20 }}>密码</Text>
                            <View style={{ flexDirection: "row" }}>
                                <FontAwesome style={{ alignItems: "center", marginLeft: 15, marginTop: 18 }} name={'lock'} size={25} color={'#999999'} />
                                <TextInput
                                password={true}
                                    style={styles.password}
                                    placeholder='请输入密码'
                                    secureTextEntry={true}
                                    placeholderTextColor='#999999'
                                    onChangeText={(text) => {
                                        this.setState({ password: text });
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
                                    secureTextEntry={true}
                                    placeholderTextColor='#999999'
                                    password={true}
                                    onChangeText={(text) => {
                                        if (text != this.state.password) {
                                            this.setState({ tipsShowKey: "flex" });
                                        } else {
                                            this.setState({ tipsShowKey: "none" });
                                        }

                                    }} ></TextInput>
                            </View>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ display: this.state.tipsShowKey }}>
                                <View style={{ width: 250, height: 25, backgroundColor: "#999999", alignItems: 'center', justifyContent: 'center', borderRadius: 3, marginTop: 10 }}>
                                    <Text style={{ color: '#FFFFFF' }}>两次密码请保持一致</Text>
                                </View>
                                <View style={styles.arrow}></View>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => {
                                    this._onClickRegister();
                                }}>
                                <Text style={{ fontSize: 20, color: "#fff" }}>确认</Text>
                            </TouchableOpacity>
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
        backgroundColor: "#fff"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
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
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: "center",
        marginTop: 20,
        flexDirection: 'row',
    },
    userShopBox: {
        width: "90%",
        marginTop: 20 * biLi,
        backgroundColor: "#ffffff",
        borderRadius: 15,
        height: 350 * biLi,
        // justifyContent: "center",
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
        backgroundColor: "#6C9575",
        borderRadius: 10,
        marginTop: 10
    },
    inputBox: {
        height: 64 * biLi,
        width: 346 * biLi,
        backgroundColor: "#EFEFEF",
        borderRadius: 3,
        marginTop: 40
    },
    arrow: {
        marginLeft: 180,
        width: 10,
        height: 10,
        borderStyle: 'solid',
        // borderWidth:8,
        marginTop: -2,
        borderTopColor: "#999999",//下箭头颜色
        borderBottomColor: "#FFFFFF00",
        borderRightColor: "#FFFFFF00",
        borderLeftColor: "#FFFFFF00",
    },
})
