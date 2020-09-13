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
import { PersonalTab } from "../App02";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {storage} from '../Accessories/storage/index'
import { itemWidth } from '../discoveryPage/RowThings/SliderEntry';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

export default class PersonalCenterSum extends Component {
    constructor(props) {
        super(props)
        this.state = {
            scrollowAble: true,
            data:[],
            data1:[]
        }
    }

    fetchDate(){
        fetch('http://192.168.1.151:3000/api/follow/getFollow', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token':this.state.token
          },
          body: JSON.stringify({
            user_id:this.state.user_id
        })
        }).then((response) => response.json())
          .then((json) => {
            // console.log(json)
            this.setState({ data: json.data });
          })
          .catch((error) => console.error(error))
      fetch('http://192.168.1.151:3000/api/follow/getFans', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token':this.state.token
          },
          body: JSON.stringify({
            followed_user:this.state.user_id
        })
        }).then((response) => response.json())
          .then((json) => {
            // console.log(json)
            this.setState({ data1: json.data });
          })
          .catch((error) => console.error(error))
        }
    componentDidMount() {
        storage.load('userInfo', (data) => {
            this.setState({
                username:data.username,
                PersonalSignature:data.PersonalSignature,
                head:data.head,
                user_id:data.user_id,
                token:data.token
            })
            this.fetchDate()
          })
        }

    _onScroll(event) {
        let y = event.nativeEvent.contentOffset.y;
        console.log(y);
        // Alert.alert("111")
        if (y >= 180) {
            this.setState({ scrollowAble: false })
        }
    }
    render() {
        const data = this.state.data
        const data1 = this.state.data1
        return (
            <ScrollView
                onScroll={(event) => this._onScroll(event)}
                style={{ height: '80%', backgroundColor: "#6C9575" }}
                scrollEnabled={this.state.scrollowAble}
            >
                <View style={{ flex: 1, backgroundColor: "#6C9575" }}>
                    {/* <ScrollView> */}
                    <ImageBackground source={{ uri:this.state.head}} style={{ width: '100%', height: 250, tintColor: "#ffffff90"}} >
                        {/*返回与设置 */}
                        <View style={{ position: "absolute", width: "85%", marginLeft: '8%', zIndex: 1, marginTop: 30, flexDirection: "row", justifyContent: "space-between" }}>
                            <FontAwesome name='angle-left' size={30} color="#fff" 
                                onPress={()=>{
                                    console.log(this.state.head)
                                }}
                            />
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
                                <Image style={[styles.userHead]} source={{uri:this.state.head}} />
                                <FontAwesome style={{ position: "absolute", top: 25, right: 30, zIndex: 1 }} name='camera' size={20} color="#2F3843"
                                    onPress={() => {
                                        this.props.navigation.navigate("changePersonalInfoMation")
                                    }}
                                />
                                <Text style={{ fontSize: 20 }}>{this.state.username}</Text>
                                <Text style={{ color: '#999999', fontSize: 15, }}>{this.state.PersonalSignature}</Text>
                            </View>
                            <View style={{ width: '60%', alignItems: "flex-end", paddingRight: 20, }}>
                                <View style={{ position: "absolute", top: 5, right: 0, backgroundColor: "#999999", width: 65, paddingLeft: 5, paddingVertical: 5, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, }}>
                                    <Text
                                        onPress={() => {
                                            this.props.navigation.navigate("changePersonalInfoMation")
                                        }}
                                    >编辑资料</Text>
                                </View>
                                <View style={{ height: '100%', justifyContent: "center", alignItems: "flex-end", marginTop: 24 }}>
                                    <Text style={[styles.vipText]}
                                        onPress={() => {
                                            this.props.navigation.navigate("mylevel")
                                        }}
                                    >LV2  查看收益</Text>
                                    <View style={{ flexDirection: "row" }}>
                                    <Text style={[styles.textStyle]}>{data.count1}关注</Text>
                                        <Text style={[styles.textStyle]}>{data1.count2}粉丝</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={{ width: '100%', height: '10%', backgroundColor: "red" }}>
                        <PersonalTab />
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
        backgroundColor: "#ffffff",
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
