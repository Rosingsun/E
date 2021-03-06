
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
    TouchableWithoutFeedbackBase,
    ScrollView

} from 'react-native';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { storage } from '../../Accessories/storage/index'
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
// 单选
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'
import { Value } from 'react-native-reanimated';
import { SceneView } from 'react-navigation';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
// 定义路径

export default class dakaAll extends Component {
    static defaultProps = {
        multiList: [
            {
                id: 0,
                name: "观赏类",
                src: require("../photo/sign.png")
            },
            {
                id: 1,
                name: "游玩类",
                src: require("../photo/play.png")
            },
            {
                id: 2,
                name: "美食类",
                src: require("../photo/food.png")
            },
            {
                id: 3,
                name: "活动类",
                src: require("../photo/active.png")
            },
        ]
    };


    constructor(props) {
        super(props);
        this.state = {
            starCount: 5,
            loaded: false,
            errInfo: null,
            demoOneValue: '',
            touchFlag: true,
            fadeAnim: new Animated.Value(-(Dimensions.get('window').height / 1.8 - 70)),

            kuandu: new Animated.Value(50),
            xiaokuandu: new Animated.Value(0),
            Vertical: new Animated.Value(0),
            disPlayFlag: "none",
            // fadeAnim: new Animated.Value(-Dimensions.get('window').height+),
            circlePathHeight: 400,//400-700,
            multiData: this.props.multiList,
            selectMultiItem: [],
        }
    };
    //全部打卡点
      fetchDate() {
        fetch('http://192.168.1.151:3000/api/travels/city/queryAllScenic_Spots', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'token':this.state.token
          },
        }).then((response) => response.json())
          .then((json) => {
            // console.log(json)
            this.setState({ data: json.data });
          })
          .catch((error) => console.error(error))
          .finally(() => {
            this.setState({ isLoading: false });
          });
      }
      componentDidMount() {
        storage.load('userInfo', (data) => {
          this.setState({
              username: data.username,
              head: data.head,
              token: data.token,
              user_id: data.user_id
          })
          this.fetchDate()
      })

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
            toValue: -(Dimensions.get('window').height / 1.8 - 70),
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
    //消息框收回
    biankuan = () => {
        Animated.spring(this.state.kuandu, {
            toValue: 50,
            duration: 400
        }).start();
        Animated.spring(this.state.xiaokuandu, {
            toValue: 0,
            duration: 400
        }).start();

    };
    //消息框弹出
    bianzhai = () => {
        Animated.spring(this.state.kuandu, {
            toValue: 0,
            duration: 400
        }).start();
        Animated.spring(this.state.xiaokuandu, {
            toValue: 50,
            duration: 400
        }).start();
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
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={{ width: '50%', height: '50%' }}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: "#efefef", }}>
                            <Image style={{ height: "70%", width: '94%', marginLeft: "3%" }} source={item.src} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginLeft: "3%" }}>
                                <Text style={{ height: 19, width: 19, textAlign: "center", lineHeight: 19, fontWeight: "bold", color: "#FFF", borderRadius: 20, backgroundColor: "#6C9575" }}>
                                    {item.id}
                                </Text>
                                <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                                <View style={{ position: "absolute", right: 20, height: 20, width: 20, borderRadius: 10, justifyContent: "center", alignItems: "center", borderWidth: 2, borderColor: "#FAAF3D" }}>
                                    <View style={{ height: '80%', width: '80%', backgroundColor: "#FAAF3D", borderRadius: 20 }} />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(
                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={{ width: '50%', height: '50%' }}>
                        <View style={{ width: '100%', height: '100%', backgroundColor: "#efefef", }}>
                            <Image style={{ height: "70%", width: '94%', marginLeft: "3%" }} source={item.src} />
                            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginLeft: "3%" }}>
                                <Text style={{ height: 19, width: 19, textAlign: "center", lineHeight: 19, fontWeight: "bold", color: "#FFF", borderRadius: 20, backgroundColor: "#6C9575" }}>
                                    {item.id}
                                </Text>
                                <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                                <View style={{ position: "absolute", right: 20, height: 20, width: 20, borderRadius: 10, borderWidth: 2, borderColor: "#FAAF3D" }}></View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
        return (
            //讲各类状态框输出到前端页面
            <View style={{ flexDirection: "row", width: '50%', flexWrap: "wrap" }}>
                {menuArr}
            </View>
        );
    }

    render() {
        var data=this.state.data;
        var circlePath = Path()
            .moveTo(0, 70)
            .arc(Dimensions.get('window').width, 0, this.state.circlePathHeight);
        var CityName = [
            {
                key: 1,
                name: "杭州"
            },
            {
                key: 2,
                name: "杭州"
            },
            {
                key: 3,
                name: "杭州"
            },
            {
                key: 4,
                name: "杭州"
            },
            {
                key: 5,
                name: "杭州"
            },
            {
                key: 6,
                name: "杭州"
            },
        ]
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row", }}>
                            <AntDesign name={'left'} size={25} color={'#000'}
                             onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text pointerEvents="none" style={{ color: "#000", fontSize: 20, position: "absolute", width: '100%',zIndex:-1, textAlign: "center" }}>打卡全部</Text>
                    </View>
                </View>
                <FlatList
                    style={{ paddingTop: 10, }}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    renderItem={({ item }) =>
                        <View style={[styles.mainBox]}>
                            <Image style={{ height: '100%', width: 118 * biLi,borderTopLeftRadius:3,borderTopRightRadius:3 }} source={{
                                uri: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2399377501,2221360822&fm=26&gp=0.jpg'
                            }} />
                            <View style={{ flexDirection: "column", justifyContent: "space-around", marginLeft: 15 }}>
                                <Text style={[styles.title]}>{item.Name}</Text>
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
                                <Text style={[styles.scenicSpot]}>{item.Scenic_Spot}</Text>
                                <TouchableOpacity
                                    style={styles.button}>
                                    <Text style={[styles.clock]}>{item.City}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    } />

                <TouchableWithoutFeedback
                    style={{ width: '100%', height: '100%', justifyContent: "center" }}
                    onPress={() => {
                        if (this.state.touchFlag) {
                            this.fadeOut()
                            this.setState({ touchFlag: false, circlePathHeight: 400 })
                        } else {
                            this.fadeIn()
                            this.setState({ touchFlag: true, circlePathHeight: 700 })
                        }
                    }}
                >

                    {/* 底部弹窗 */}
                    <Animated.View style={[styles.bottomCircle, { bottom: this.state.fadeAnim, width: '100%', }]}>
                        {/* <LinearGradient colors={['#FFD801', '#FF8040', '#F75D59']} style={styles.linearGradient}> */}
                        {/* <Text style={{color:'#fff'}}>
    Sign in with Facebook
  </Text>
</LinearGradient> */}
                        <Surface width={'100%'} height={70} style={{ position: "absolute", top: 0, left: 0, }}>

                            <Shape d={circlePath} fill="#fff" stroke="#EFEFEF" strokeWidth={10} >
                            </Shape>
                            {/* 需要加点样式 */}
                        </Surface>

                        <View style={{ height: Dimensions.get('window').height / 2 - 70, marginTop: 70 }}>


                            <View style={{ width: '100%', backgroundColor: "#fff", flexDirection: "row", top: 0, zIndex: 10, }}>
                                <View style={{ width: '60%', flexDirection: "row", justifyContent: "space-around", alignContent: "flex-end", marginLeft: "20%" }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text onPress={() => {
                                            this.fadeVerticalright();
                                            this.biankuan();
                                        }}
                                            style={{ marginTop: 30, fontSize: 15 }}>全部地点</Text>
                                        <Animated.View style={{ height: 3, width: this.state.kuandu, borderRadius: 5, backgroundColor: "#FAAF3D", marginBottom: 5, }} />
                                    </View>
                                    <View style={{ marginTop: -20 }} >
                                        <Entypo name={'chevron-thin-down'} size={25} color={'#6C957525'} />
                                        <Entypo name={'chevron-thin-down'} size={25} color={'#6C957550'} style={{ marginTop: -15 }} />
                                        <Entypo name={'chevron-thin-down'} size={25} color={'#6C9575'} style={{ marginTop: -15 }} />
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text onPress={() => {
                                            this.fadeVerticalleft();
                                            // this.biankuan();
                                            this.bianzhai();
                                        }}
                                            style={{ textAlign: "center", marginTop: 30, fontSize: 15 }}>全部种类</Text>
                                        <Animated.View style={{ height: 3, width: this.state.xiaokuandu, borderRadius: 5, backgroundColor: "#FAAF3D", marginBottom: 5, }} />
                                    </View>
                                </View>

                            </View>
                            <View style={{ width: '200%', backgroundColor: "#fff", height: '100%', flexDirection: "row" }}>
                                <Animated.View style={{ width: '50%', height: '100%', marginLeft: this.state.Vertical, }}>
                                    <View style={{ height: '100%', width: '100%', }}>
                                        <ScrollView style={{ height: '100%', width: "100%", backgroundColor: "#efefef", }}>
                                            <View style={{ paddingBottom: 40 }}>

                                                <RadioGroup
                                                    size={20}
                                                    thickness={1}
                                                    color='#FAAF3D'
                                                    highlightColor='#fff'
                                                    selectedIndex={0}
                                                    onSelect={(index, value) => console.log(index)} >

                                                    {
                                                        CityName.map((item) => {
                                                            return (
                                                                <View style={{ padding: 10, alignItems: "center", marginTop: 20, borderRadius: 20, width: '90%', marginLeft: "5%", backgroundColor: "#fff", }}>
                                                                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                                                                        <Text style={{ height: 19, width: 19, textAlign: "center", lineHeight: 19, fontWeight: "bold", color: "#FFF", borderRadius: 20, backgroundColor: "#6C9575" }}>
                                                                            {item.key}
                                                                        </Text>
                                                                        <Text style={{ marginLeft: 8 }}>{item.name}</Text>
                                                                    </View>
                                                                </View>
                                                            )
                                                        })
                                                    }

                                                </RadioGroup>
                                            </View>
                                        </ScrollView>
                                        {/* </TouchableWithoutFeedback> */}
                                    </View>
                                </Animated.View>
                                <Animated.View style={{ width: '100%', backgroundColor: "#efefef", height: '100%', flexDirection: "row", flexWrap: "wrap" }}>
                                    {/* 右边的框 */}
                                    {this._renderMultiMark()}
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
        height: Dimensions.get('window').height / 1.8,
        position: "absolute",
        elevation: 10,
    },
    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column"
    },
    top: {
        height: 78,
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
        width: "94%",
        marginLeft: '3%',
        justifyContent: "space-between",
        alignItems: "center",
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
        height: 118,
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
        backgroundColor: "#EFEFEF50",
        paddingHorizontal: 6,
        paddingVertical: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    demeOneBtn: {
        padding: 25,
        borderRadius: 5,
        marginTop: 20,
    },
    linearGradient: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 50,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },

})