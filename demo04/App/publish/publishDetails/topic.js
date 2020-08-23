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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
var topicLine = [
    {
        key: 1,
        topicName: "最近使用",
    },
    {
        key: 2,
        topicName: "热门",
    },
    {
        key: 3,
        topicName: "美食",
    },
    {
        key: 3,
        topicName: "美食",
    },
    {
        key: 3,
        topicName: "美食",
    },
    {
        key: 3,
        topicName: "美食",
    },
    {
        key: 3,
        topicName: "美食",
    },
    {
        key: 3,
        topicName: "美食",
    },
]
var topicChoice = [
    {
        key: 1,
        topicWords: "123",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 1433,

    },
    {
        key: 2,
        topicWords: "345",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 143323,
    },
]
export default class topic extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.top_container]}>
                        <FontAwesome name='angle-left' size={32} color="#000"
                            onPress={()=>{
                                this.props.navigation.goBack();
                            }}
                        />
                        <Text style={{ color: "#000" }}>你他妈关老子</Text>
                        <Text >  </Text>
                    </View>
                </View>
                <View style={{ backgroundColor: "#fff", marginTop: 20, justifyContent: "center", alignItems: "center", flexDirection: "row", width: '90%', marginLeft: '5%', height: 40, borderRadius: 10 }}>
                    <TextInput
                        style={{ width: "90%" }}
                        placeholder="please input your wordss"
                    ></TextInput>
                    <FontAwesome name='search' size={20} color="#000" />
                </View>
                <View style={{ paddingHorizontal: 20, width: '90%', flexDirection: "row" }}>
                    {/* 第一列 */}
                    <View style={{ height: '87%', width: '25%' }}>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            {
                                topicLine.map((item) => {
                                    return (
                                        <View style={{ justifyContent: "center", backgroundColor: "#fff", marginTop: 10, height: 70, width: 70, borderRadius: 50, }}>
                                            <Text style={{ textAlign: "center" }}>{item.topicName}</Text>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                    {/* 第二列 */}
                    <View style={{ height: '100%', width: '85%' }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                topicChoice.map((item) => {
                                    return (
                                        <View style={{ flexDirection: "row", width: '100%', height: 62, borderRadius: 3, marginTop: 10, backgroundColor: "#fff" }}>
                                            <Image style={{ height: '100%', width: 62 }} source={{ uri: item.image }} />
                                            <View style={{ justifyContent: "center", marginLeft: 10, }}>
                                                <Text style={{ fontSize: 15, textAlign: "center", textAlign: "center", width: '100%' }}>#{item.topicWords}#</Text>
                                                <Text style={{ textAlign: "center", fontSize: 12 }}>讨论{item.talkNum}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
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
});