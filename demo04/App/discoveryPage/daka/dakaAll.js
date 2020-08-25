
import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Image,
    Text,
    Dimensions,
    FlatList,
    Animated,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase

} from 'react-native';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
// 用ART来画顶部的圆
import {
    Surface, //  一个矩形可渲染的区域，是其他元素的容器
    Group, // 可容纳多个形状、文本和其他的分组
    Shape, // 形状定义，可填充
    Path, // 路径
    LinearGradient, // 渐变色
    Pattern, // 填充图片
    ClippingRectangle, // 剪辑
} from '@react-native-community/art';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
// 定义路径

export default class dakaAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 5,
            loaded: false,
            errInfo: null,
            demoOneValue: '',
            touchFlag: true,

            fadeAnim: new Animated.Value(-(Dimensions.get('window').height / 2 - 70)),
            Vertical: new Animated.Value(0),
            disPlayFlag:"none",
            // fadeAnim: new Animated.Value(-Dimensions.get('window').height+),
            circlePathHeight: 400,//400-700
        }
    };


    //消息框收回
    fadeIn = () => {
        Animated.spring(this.state.fadeAnim, {
            toValue: 0,
            duration: 400
        }).start();
    };
    //消息框弹出
    fadeOut = () => {
        Animated.spring(this.state.fadeAnim, {
            toValue: -(Dimensions.get('window').height / 2 - 70),
            duration: 400
        }).start();
    };

    // 横向滑轮
    fadeVerticalleft = () => {
        Animated.spring(this.state.Vertical, {
            toValue: -(Dimensions.get('window').width),
            duration: 400
        }).start();
    }
    fadeVerticalright = () => {
        Animated.spring(this.state.Vertical, {
            toValue: 0,
            duration: 400
        }).start();
    }
    render() {
        var circlePath = Path()
            .moveTo(0, 70)
            .arc(Dimensions.get('window').width, 0, this.state.circlePathHeight);
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row", }}>
                            <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text style={{ color: "#000", fontSize: 20, marginLeft: 30 }}>打卡全部</Text>
                        <View>
                            <Text style={{ fontSize: 15, color: '#000' }}>{this.state.openStatus}</Text>
                        </View>
                    </View>
                </View>
                <FlatList
                    style={{ paddingTop: 10, }}
                    showsVerticalScrollIndicator={false}
                    data={[
                        {
                            picture: "./img/a.jpg",
                            title: '西湖·一个小亭子',
                            scenicSpot: "西湖景区",
                            clock: "杜甫、李白、白居易也曾在这里打过卡"
                        },
                        {
                            picture: "./img/a.jpg",
                            title: '西湖·一个小亭子',
                            scenicSpot: "西湖景区",
                            clock: "杜甫、李白、白居易也曾在这里打过卡"
                        },
                        {
                            picture: "./img/a.jpg",
                            title: '西湖·一个小亭子',
                            scenicSpot: "西湖景区",
                            clock: "杜甫、李白、白居易也曾在这里打过卡"
                        },
                    ]}
                    renderItem={({ item }) =>
                        <View style={[styles.mainBox]}>
                            <Image style={{ height: '100%', width: 118 * biLi }} source={{
                                uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399377501,2221360822&fm=26&gp=0.jpg'
                            }} />
                            <View style={{ flexDirection: "column", justifyContent: "space-around", marginLeft: 15 }}>
                                <Text style={[styles.title]}>{item.title}</Text>
                                <View style={{ width: 115 }}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={this.state.starCount}
                                        starSize={20}
                                        fullStarColor={"#EA9518"}
                                        emptyStarColor={"#ffffff"}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    /></View>
                                <Text style={[styles.scenicSpot]}>{item.scenicSpot}</Text>
                                <TouchableOpacity
                                    style={styles.button}>
                                    <Text style={[styles.clock]}>{item.clock}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    } />
                    
                <TouchableWithoutFeedback
                    style={{ width: '100%', height: '100%', justifyContent: "center" }}
                    onPress={() => {
                        if (this.state.touchFlag) {
                            this.fadeOut()
                            this.setState({ touchFlag: false })
                        } else {
                            this.fadeIn()
                            this.setState({ touchFlag: true })
                        }
                    }}
                >
                    {/* 底部弹窗 */}
                    <Animated.View style={[styles.bottomCircle, { bottom: this.state.fadeAnim, width: '100%', }]}>
                            <Surface width={'100%'} height={70} style={{ position: "absolute", top: 0, left: 0 }}>
                                <Shape d={circlePath} fill="#fff" stroke="#fff" strokeWidth={10} />
                            </Surface>
                        <View style={{ height: Dimensions.get('window').height / 2 - 70, marginTop: 70 }}>
                        
                        <View style={{width: '100%',backgroundColor:"#fff", flexDirection: "row", top: 0,zIndex:10, }}>
                            <View style={{width:'60%',flexDirection:"row",backgroundColor:"#000",justifyContent:"space-around",marginLeft:"20%"}}>
                            <Text onPress={() => { this.fadeVerticalright(); }}
                                style={{ width: '40%', height: 40, textAlign: "center", backgroundColor: "pink" }}>111</Text>
                            <Text onPress={() => { this.fadeVerticalleft(); }}
                                style={{ width: '40%', height: 40, textAlign: "center", backgroundColor: "skyblue" }}>222</Text>
                                </View>
                        </View>
                            <View style={{ width: '200%', backgroundColor: "#fff", height: '100%', flexDirection: "row" }}>
                                <Animated.View style={{ width: '50%', height: '100%', marginLeft: this.state.Vertical, }}>
                                    {/* 左边的框 */}
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            Alert.alert("111");
                                        }}>
                                        <View style={{ height: '100%', width: '100%' }}></View>
                                    </TouchableWithoutFeedback>
                                </Animated.View>
                                <Animated.View style={{ width: '50%', height: '100%', backgroundColor: "red" }}>
                                    {/* 右边的框 */}
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            Alert.alert("222");
                                        }}>
                                        <View style={{ height: '100%', width: '100%' }}></View>
                                    </TouchableWithoutFeedback>
                                </Animated.View>
                            </View>
                        </View>
                    </Animated.View>
                    
                </TouchableWithoutFeedback>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottomCircle: {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').height / 2,
        position: "absolute",
        elevation:10,
    },
    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        elevation: 6,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '8%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
    words: {
        color: "#fff",
        fontSize: 15,
    },
    picker: {
        marginRight: 30
    },
    mainBox: {
        width: "90%",
        height: 118 * biLi,
        backgroundColor: "#fff",
        marginLeft: "5%",
        flexDirection: "row",
        marginTop: 10,
        borderRadius: 3,
    },
    title: {
        fontSize: 15,
        color: "#000000"
    },

    scenicSpot: {
        color: "#999999",
        fontSize: 10
    },
    clock: {
        color: "#999999",
        fontSize: 10,
        justifyContent: "center",
        alignItems: "center",
        lineHeight: 20,

    },
    button: {
        width: 190 * biLi,
        height: 20 * biLi,
        backgroundColor: "#EFEFEF"
    },
    demeOneBtn: {
        padding: 25,
        borderRadius: 5,
        marginTop: 20,
    },

})
