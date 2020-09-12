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
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
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
    {
        id: 3,
        topicWords: "345",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 143323,
    },
    {
        id: 4,
        topicWords: "345",
        image: "http://pic.51yuansu.com/pic3/cover/03/99/65/5f2a755de1856_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        talkNum: 143323,
    },
    {
        id: 5,
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
            selectMultiItem: 0,
        };
    }

    static defaultProps = {
        topicLine: [
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
        this.setState({ selectMultiItem: item.id })
    }
    //递交 选中 
    _submitMultiPress() {
        alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    }

    handleViewRef = ref => this.view = ref;

    bounce = () => this.view.bounceIn(1000);
    //渲染多选标记
    _renderMultiMark() {
        let multiData = this.state.multiData;
        let len = multiData.length;
        let menuArr = [];
        for (let i = 0; i < len; i++) {
            let item = multiData[i];
            if (item.id == this.state.selectMultiItem) {
                menuArr.push(
                    //选中状态
                    <TouchableWithoutFeedback onPress={
                        console.log(this.state.selectMultiItem),
                        this.bounce
                        // this._selectMultiItemPress(item)
                    }>
                        <Animatable.View ref={this.handleViewRef} style={{ justifyContent: "center", backgroundColor: "#2F3843", paddingHorizontal: 15, marginTop: 10, height: 70, width: 70, borderRadius: 100 }}>
                            <Text style={{ textAlign: "center", color: "#fff", fontSize: 15 }}>{item.topicName}</Text>
                        </Animatable.View>
                    </TouchableWithoutFeedback>
                )
            } else {
                menuArr.push(
                    // 未选中状态
                    <TouchableWithoutFeedback
                        onPress={() =>
                            this._selectMultiItemPress(item)
                        }
                        style={[styles.markRow, styles.markUnCheck]}>
                        <View style={{ justifyContent: "center", backgroundColor: "#fff", paddingHorizontal: 15, marginTop: 10, height: 70, width: 70, borderRadius: 100 }}>
                            <Text style={{ textAlign: "center", color: "#000", fontSize: 15 }}
                            >{item.topicName}</Text>
                        </View>
                    </TouchableWithoutFeedback>
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
                        <Text style={{ color: "#000",fontSize:18,}}
                            onPress={() => {
                                console.log(this.state.selectMultiItem)
                            }}
                        >话题</Text>
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
                                            <View style={{ flexDirection: "row", width: '100%', height: 62, borderRadius: 3, marginTop: 20, backgroundColor: "#fff" }}>
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
        alignItems: "center",
        width:'94%',
        marginLeft:'3%',
    },
});