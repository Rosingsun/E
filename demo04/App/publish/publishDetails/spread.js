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
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-crop-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
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
    _fetchImage(image) {

        let url = "http://192.168.56.1:3000/api/travels/travel/"
        let head = { uri: image.path, type: 'multipart/form-data', name: 'image.png' };

        let formData = new FormData();
        formData.append('file', head); // 这里的 file 要与后台名字对应。

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        }).then(function (response) {
            console.log("response", response);
            return response.json();
        })
    }
    render() {

        var imgDate = [
            {
                key: 1,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 2,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 3,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 4,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 5,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 6,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 7,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 8,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
            {
                key: 1,
                imgSrc: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f2117d18bec2.png!/fh/270/quality/90/unsharp/true/compress/true"
            },
        ]
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.top_container]}>
                        <FontAwesome name='angle-left' size={32} color="#000" />
                        <Text style={{ color: "#000" }}>你他妈关老子</Text>
                        <Text style={{ paddingHorizontal: 20, backgroundColor: "#6C9575", color: "#fff", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, }}
                        > 发送 </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: 20, width: '90%', marginLeft: '5%', paddingBottom: 10, borderRadius: 15 }}>
                    <View style={{ width: '94%', height: 40, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="标题 "
                            onChangeText={(text) => {
                                this.setState({ title: text });
                            }}
                        />
                    </View>
                    <View style={{ width: '94%', height: 110, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>

                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="分享一篇游记吧 "
                            onChangeText={(text) => {
                                this.setState({ words: text });
                                console.log(this.state.words)
                            }}
                        />
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
                                                {/* <Text>{item}</Text> */}
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
                        <View style={{ flexDirection: "row", alignSelf: 'flex-start', marginLeft: '3%', paddingVertical: 2, paddingHorizontal: 8, marginTop: 15, backgroundColor: "#2F3843", borderRadius: 15, width: "auto" }}>
                            <Ionicons name='md-location-sharp' size={20} color="#fff" />
                            <Text style={{ color: "#fff", textAlign: "center" }}>杭州</Text>
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
                                this._fetchImage(images);
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
    top_container: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        alignItems: "center"
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
});