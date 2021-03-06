import React, { Component } from 'react';
import {
    Animated,
    FlatList,
    Text,
    View,
    StyleSheet,
    TextInput,
    ScrollView,
    Image,
    TouchableWithoutFeedback,
    Alert,

} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { storage } from '../../Accessories/storage/index'
export default class spread extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addPicState: "flex",
            avatarSource: [],
            source: new Array(9),
            title: '',
            words: '',
        };
    }
    componentDidMount() {
        storage.load('userInfo', (data) => {
            this.setState({
                user_id: data.user_id,
                username: data.username,
                PersonalSignature: data.PersonalSignature,
                head: data.head,
                token: data.token
            })
        })
    }

    _onClickSharetravel = () => {
        var navigation = this.props.navigation;
        fetch('http://192.168.1.151:3000/api/travels/travel/release', {
            method: 'POST',
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'token': this.state.token

            },
            body: JSON.stringify({
                title: this.state.title,
                words: this.state.words,
                showUserImg: this.state.avatarSource,
                username: this.state.username,
                user_id: this.state.user_id,
                head:this.state.head
            })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            if (json.errno == 0) {
                navigation.navigate("bottomTab");
                alert("保存成功")
            } else if (json.errno == -1) {
                alert("保存失败")
            }
            // navigation.goBack();
        })
    };
    render() {
        const { navigation, route } = this.props;
        function showAtPeople() {
            if (route.params.topicWords) {
                return (
                    <Text style={{ borderRadius: 2, color: "#FAAF3D", fontSize: 14, backgroundColor: "#FAAF3D60", paddingVertical: 2, paddingHorizontal: 3 }}>#{route.params.topicWords}#</Text>
                )
            }
        }
        function showTopic() {
            if (route.params.atName) {
                return (
                    <Text style={{ borderRadius: 2, marginTop: 5, color: "green", fontSize: 12, backgroundColor: "#FAAF3D90", paddingVertical: 2, paddingHorizontal: 3, }}>@{route.params.atName}</Text>
                )
            }
        }

        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <AntDesign name='left' size={25} color="#000" />
                        <Text style={{ color: "#000" ,fontSize:18,position:"absolute",width:'100%',textAlign:"center"}}>发布游记</Text>
                        <Text style={{ paddingHorizontal: 20, backgroundColor: "#6C9575", color: "#fff", paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20, }}
                            onPress={this._onClickSharetravel}> 发送 </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff",paddingBottom:10, marginTop: 20, width: '90%', marginLeft: '5%', borderRadius: 15 }}>
                    <View style={{ width: '94%', height: 40, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="标题 "
                            onChangeText={(text) => {
                                this.setState({ title: text });
                            }}
                        />
                    </View>
                    <View style={{ width: '94%', minHeight: 80, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, paddingBottom: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", minHeight: 80, letterSpacing: 1, alignSelf: "flex-start" }}
                            placeholder="分享一篇游记吧 "
                            multiline={true}
                            onChangeText={(text) => {
                                this.setState({ words: text });
                                console.log(this.state.words)
                            }}
                        />
                        <View style={{ flexDirection: "column", paddingHorizontal: 5, justifyContent: "space-between", alignSelf: 'flex-start' }}>
                            {
                                showAtPeople()
                            }
                            {
                                showTopic()
                            }

                        </View>
                    </View>
                    <TouchableWithoutFeedback >
                        <View>
                            <View style={{ width: '94%', flexWrap: "wrap", flexDirection: "row", marginLeft: '3%' }}>
                                {
                                    this.state.avatarSource.map((item) => {
                                        if (item.key == 9) {
                                            console.log(this.state.title)
                                        }
                                        return (
                                            <View style={{ width: '31%', marginLeft: '2%', flexDirection: "row" }}>
                                                <Image style={{ height: 72, width: '100%', backgroundColor: "yellow", marginTop: 10 }} source={{ uri: item }} />
                                            </View>
                                        )
                                    })
                                }

                                <View style={[styles.addPicBox, { display: this.state.addPicState }]}>
                                    <AntDesign name='plus' size={50} color="#999999" />
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {/* 定位 */}
                    <TouchableWithoutFeedback >
                        <View style={{ flexDirection: "row" }}>
                            <View style={[styles.signBox]}>
                                <Ionicons name='md-location-sharp' size={20} color="#fff" />
                                <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }}>杭州</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                </View>
                <View style={{ position: "absolute", backgroundColor: "#2F3843", alignItems: "center", justifyContent: "space-around", flexDirection: "row", height: 50, width: '100%', bottom: 0, left: 0 }}>
                    {/* 获取图片，可能删除 */}
                    <FontAwesome name='photo' size={20} color="#fff"
                        onPress={() => {
                            // 从本地相册选择单幅图像
                            // 调用多个图像
                            ImagePicker.openPicker({
                                // multiple: true,
                                width: 400,
                                height: 400,
                                cropping: true,
                                // showCropGuidelines :true
                                multiple: true,
                                maxFiles: 9,
                            }).then(images => {
                                source = images.map(item => { return item.path });
                                console.log(source);
                                // console.log(images);
                                this._onClickSharetravel;
                                this.setState({
                                    avatarSource: source
                                });
                                console.log("sdsad d" + this.state.avatarSource)
                            });
                        }}

                    />
                    {/* at符号 */}
                    <Feather name='at-sign' size={20} color="#fff"
                        onPress={() => {
                            this.props.navigation.navigate("Section")
                        }}
                    />
                    {/* # 符号 */}
                    <FontAwesome name='hashtag' size={20} color="#fff"

                        onPress={() => {
                            this.props.navigation.navigate("topic")
                        }}
                    />
                    {/* 标签 */}
                    <Feather name='smile' size={20} color="#fff" />
                    {/* 定位 */}
                    <Ionicons name='location-sharp' size={20} color="#fff" />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#efefef",
    },
    top: {
        height: 78,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 10,
        elevation: 8,
        justifyContent: "center",
        alignContent: "center",
    },
    addPicBox: {
        height: 72,
        width: 72,
        justifyContent: "center",
        alignItems: "center",
        borderStyle: "dashed",
        borderRadius: 15,
        borderWidth: 4,
        borderColor: "#ccc",
        marginLeft: '2%',
        marginTop: 10,
        marginLeft: 15,
    },
    signBox: {
        flexDirection: "row",
        alignSelf: 'flex-start',
        marginLeft: '3%',
        paddingVertical: 2,
        paddingHorizontal: 8,
        lineHeight: 30,
        // height:30,
        marginTop: 15,
        backgroundColor: "#2F3843",
        borderRadius: 15,
        width: "auto",
    },

    nav_container: {
        flex: 0.7,
        marginTop: '8%',
        flexDirection: "row",
        width: "94%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "3%",
    },

});