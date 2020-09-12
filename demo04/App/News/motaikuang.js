import React from 'react';
import {
    View, Text, Modal, StyleSheet, Button, TouchableWithoutFeedback, TouchableOpacity, Alert, Dimensions, StatusBar
} from 'react-native';
import StarRating from 'react-native-star-rating';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
StatusBar.setBackgroundColor("#00000000");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
const { width, scale } = Dimensions.get("window");
class ModalComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            btnSignWords: "提交评价",
            btnBackgroundColor: "#6C9575",
            disabled: false,
            fontColor: "#fff",
            modalVisible:false
        }
    }


    _openModalWin = () => {
        this.setState({ modalVisible: true });
    }

    _closeModalWin = () => {
        this.setState({
            modalVisible: false,
            // btnBackgroundColor: "#EFEFEF",
            //  disabled: true,
            // btnSignWords: " 评级已提交",
            // fontColor: "#999999",
        });
    }
    _ChangeModalWin = () => {
        this.setState({
            btnBackgroundColor: "#EFEFEF",
             disabled: true,
            btnSignWords: " 评级已提交",
            fontColor: "#999999",
            modalVisible: false,
        });
    }

    render() {

        var visibleData = [
            {
                key: "1",
                name: "西溪湿地",
                state: "已打卡",
            },
            {
                key: "2",
                name: "西溪湿地",
                state: "已打卡",
            },
            {
                key: "3",
                name: "西溪湿地",
                state: "已打卡",
            },];
        var starCount = [
            {
                key: 1,
                rating: 1.5,
                words: "非常热情"
            },
            {
                key: 1,
                rating: 1.5,
                words: "非常热情"
            },
            {
                key: 1,
                rating: 3.5,
                words: "非常热情"
            },
        ]

        return (
            <View style={styles.container}>
                {/* <View style={styles.contentStyle}> */}
                    <TouchableOpacity      
                    style={{paddingHorizontal:8,paddingVertical:3,borderRadius:10,backgroundColor:'#2F3843',marginTop:10}}  
                        onPress={this._openModalWin}
                    >
                        <Text style={{color:'#ffffff',fontSize:10}}>订单评价</Text>
                    </TouchableOpacity>
      {/* </View> */}

                <Modal
                    animationType='fade' // 指定了 modal 的动画类型。类型：slide 从底部滑入滑出|fade 淡入淡出|none 没有动画
                    transparent={true} // 背景是否透明，默认为白色，当为true时表示背景为透明。
                    visible={this.state.modalVisible} // 是否显示 modal 窗口
                    onRequestClose={() => { this._closeModalWin(); }} // 回调会在用户按下 Android 设备上的后退按键或是 Apple TV 上的菜单键时触发。请务必注意本属性在 Android 平台上为必填，且会在 modal 处于开启状态时阻止BackHandler事件
                    onShow={() => { console.log('modal窗口显示了'); }} // 回调函数会在 modal 显示时调用
                >
                    {/* <TouchableWithoutFeedback
                    style={{backgroundColor:"red",height:20,width:20,position:"absolute",top:0,left:0}}
                onPress={()=>{
                    this._closeModalWin
                }}
            > */}
                    <TouchableOpacity

                        style={{ height: '100%', width: '100%', position: "absolute", top: 0, left: 0 }}
                        onPress={this._closeModalWin}
                    >
                        <View style={styles.modalLayer}>

                            <TouchableOpacity
                                onPress={() => {
                                }}
                            >
                                <View style={styles.modalContainer}>
                                    {/* <View> */}
                                    <Text style={styles.modalTitleStyle}>交易详情</Text>
                                    <Text style={[styles.middleText, { textAlign: 'center' }]}>2020年7月22日-7月30日</Text>


                                    <View style={[styles.box, { marginTop: '3%', marginLeft: '3%' }]}>
                                        <View style={{ height: 15, width: 15, borderRadius: 15, backgroundColor: '#6C9575', position: 'absolute', top: 13, left: -20, }} />
                                        <Text style={[styles.smallText, { textAlign: 'center' },]}>2020年7月22日-7月30日</Text>
                                        <View style={styles.spaceBetween}>
                                            <Text style={styles.middleText}>杭州市西溪湿地风景区</Text>
                                            <Text style={[styles.smallText]}>全程10.1公里 用时3.2小时</Text>
                                        </View>
                                        {
                                            visibleData.map((item) => {
                                                return (
                                                    <View style={styles.spaceBetween}>
                                                        <View style={styles.center}>
                                                            <View style={[styles.dots]} />
                                                            <Text style={styles.smallText}>{item.name}</Text></View>
                                                        <Text style={styles.smallText}>{item.state}</Text>
                                                    </View>
                                                )
                                            })
                                        }

                                    </View>


                                    <View style={[styles.box, { marginTop: '2%', marginLeft: '3%' }]}>
                                        <View style={{ height: 15, width: 15, borderRadius: 15, backgroundColor: '#FAAF3D', position: 'absolute', top: 13, left: -20, }} />
                                        <Text style={[styles.smallText, { textAlign: 'center' },]}>2020年7月22日-7月30日</Text>
                                        <View style={styles.spaceBetween}>
                                            <Text style={styles.middleText}>杭州市西溪湿地风景区</Text>
                                            <Text style={[styles.smallText]}>全程10.1公里 用时3.2小时</Text>
                                        </View>
                                        {
                                            visibleData.map((item) => {
                                                return (
                                                    <View style={styles.spaceBetween}>
                                                        <View style={styles.center}>
                                                            <View style={[styles.dots]} />
                                                            <Text style={styles.smallText}>{item.name}</Text></View>
                                                        <Text style={styles.smallText}>{item.state}</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </View>
                                    <View style={{ height: 1, width: '90%', backgroundColor: '#EFEFEF', marginTop: '3%' }} />
                                    <Text style={{ fontSize: 15, color: '#000000', marginTop: '3%' }}>对本次交易做个评价吧</Text>
                                    <View style={{ flexDirection: "row", width: '90%', marginTop: '4%', justifyContent: "space-between" }}>
                                        <View style={{ width: '25%', height: 100, justifyContent: 'space-between' }}>
                                            <Text style={{ fontSize: 15, color: '#000000' }}>玩家热情度</Text>
                                            <Text style={{ fontSize: 15, color: '#000000' }}>路线趣味性</Text>
                                            <Text style={{ fontSize: 15, color: '#000000' }}>打卡完成度</Text>
                                        </View>
                                        <View style={{ flexDirection: "column", justifyContent: 'space-between', marginLeft: -10, height: 100 }}>
                                            {
                                                starCount.map((item) => {
                                                    // item.rating = item.rating + 1;
                                                    return (
                                                        <View style={{ flexDirection: "row", justifyContent: "space-between", width: '70%', }}>
                                                            <View style={{ width: '30%' }}>
                                                                <StarRating
                                                                    disabled={false}
                                                                    emptyStar={'star-o'}
                                                                    fullStar={'star'}
                                                                    halfStar={'star-half'}
                                                                    iconSet={'FontAwesome'}
                                                                    maxStars={5}
                                                                    rating={item.rating}
                                                                    selectedStar={(rating) =>
                                                                        console.log(rating)
                                                                    }
                                                                    fullStarColor={'#FAAF3D'}
                                                                    starStyle={{
                                                                        fontSize: 20,
                                                                        marginLeft: 8
                                                                    }}
                                                                />
                                                            </View>
                                                            <View>
                                                                <Text style={styles.smallText}>{item.words}</Text>
                                                            </View>
                                                        </View>
                                                    )
                                                })
                                            }
                                        </View>
                                    </View>
                                    <View style={styles.modalButtonStyle}>
                                        <TouchableWithoutFeedback
                                            disabled={this.state.disabled}
                                            onPress={this._ChangeModalWin}
                                        >
                                            <View style={{ width: 280, height: 40, borderRadius: 5, backgroundColor: this.state.btnBackgroundColor, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text style={{ fontSize: 20, color: this.state.fontColor }}>{this.state.btnSignWords}</Text>
                                            </View>
                                        </TouchableWithoutFeedback>
                                    </View>
                                    {/* </View> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* </TouchableWithoutFeedback> */}
                    </TouchableOpacity>
                </Modal>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
   
    },
    contentStyle: {
        padding: 30
    },
    contentTextStyle: {
        textAlign: 'center',
        fontSize: 26
    },
    modalLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32
    },
    modalContainer: {
        height: 500,
        width: 380,
        borderRadius: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalTitleStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: '#000'
    },
    modalButtonStyle: {

        marginTop: 20
    },
    middleText: {

        fontSize: 15,
        color: '#999999'
    },
    box: {
        width: '86%',
        // height:106,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#EFEFEF50',
    },
    smallText: {
        fontSize: 12,
        color: '#999999'
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    dots: {
        height: 10,
        width: 10,
        borderRadius: 20,
        backgroundColor: '#999999',
        flexDirection: 'row', justifyContent: 'center'
    },
    xsmalle: {
        fontSize: 10,
        color: '#999999',
    },
    center: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
});

export default ModalComp;