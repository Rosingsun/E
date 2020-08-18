import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    StatusBar,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
} from 'react-native';
import PersonalCenterNavigation from '../navigation/PersonalNavigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {storage} from '../Accessories/storage/index'
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

export default class PersonalCenterSum extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username:'',
          PersonalSignature:'',
          head:'',
        }
    }

    componentDidMount() {
        storage.load('userInfo', (data) => {
            this.setState({
                username:data.username,
                PersonalSignature:data.PersonalSignature,
                head:data.head,
                
            })
            
          })
        }

    render() {
        return (
            <ScrollView style={{ height: '80%' }}
           

                onScroll={(event) => {
                    {
                    }
                }}
                scrollEnabled={false}
            >
                <View style={{ flex: 1, backgroundColor: "red", }}>
                    {/* <ScrollView> */}
                    <ImageBackground source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/96/47/5d9e8f31ccd2e_610.jpg" }} style={{ width: '100%', height: 250, tintColor: "#ffffff90", }} >
                        {/*返回与设置 */}
                        <View style={{ position: "absolute", width: "85%", marginLeft: '8%', zIndex: 1, marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                            <FontAwesome name='angle-left' size={30} color="#fff" />
                            <Feather name='more-horizontal' size={30} color="#fff"

                                onPress={() => {
                                    this.props.navigation.navigate("UserSetting")
                                }} />
                        </View>
                        <View style={{ width: '100%', position: "absolute", backgroundColor: "#00000095", height: '100%', }}>
                        </View>
                        {/* 用户信息 */}
                        <View style={[styles.userBox]}>

                            <View style={{ width: '40%', alignItems: "center" }}>
                                <Image style={[styles.userHead]} source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/96/47/5d9e8f31ccd2e_610.jpg" }} />
                                <FontAwesome style={{ position: "absolute", top: 25, right: 30, zIndex: 1 }} name='camera' size={20} color="#2F3843"
                                    onPress={() => {
                                        this.props.navigation.navigate("changePersonalInfoMation")
                                    }}
                                />
                                <Text style={{ fontSize: 20 }}>{this.state.username}</Text>
                                <Text style={{ color: '#999999', fontSize: 15, }}>{this.state.PersonalSignature}</Text>
                            </View>
                            <View style={{ width: '60%', alignItems: "flex-end", paddingRight: 20, }}>
                                <View style={{ position: "absolute", top: 5, right: 0, backgroundColor: "#999999", width: 65,paddingLeft:5,paddingVertical:5, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}>
                                    <Text
                                        onPress={() => {
                                            this.props.navigation.navigate("changePersonalInfoMation")
                                        }}
                                    >编辑资料</Text>
                                </View>
                                <View style={{ height: '100%', justifyContent: "center", alignItems: "flex-end", marginTop: 24 }}>
                                    <Text style={[styles.vipText]}
                                        onPress={() => {
                                            // this.props.navigation.navigate("renderCalendarWithCustomMarkingType")
                                            this.props.navigation.navigate("mylevel")
                                        }}
                                    >LV2  查看收益</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={[styles.textStyle]}>20关注</Text>
                                        <Text style={[styles.textStyle]}>20粉丝</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={{ width: '100%', height: '80%', backgroundColor: "red" }}>
                        <PersonalCenterNavigation />
                    </View>
                </View>
            </ScrollView>
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
        backgroundColor: "#fff",
        bottom: 0,
        marginTop: 150,
        height: 100,
        width: "100%",
        flexDirection: "row",
    },
    vipText: {
        color: '#fff',
        backgroundColor: "#2F3843",
        paddingVertical: 8,
        width: 80,
        fontSize: 10,
        borderRadius: 100,
        textAlign: "center",
    },
    textStyle: {
        paddingTop: 8,
        padding: 5,
        fontSize: 15,
        color: "#999999"
    },
})
