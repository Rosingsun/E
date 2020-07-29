import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    StatusBar,
    Image,
    StyleSheet,
    ScrollView,
} from 'react-native';
// import Bottom_nav from '../Accessories/Nav/bottom';
import PersonalCenterNavigation from '../daohangxiding/PersonalNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feather from 'react-native-vector-icons/Feather';


// import { ScrollView } from 'react-native-gesture-handler';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

export default class PersonalCenterSum extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", }}>
                {/* <ScrollView> */}
                <ImageBackground source={{ uri: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595925017886&di=bd63cd65db75bc8f3f44adaa4f88d08b&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fent%2Fcrawl%2F20170904%2FRwyS-fykqmrv9115948.jpg" }} style={{ width: '100%', height: 250, }} >
                    <View style={{position:"absolute",width:"85%",marginLeft:'8%',zIndex:1,marginTop:30,flexDirection:"row",justifyContent:"space-between"}}>
                        <FontAwesome name='angle-left' size={32} color="white"/>
                        <Feather name='more-horizontal' size={32} color="white" />
                    </View>
                    {/*返回与设置 */}
                    <View style={{ width: '100%', position: "absolute", backgroundColor: "#00000050", height: '100%', }}>
                    </View>
                    {/* 用户信息 */}
                    <View style={[styles.userBox]}>
                        <View style={{ width: '30%', alignItems: 'flex-start',marginLeft:'8%' }}>
                            <Image style={[styles.userHead]} source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/96/47/5d9e8f31ccd2e_610.jpg" }} />
                            <Text style={{ fontSize: 20,}}>aboutJOY</Text>
                            <Text style={{ color: '#999999', fontSize: 15,marginBottom:5 }}>人无趣，不可交也</Text>
                        </View>
                        <View style={{ width: '56%', alignItems: "flex-end",marginRight:'6%'}}>
                           
                            <View style={{ height: '100%', alignItems: "flex-end" }}>
                            <View style={{flexDirection:'row',marginTop:5,alignItems:'center'}}>
                            <Feather  name='mail' size={23} color="#484848"/>
                            <Ionicons style={{marginLeft:26,}} name='eye-outline' size={25} color="#484848"/>
                            </View>
                                <Text style={[styles.vipText]}>LV1  查看收益</Text>
                                <View style={{ flexDirection: "row",marginBottom:5 }}>
                                    <Text style={[styles.textStyle]}>20关注</Text>
                                    <Text style={[styles.textStyle]}>20粉丝</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ width: '100%', height: '100%', backgroundColor: "red" }}>
                    <PersonalCenterNavigation />
                </View>
                {/* </ScrollView> */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    userHead: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -50,
        borderWidth: 2,
        borderColor: "#fff"
    },
    userBox: {
        backgroundColor: "#FFFFFF",
        bottom: 0,
        marginTop: 150,
        height: 160,
        width: "100%",
        flexDirection: "row",
    },
    vipText: {
        color: '#fff',
        backgroundColor: "#999999",
        paddingVertical: 8,
        width: 90,
        height:30,
        fontSize: 10,
        borderRadius: 100,
        textAlign: "center",
        marginTop:5
   
       
    },
    textStyle: {
        paddingTop: 10,
        paddingLeft: 15,
        fontSize: 15,
        color: "#999999",
        marginBottom:10
    },
})
