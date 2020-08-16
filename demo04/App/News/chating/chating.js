import React, { Component } from 'react';
import {
    Text, View, StyleSheet, Dimensions, Image, TextInput, Alert,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class chating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPress: true,
            loadUserId: 2323562,
            userInput: "null"
        }
    }
    onPress = () => {
        this.setState({
            isPress: false
        });
    };
    // userName= this.props.navigation.state.params.userName
    render() {

        var userSpeach = [
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 23235621,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 23235621,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "123323521",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "1",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 23235622,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "2",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
            {
                userId: 2323562,
                userImg: "http://pic.51yuansu.com/pic3/cover/03/98/50/5e8feda15aeb3_610.jpg",
                userSpeachContain: "3",
                sendDay: "2020/08/01",
                sendTime: "18:20",
            },
        ]
        var _scrollToBottomY
        return (
            <View style={styles.container}>
                {/* TOP */}
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text style={{ fontSize: 20, color: '#000' }}>
                            {/* {userName} */}
                            用户名
                            </Text>
                        <View style={{ width: 20, height: 20 }} />
                    </View>
                </View>
                <ScrollView
                    style={{ backgroundColor: "#000",height:200 }}
                    // 获取ScrollView视图拥有高度
                    onContentSizeChange={(contentWidth, contentHeight) => {
                        _scrollToBottomY = contentHeight;

                    }}
                    ref={(r) => { this.myScrollView = r; }}
                    >
                    {/* 判断是自己 还是其他用户发表的*/}
                    {userSpeach.map((item) => {
                        if (item.userId == this.state.loadUserId) {
                            return (
                                <View
                                    style={{ paddingRight: 20, width: '100%', flexDirection: "row", paddingVertical: 5, justifyContent: "flex-end", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#fff", width: '65%', padding: 8, borderRadius: 10, justifyContent: "center", marginRight: 5 }}>
                                        <Text style={{ color: "#404040", letterSpacing: 1 }}> 213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123213123</Text>
                                    </View>
                                    <Image source={{ uri: item.userImg }} style={{ height: 40, width: 40, borderRadius: 30 }} />
                                </View>
                            )
                        } else {
                            return (
                                <View style={{ paddingLeft: 20, width: '100%', flexDirection: "row", paddingVertical: 5, justifyContent: "flex-start", alignItems: "center" }}>
                                    <Image source={{ uri: item.userImg }} style={{ height: 40, width: 40, borderRadius: 30 }}
                                        onPress={() => {
                                            Alert.alert("!");
                                        }}
                                    />
                                    <View style={{ backgroundColor: "#fff", maxWidth: '65%', padding: 8, borderRadius: 10, justifyContent: "center", marginLeft: 5 }}>
                                        <Text style={{ color: "#404040", letterSpacing: 1 }}>654231</Text>
                                    </View>
                                </View>
                            )
                        }
                    })}
                </ScrollView>
                <View style={{ height: 40, width: '100%', backgroundColor: "#fff", flexDirection: "row", justifyContent: "space-around", position: "absolute", bottom: 0, borderBottomWidth: 0, alignItems: "center" }}>
                    <View style={{ height: '80%', width: '80%', backgroundColor: "#efefef", borderRadius: 200, }}>
                        <TextInput style={{ height: '100%', width: '90%', marginLeft: '5%', padding: 0, letterSpacing: 1, paddingHorizontal: 10, lineHeight: 0 }}
                            onChangeText={(text) => {
                                this.setState({ userInput: text });
                            }}
                        ></TextInput>
                    </View>
                    <FontAwesome name={'send'} size={25} color={"#000"}
                        onPress={() => {
                            Alert.alert(this.state.userInput)
                        }}

                    />
                </View>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#efefef",
        flexDirection: "column"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#fff",
        elevation: 8,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
});
