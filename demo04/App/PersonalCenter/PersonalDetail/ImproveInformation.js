import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;
import Picker from 'react-native-picker';
let choiceTime = [
    {
        '1天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '2天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '3天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '4天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '5天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '6天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
    {
        '7天': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    },
];

export default class improveInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            turnOn: true,
            turnOff: false,
            preTime: "1天3"
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Top}>
                    <AntDesign name={'left'} size={32} color='#000000' onPress={() => {
                        this.props.navigation.goBack()
                    }} />
                    <Text style={{ fontSize: 20, color: '#000000', marginLeft: '12%' }}>完善信息</Text>
                    <Text style={{ fontSize: 12, color: '#fff', backgroundColor: "#6C9575", borderRadius: 15, padding: 2, paddingHorizontal: 5 }}
                        onPress={() => {
                            this.props.navigation.navigate("bottomTab")
                        }}
                    >完成(3/3)</Text>
                </View>
                <View>
                    <View style={{ flexDirection: "row", width: '94%', marginTop: 15, marginLeft: '3%' }}>
                        <Text style={{ backgroundColor: "#2F3843", color: "#fff", lineHeight: 40, borderRadius: 20, paddingHorizontal: 12 }}>线路名称</Text>
                        <TextInput
                            style={{ width: '65%', height: 40, backgroundColor: "#fff", marginLeft: 10, borderRadius: 3 }}
                        ></TextInput>
                    </View>
                    <View style={{ flexDirection: "row", width: '94%', marginTop: 15, marginLeft: '3%' }}>
                        <Text style={{ backgroundColor: "#2F3843", color: "#fff", lineHeight: 40, borderRadius: 20, paddingHorizontal: 12 }}>预计时常</Text>
                        <Text
                            style={{ width: '65%', height: 40, lineHeight: 40, textAlign: "center", backgroundColor: "#fff", marginLeft: 10, borderRadius: 3 }}
                            onPress={() => {
                                Picker.init({
                                    pickerData: choiceTime,
                                    pickerTitleText: "时间",
                                    pickerConfirmBtnText: "确定",
                                    pickerCancelBtnText: "取消",
                                    onPickerConfirm: data => {
                                        this.setState({ preTime: data })
                                    },
                                    onPickerCancel: data => {
                                        console.log(data);
                                    },
                                    onPickerSelect: data => {
                                        this.setState({ preTime: data })
                                    }
                                });
                                Picker.show();
                            }}>{this.state.preTime} 小时</Text>
                    </View>
                    <View style={{ width: '94%', marginLeft: '3%', backgroundColor: "#fff", marginTop: 15, padding: 8 }}>
                        <Text style={{ width: '100%', textAlign: "center" }}>备注</Text>
                        <TextInput
                            placeholder="nini"
                            style={{ backgroundColor: "#efefef", height: 90 }}
                        />
                    </View>
                </View>
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
    titleName: {
        backgroundColor: "#2F3843",
        color: "#fff",
        lineHeight: 40,
        borderRadius: 20,
        paddingHorizontal: 12
    },
})