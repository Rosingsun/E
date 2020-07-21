import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback,
    StatusBar,
    FlatList,
    Switch
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

class ItemDivideComponent extends Component {
    render() {
        return (
            <View style={{ height: 1, backgroundColor: 'skyblue', width: "90%", marginLeft: '5%', marginTop: 10 }} />
        );
    }
};


export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <View style={[styles.container]}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='rgba(0,0,0,0)'
                    translucent={true} />
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'leftcircle'} size={30} color={'#fff'} onPress={() => {
                                Alert.alert("返回")
                            }} />
                        </View>
                        <Text style={{ color: "#fff", fontSize: 20 }}>排行榜</Text>
                        <View>
                            <AntDesign name={'questioncircle'} size={30} color={'#fff'} onPress={() => {
                                Alert.alert("不要点我")
                            }} />
                        </View>
                    </View>
                </View>
                {/* 第一大框 */}
                <ScrollView>
                    <View style={styles.text}>
                        <View style={styles.button1}>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginLeft: 37, marginTop: 35 }}>
                                <View style={{ height: 67 * biLi, width: 67 * biLi }}>
                                    <Image style={{ height: 67 * biLi, width: 67 * biLi, borderRadius: 50, borderColor: "#C2C2C2", borderWidth: 3 }} source={{
                                        uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595245503481&di=8b45bb8b82584133613dd02a8c1948ec&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201508%2F31%2F20150831102256_UJNrk.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 18 * biLi, height: 18, backgroundColor: "#C2C2C2", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>2</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { Alert.alert("关注成功") }}>
                                    <Text style={{ fontSize: 10, color: "#fff", }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Image style={{ height: 57 * biLi, width: 59 * biLi, position: "absolute", right: -20, top: -20 }} source={require('./img/winner.png')} />
                                <View style={{ height: 103 * biLi, width: 103 * biLi }}>
                                    <Image style={{ height: 103 * biLi, width: 103 * biLi, borderRadius: 50, borderColor: "#FFD800", borderWidth: 3 }} source={{
                                        uri: 'https://img2.woyaogexing.com/2020/07/20/edb781622aef42aa95fc61ce2b1de403!400x400.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 26 * biLi, height: 26 * biLi, backgroundColor: "#FFD800", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 15, color: "#FFFFFF" }}>1</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { Alert.alert("关注成功") }}>
                                    <Text style={{ fontSize: 10, color: "#fff" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginRight: 37, marginTop: 35 }}>
                                <View style={{ height: 68 * biLi, width: 68 * biLi }}>
                                    <Image style={{ height: 67 * biLi, width: 67 * biLi, borderRadius: 50, borderColor: "#CF958A", borderWidth: 3 }} source={{
                                        uri: 'https://img2.woyaogexing.com/2020/07/20/385782310bca4d2896a91e58a5cd2f8c!400x400.jpeg'
                                    }} />
                                    <View style={{ position: "absolute", right: 0, bottom: 0, width: 18 * biLi, height: 18, backgroundColor: "#CF958A", borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                                        <Text style={{ fontSize: 10, color: "#FFFFFF" }}>3</Text>
                                    </View>
                                </View>
                                <Text style={{ fontSize: 15, marginTop: 15 }}>云生</Text>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => { Alert.alert("关注成功") }}>
                                    <Text style={{ fontSize: 10, color: "#fff" }}>关注</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    {/* 第二大框 */}
                    <View style={styles.text2}>
                        <FlatList
                            data={[
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                },
                                {
                                    userName: 'aboutJOY',
                                    userHead: './img/a.jpg',
                                    sort: '4'
                                }

                            ]}
                            //隐藏竖向栏
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={ItemDivideComponent}//分割线组件
                            renderItem={({ item }) =>
                                <View style={[styles.button2]}>

                                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                                        <Text style={{ fontSize: 20, color: "#fff", marginLeft: 22 }}>{item.sort}</Text>
                                        <Image style={{ height: 60 * biLi, width: 60 * biLi, borderRadius: 50, marginLeft: 15, borderColor: "#ffffff", borderWidth: 1 }} source={{
                                            uri: 'https://img2.woyaogexing.com/2020/07/20/385782310bca4d2896a91e58a5cd2f8c!400x400.jpeg'
                                        }} />
                                        <Text style={{ fontSize: 15, marginLeft: 15, color: "#fff" }}>{item.userName}</Text>
                                        <TouchableOpacity
                                            style={{ backgroundColor: "#FFB16C", justifyContent: "center", alignItems: "center", height: 19 * biLi, width: 43 * biLi, position: "absolute", right: 15 }}
                                            onPress={() => { Alert.alert("关注成功") }}>
                                            <Text style={{ fontSize: 10, color: "#fff" }}>关注</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#43949B",
        flexDirection: "column"
    },
    top: {
        height: (100) * biLi,
        width: "100%",
        backgroundColor: "#FFB16C",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 8,
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
    button1: {
        width: '100%',
        height: 63 * biLi,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 3,
        flexDirection: "row",
        marginTop: 10,
        height: 212 * biLi,
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
        backgroundColor: "#FFB16C",
        justifyContent: "center",
        alignItems: "center",
        height: 19 * biLi,
        width: 43 * biLi,
        marginTop: 10

    },
    button2: {
        marginTop: 13,
        width: "90%",
        marginLeft: "5%",
    },
    text2: {
        paddingBottom:20
    },
})

