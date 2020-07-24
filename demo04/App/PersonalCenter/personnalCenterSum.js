import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    StatusBar,
    Image,
    StyleSheet,
} from 'react-native';
import Bottom_nav from '../Accessories/Nav/bottom';

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('light-content');


export default class PersonalCenterSum extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#43949B", }}>
                <ImageBackground source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/96/47/5d9e8f31ccd2e_610.jpg" }} style={{ width: '100%', height: 250, tintColor: "#ffffff90", }} >
                    {/*返回与设置 */}

                    <View style={{ width: '100%', position: "absolute", backgroundColor: "#00000090", height: '100%', }}>

                    </View>
                    {/* 用户信息 */}
                    <View style={[styles.userBox]}>
                        <View style={{ width: '40%', alignItems: "center" }}>
                            <Image style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }} source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/96/47/5d9e8f31ccd2e_610.jpg" }} />
                            <Text style={{ padding: 5, fontSize: 20 }}>aboutJOY</Text>
                            <Text style={{ color: '#999999', fontSize: 15, }}>人无利，不可交也</Text>
                        </View>
                        <View style={{ width: '60%', alignItems: "flex-end", paddingRight: 20, }}>
                            <View style={{ height: '100%', justifyContent: "center", alignItems: "flex-end" }}>
                                <Text style={[styles.vipText]}>LV1  查看收益</Text>
                                <View style={{ flexDirection: "row" }}>
                                    <Text style={[styles.textStyle]}>20关注</Text>
                                    <Text style={[styles.textStyle]}>20粉丝</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <Text style={{ color: "red" }}>HomeScreen</Text>
                </ImageBackground>
                <Bottom_nav />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    userBox: {
        backgroundColor: "#fff",
        bottom: 0,
        marginTop: 150,
        height: 100,
        width: "100%",
        flexDirection: "row",
    },
    vipText: {
        color: '#fff',
        backgroundColor: "#999999",
        paddingVertical: 8,
        width: 90,
        fontSize: 10,
        borderRadius: 100,
        textAlign: "center",
    },
    textStyle: {
        paddingTop: 10,
        padding: 5,
        fontSize: 15,
        color: "#999999"
    },
})