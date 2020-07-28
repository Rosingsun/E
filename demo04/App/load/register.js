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
export default class Register extends Component {
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
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true} />
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'leftcircle'} size={30} color={'#fff'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{ color: "#fff", fontSize: 20 }}>注册</Text>
                        <View>
                            <Entypo name={'home'} size={30} color={'#fff'}
                                onPress={() => {
                                    this.props.navigation.navigate("dengru");
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.imgBox]}>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 100, width: 100 }} source={require('../img/login/theboy.png')} />
                        <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 5 }}>男孩</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Image style={{ height: 100, width: 100 }} source={require('../img/login/thegirl.png')} />
                        <Text style={{ fontSize: 20, color: "#FFFFFF", marginTop: 5 }}>女孩</Text>
                    </View>


                </View>
                {/* 登陆框 */}
                <View style={[styles.userShopBox]}>
                    <View style={{}}>
                        <View style={[styles.inputBox, { marginTop: 20 }]}>
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
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: 250, height: 25, backgroundColor: "#999999", alignItems: 'center', justifyContent: 'center', borderRadius: 3, marginTop: 10 }}>
                                <Text style={{ color: '#FFFFFF' }}>两次密码请保持一致</Text>
                            </View>
                            <View style={styles.arrow}></View>
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
        elevation: 10,
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
        marginTop: 130,
        flexDirection: 'row',
    },
    userShopBox: {
        width: "90%",
        marginTop: 40 * biLi,
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
        backgroundColor: "#FFB16C",
        borderRadius: 10,
        marginTop: -10
    },
    inputBox: {
        height: 64 * biLi,
        width: 346 * biLi,
        backgroundColor: "#EFEFEF",
        borderRadius: 32,
        marginTop: 13
    },
    arrow: {
        marginLeft: 180,
        width: 10,
        height: 10,
        borderStyle: 'solid',
        borderWidth: 10,
        marginTop: -2,

        borderTopColor: "#999999",//下箭头颜色
        borderBottomColor: "#FFFFFF00",
        borderRightColor: "#FFFFFF00",
        borderLeftColor: "#FFFFFF00",
    },
})
