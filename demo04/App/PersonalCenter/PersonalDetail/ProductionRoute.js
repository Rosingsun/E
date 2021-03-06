import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import MFImage from "../../DiscoveryPage/moreLine/fengzhuang/fengzhuang";
import MFImage from "../../discoveryPage/moreLine/fengzhuang";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
export default class ProductionRoute extends Component {
    static defaultProps = {
        multiList: [
            {
                id: 0,
                CcityName: "杭州",
                EcityName: "Hang Zhou",
                backImgSrc: require("../../discoveryPage/moreLine/photo/hangzhou.jpg"),
                select: false,
            },
            {
                id: 1,
                CcityName: "宁波",
                EcityName: "Ning Bo",
                backImgSrc: require("../../discoveryPage/moreLine/photo/ningbo.jpg"),
                select: false,
            },
            {
                id: 2,
                CcityName: "嘉兴",
                EcityName: "Jia Xing",
                backImgSrc: require("../../discoveryPage/moreLine/photo/jiaxing.jpg"),
                select: false,
            },
            {
                id: 3,
                CcityName: "绍兴",
                EcityName: "Shao Xing",
                backImgSrc: require("../../discoveryPage/moreLine/photo/shaoxing.jpg"),
                select: false,
            },
            {
                id: 4,
                CcityName: "舟山",
                EcityName: "Zhou Shan",
                backImgSrc: require("../../discoveryPage/moreLine/photo/zhoushan.jpg"),
                select: false,
            },
            {
                id: 5,
                CcityName: "温州",
                EcityName: "Wen Zhou",
                backImgSrc: require("../../discoveryPage/moreLine/photo/wenzhou.jpg"),
                select: false,
            },
            {
                id: 6,
                CcityName: "湖州",
                EcityName: "Hu Zhou",
                backImgSrc: require("../../discoveryPage/moreLine/photo/huzhou.jpg"),
                select: false,
            },
            {
                id: 7,
                CcityName: "丽水",
                EcityName: "Li Shui",
                backImgSrc: require("../../discoveryPage/moreLine/photo/lishui.jpg"),
                select: false,
            },
            {
                id: 8,
                CcityName: "金华",
                EcityName: "Jin Hua",
                backImgSrc: require("../../discoveryPage/moreLine/photo/jinhua.jpg"),
                select: false,
            },
            {
                id: 9,
                CcityName: "衢州",
                EcityName: "Qu Zhou",
                backImgSrc: require("../../discoveryPage/moreLine/photo/quzhou.jpg"),
                select: false,
            },
            {
                id: 10,
                CcityName: "台州",
                EcityName: "Tai Zhou",
                backImgSrc: require("../../discoveryPage/moreLine/photo/taizhou.jpg"),
                select: false,
            },
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            turnOn: true,
            turnOff: false,
            choiceWichOne: '',
            borderColor: "#FAAF3D",
            choiceFlag: true,
            multiData: this.props.multiList,
            selectMultiItem: 0,
        }
    }
    //单选
    _selectMultiItemPress(item) {
            this.setState({selectMultiItem:item.CcityName})
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
            if (item.CcityName == this.state.selectMultiItem) {
                menuArr.push(
                    //选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markChecked]}
                        activeOpacity={1}
                    >
                        <View style={[styles.Citystyle, { borderColor: this.state.borderColor }]} >
                            <View style={{ height: '100%', width: '100%' }}>
                                <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={item.backImgSrc} />
                                <Text style={styles.photoWord} pointerEvents="none">{item.CcityName}</Text>
                                <Text style={styles.photoEnglish} pointerEvents="none"> {item.EcityName}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } else {
                menuArr.push(
                    // 未选中状态
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)}
                        style={[styles.markRow, styles.markChecked]}
                        activeOpacity={1}
                    >
                            <View style={[styles.Citystyle, { borderColor: "#fff" }]} >
                                <View style={{ height: '100%', width: '100%' }}>
                                    <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={item.backImgSrc} />
                                    <Text style={styles.photoWord} pointerEvents="none">{item.CcityName}</Text>
                                    <Text style={styles.photoEnglish} pointerEvents="none"> {item.EcityName}</Text>
                                </View>
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

            <View style={styles.container}>
                <View style={styles.Top}>
                    <View style={{ width: '94%', marginLeft: '3%', flexDirection: "row", justifyContent: 'space-between', marginTop:'8%' }}>
                        <AntDesign name={'left'} size={25} color='#000000' onPress={() => {
                            this.props.navigation.goBack()
                        }} />
                        <Text style={{ fontSize: 20, color: '#000000',position:"absolute",zIndex:-1,width:'100%',textAlign:"center"}}>选择城市</Text>
                        <View style={{backgroundColor: "#6C9575", borderRadius: 15,justifyContent:'center',paddingHorizontal:10,alignItems:'flex-start'}}>
                            
                        <Text style={{ fontSize: 12, color: '#fff', backgroundColor: "#6C9575", borderRadius: 15,justifyContent:'center',alignItems:'center' }}
                            onPress={() => {
                                this.props.navigation.navigate("dakaPlaceChoice",{selectMultiItem:this.state.selectMultiItem})
                                this._submitMultiPress()
                            }}
                        >下一步</Text>
                        <View style={{height:2,width:10,backgroundColor:'#FAAF3D',}}/>
                        </View>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={[styles.someTouch,{paddingBottom:20}]}>
                        {this._renderMultiMark()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFEFEF',
    },
    Top: {
        height: 78,
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // justifyContent:"space-between",
        justifyContent: "space-between",
        flexDirection: 'row',
        elevation: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '100%',
        backgroundColor: "#fff"
    },
    Citystyle: {
        width: "94%",
        marginLeft: '3%',
        height: 110,
        backgroundColor: "#fff",
        borderWidth: 6,
        borderRadius: 3,
        borderColor: "#fff",
        marginTop: 20
    },
    photoWord: {
        marginTop: '-18%',
        zIndex: 10,
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '900',
    },
    photoEnglish: {
        width: '100%',
        textAlign: 'center',
        zIndex: 100,
        color: '#FFFFFF',
        fontSize: 15
    },

    multiBox: {
        flexDirection: "column"
    },
    markRow: {
    },
    markChecked: {
        width: "100%"
    },
    markUnCheck: {
        backgroundColor: "white",
        borderColor: "#fff",
        borderWidth: 2,
    },
    markCheckedText: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
        flexDirection: "row",
        width: '100%'
    },
    markUnCheckText: {
        fontSize: 15,
        color: "#000",
        textAlign: "center",
    },
})