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

import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class spread extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addPicState: "flex",
        };
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
                        <Text style={{ paddingHorizontal: 20, backgroundColor: "#6C9575", color: "#fff", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20, }} > 发送 </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: 20, width: '90%', marginLeft: '5%', paddingBottom: 10, borderRadius: 15 }}>
                    <View style={{ width: '94%', height: 110, backgroundColor: "#efefef", marginLeft: '3%', marginTop: 10, borderRadius: 15 }}>
                        <TextInput
                            style={{ width: "100%", height: 40, letterSpacing: 1, }}
                            placeholder="分享一篇游记吧 "
                        />
                    </View>
                    <TouchableWithoutFeedback >
                        <View>
                            <View style={{ width: '94%', flexWrap: "wrap", flexDirection: "row", marginLeft: '3%' }}>
                                {
                                    imgDate.map((item) => {
                                        if (item.key == 9) {
                                            // this.setState({addPicState:"none"})
                                            Alert.alert("11111")
                                        }
                                        return (
                                            <View style={{ width: '31%', marginLeft: '2%', flexDirection: "row" }}>
                                                <Image style={{ height: 72, width: '100%', backgroundColor: "yellow", marginTop: 10 }} source={{ uri: item.imgSrc }} />
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
                    <FontAwesome name='photo' size={20} color="#fff" />
                    <Foundation name='at-sign' size={20} color="#fff"
                        onPress={()=>{
                            this.props.navigation.navigate("Section")
                        }}
                    />
                    <Feather name='md-location-sharp' size={20} color="#fff" />
                    <Feather name='smile' size={20} color="#fff" />
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