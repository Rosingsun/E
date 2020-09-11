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
    TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

var topicChoice = [
    {
        id: 1,
        topicWords: "123",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 1433,

    },
    {
        id: 2,
        topicWords: "345",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 143323,
    },
]
export default class topic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            multiData: this.props.topicLine,
            selectMultiItem: [],
        };
    }

    static defaultProps = {
        topicLine :[
            {
                id: 0,
                topicName: "最近使用",
            },
            {
                id: 1,
                topicName: "最近使用",
            },
            {
                id: 2,
                topicName: "热门",
            },
            {
                id: 3,
                topicName: "美食",
            },
            {
                id: 4,
                topicName: "美食",
            },
            {
                id: 5,
                topicName: "美食",
            },
            {
                id: 6,
                topicName: "美食",
            },
            {
                id: 7,
                topicName: "美食",
            },
            {
                id: 8,
                topicName: "美食",
            },
        ]
    }
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
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markChecked]}>
                        <View style={{ justifyContent: "center", backgroundColor: "red", marginTop: 10, height: 70, width: 70, borderRadius: 50, }}>
                                            <Text style={{ textAlign: "center" }}>{item.topicName}</Text>
                                        </View>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(

                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markUnCheck]}>
                         <View style={{ justifyContent: "center", backgroundColor: "#fff", marginTop: 10, height: 70, width: 70, borderRadius: 50, }}>
                                            <Text style={{ textAlign: "center" }}>{item.topicName}</Text>
                                        </View>
                    </TouchableOpacity>
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
                    <View style={[styles.top_container]}>
                        <FontAwesome name='angle-left' size={32} color="#000"
                            onPress={() => {
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
                            {/* {
                                topicLine.map((item) => {
                                    return (
                                        <View style={{ justifyContent: "center", backgroundColor: "#fff", marginTop: 10, height: 70, width: 70, borderRadius: 50, }}>
                                            <Text style={{ textAlign: "center" }}>{item.topicName}</Text>
                                        </View>
                                    )
                                })
                            } */}
                            {this._renderMultiMark()}
                        </ScrollView>
                    </View>
                    {/* 第二列 */}
                    <View style={{ height: '100%', width: '85%' }}>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            {
                                topicChoice.map((item) => {
                                    return (
                                        <TouchableWithoutFeedback
                                            onPress={() => {
                                                this.props.navigation.navigate("spread", { topicWords: item.topicWords });
                                            }}
                                        >
                                            <View style={{ flexDirection: "row", width: '100%', height: 62, borderRadius: 3, marginTop: 10, backgroundColor: "#fff" }}>
                                                <Image style={{ height: '100%', width: 62 }} source={{ uri: item.image }} />
                                                <View style={{ justifyContent: "center", marginLeft: 10, }}>
                                                    <Text style={{ fontSize: 15, textAlign: "center", textAlign: "center", width: '100%' }}>#{item.topicWords}#</Text>
                                                    <Text style={{ textAlign: "center", fontSize: 12 }}>讨论{item.talkNum}</Text>
                                                </View>
                                            </View>
                                        </TouchableWithoutFeedback>
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