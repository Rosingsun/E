
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
    TouchableWithoutFeedback

} from 'react-native';
import StarRating from 'react-native-star-rating';
import AntDesign from 'react-native-vector-icons/AntDesign'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class dakaAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 5,
            loaded: false,
            errInfo: null,
            demoOneValue: '',
            touchFlag: true,
            touchBottom: -Dimensions.get('window').height + Dimensions.get('window').height / 4.5,
            fadeAnim: new Animated.Value(-Dimensions.get('window').height + Dimensions.get('window').height / 7),
        }
    };

    fadeIn = () => {
        Animated.spring(this.state.fadeAnim, {
            //   toValue: -Dimensions.get('window').height+Dimensions.get('window').height/4.5,
            toValue: -Dimensions.get('window').height + Dimensions.get('window').height / 4.5,
            duration: 20000
        }).start();
    };

    fadeOut = () => {
        Animated.spring(this.state.fadeAnim, {
            //   toValue: Dimensions.get('window').height+Dimensions.get('window').height/4.5,
            toValue: -Dimensions.get('window').height + Dimensions.get('window').height / 2,
            duration: 30000
        }).start();
    };
    render() {
        return (
            <View style={[styles.container]}>
                
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                                this.props.navigation.goBack();
                            }} />
                        </View>
                        <Text style={{color: "#000", fontSize: 20,position:"absolute",width:'100%',textAlign:"center" }}>打卡全部</Text>
                        {/* <View> */}
                            {/* <Text style={{ fontSize: 15, color: '#000' }}>{this.state.openStatus}</Text> */}
                        {/* </View> */}
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
                    style={{ width: '100%', height: '100%', backgroundColor: "skyblue" }}
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
                <Animated.View style={[styles.bottomCircle, { bottom: this.state.fadeAnim }]}></Animated.View>
                </TouchableWithoutFeedback>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    bottomCircle: {
        width: Dimensions.get('window').height,
        height: Dimensions.get('window').height,
        left: -Dimensions.get('window').height / 4.5,
        position: "absolute",
        backgroundColor: "red",
        borderRadius: 5000,
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
        marginTop: '5%',
        flexDirection: "row",
        width: "94%",
        marginLeft:'3%',
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
        height: 118 * biLi,
        backgroundColor: "#fff",
        marginLeft: "8%",
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
       
        backgroundColor: "#EFEFEF",
        paddingHorizontal:6,
        paddingVertical:4,
        justifyContent:'center',
        alignItems:'center'
    },
    demeOneBtn: {
        padding: 25,
        borderRadius: 5,
        marginTop: 20,
    },

})
