import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    Dimensions,
    StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { ScrollView } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
export default class Search extends Component {
    static defaultProps = {
        multiList: [
            {
                id: 0,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '1'
            },
            {
                id: 1,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '2'
            },
            {
                id: 2,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '3'
            },
            {
                id: 3,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '4'
            },
            {
                id: 4,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '5'
            },
            {
                id: 5,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '6'
            },
            {
                id: 6,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '7'
            },
            {
                id: 7,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '8'
            },
            {
                id: 8,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '9'
            },
            {
                id: 9,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '10'
            },
            {
                id: 10,
                userName: 'aboutJOY',
                userHead: './img/a.jpg',
                sort: '11'
            },
        ]
    };




    constructor(props) {
        super(props);
        this.state = {
            multiData: this.props.multiList,
            selectMultiItem: [],
        }
    };

    //多选
    _selectMultiItemPress(item) {
        if (item.select) {
            this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
                return x === item.id;
            }), 1);
        } else {
            this.state.selectMultiItem.push(item.id);
        }
        this.state.multiData[item.id].select = !item.select;
        this.setState({ multiData: this.state.multiData });
    }
    //递交 选中 
    _submitMultiPress() {
        alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    }
    //渲染多选标记
    _renderMultiMark() {
        let multiData = this.state.multiData;
        let len = multiData.length;
        let menuArr = [];
        for (let i = 0; i < len; i++) {
            let item = multiData[i];
            if (item.select) {
                menuArr.push(
                    //选中状态
                    <View style={[styles.button2]}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "#fff", left: -5, position: "absolute" }}>{item.sort}</Text>
                            <Image style={{ height: 60, width: 60, borderRadius: 50, marginLeft: 20, borderColor: "#ffffff", borderWidth: 1 }} source={{
                                uri: 'https://img2.woyaogexing.com/2020/07/20/385782310bca4d2896a91e58a5cd2f8c!400x400.jpeg'
                            }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 15, color: "#fff" }}>{item.userName}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end" }}>
                                    <FontAwesome5 name={'fire'} size={20} color={'#FAAF3D'} />
                                    <Text style={{ color: "#Fff", fontSize: 12 }}>121412</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                style={{ backgroundColor: "#FFB16C00", justifyContent: "center", alignItems: "center", height: 25, width: 60, borderWidth: 2, borderColor: "#FAAF3D", position: "absolute", right: 15 }}
                                onPress={() => {
                                    this._selectMultiItemPress(item)
                                }}>
                                <Text style={{ fontSize: 12, color: "#FAAF3D", }}>已关注</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            } else {
                menuArr.push(
                    // 未选中状态
                    <View style={[styles.button2]}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontSize: 20, color: "#fff", left: -5, position: "absolute" }}>{item.sort}</Text>
                            <Image style={{ height: 60, width: 60, borderRadius: 50, marginLeft: 20, borderColor: "#ffffff", borderWidth: 1 }} source={{
                                uri: 'https://img2.woyaogexing.com/2020/07/20/385782310bca4d2896a91e58a5cd2f8c!400x400.jpeg'
                            }} />
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 15, color: "#fff" }}>{item.userName}</Text>
                                <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end" }}>
                                    <FontAwesome5 name={'fire'} size={20} color={'#FAAF3D'} />
                                    <Text style={{ color: "#Fff", fontSize: 12 }}>121412</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    this._selectMultiItemPress(item)
                                }}
                                style={{ backgroundColor: "#FFB16C", justifyContent: "center", alignItems: "center", height: 25, width: 60, position: "absolute", right: 15 }}>
                                <Text style={{ fontSize: 12, color: "#fff" }}>关注</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        }
        return (
            //讲各类状态框输出到前端页面
            <View style={styles.multiBox}>
                {menuArr}
            </View>
        );
    }
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20 }}>排行榜</Text>
                        <View>
                            <AntDesign name={'questioncircle'} size={30} color={'#000'} onPress={() => {
                                Alert.alert("不要点我")
                            }} />
                        </View>
                    </View>
                </View>
                {/* 第一大框 */}
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.text}>
                        <View style={styles.button1}>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: 37, marginTop: 35 }}>
                                <View style={{ height: 67, width: 67 }}>
                                    <Image style={{ height: 67, width: 67, borderRadius: 50, borderColor: "#C2C2C2", borderWidth: 3 }} source={{
                                        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595245503481&di=8b45bb8b82584133613dd02a8c1948ec&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F31%2F20150831102256_UJNrk.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 18, height: 18, backgroundColor: "#C2C2C2", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>2</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生1</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                    }}>
                                    <Text style={{ fontSize: 12, color: "#fff" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: 57, width: 59, position: "absolute", right: -20, top: -20 }} source={require('../../img/winner.png')} />
                                <View style={{ height: 103, width: 103 }}>
                                    <Image style={{ height: 103, width: 103, borderRadius: 100, borderColor: "#FFD800", borderWidth: 3 }} source={{
                                        uri: 'https://img2.woyaogexing.com/2020/07/20/edb781622aef42aa95fc61ce2b1de403!400x400.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 26, height: 26, backgroundColor: "#FFD800", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#FFFFFF" }}>1</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生2</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { Alert.alert("关注成功") }}>
                                    <Text style={{ fontSize: 12, color: "#fff" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginRight: 37, marginTop: 35 }}>
                                <View style={{ height: 68, width: 68 }}>
                                    <Image style={{ height: 67, width: 67, borderRadius: 50, borderColor: "#CF958A", borderWidth: 3 }} source={{
                                        uri: 'https://img2.woyaogexing.com/2020/07/20/385782310bca4d2896a91e58a5cd2f8c!400x400.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 18, height: 18, backgroundColor: "#CF958A", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>3</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生3</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { Alert.alert("关注成功") }}>
                                    <Text style={{ fontSize: 12, color: "#fff" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    {/* 第二大框 */}
                    <View style={styles.text2}>
                        {this._renderMultiMark()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#6C9575",
        flexDirection: "column"
    },
    top: {
        height: (78),
        width: "100%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
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
    button1: {
        width: '100%',
        height: 63,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3,
        flexDirection: "row",
        marginTop: 10,
        height: 212,
    },
    text: {
        marginTop: 10,
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
    button: {
        backgroundColor: "#FAAF3D",
        justifyContent: "center",
        alignItems: "center",
        height: 25,
        width: 60,
        marginTop: 10

    },
    button2: {
        marginTop: 13,
        width: "90%",
        marginLeft: "5%",
    },
    text2: {
        paddingBottom: 20
    },
})

