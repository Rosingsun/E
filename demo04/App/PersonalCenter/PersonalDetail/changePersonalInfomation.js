import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Alert,
    Text,
    Dimensions,
    Image,
    TextInput,
    TouchableNativeFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import Picker from 'react-native-picker';
// import {storage} from '../../Accessories/storage/index'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;


//底部选择框
let data = ['男', '女'];
Picker.init({
    pickerData: data,
    selectedValue: [59],
    onPickerConfirm: data => {
        console.log(data);
    },
    onPickerCancel: data => {
        console.log(data);
    },
    onPickerSelect: data => {
        console.log(data);
    }
});


export default class changePersonalInfoMation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PersonalSignature: "写一段话介绍自己吧！",
            username: "用户名",
            
        }
    }
    // componentDidMount() {
    //     storage.load('userInfo', (data) => {
    //         this.setState({
    //             username:data.username,
    //             PersonalSignature:data.PersonalSignature,
    //             head:data.head,  
    //         })
            
    //       })
    //     }
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        {/* <View style={{ flexDirection: "row" }}> */}
                        <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
                            this.props.navigation.goBack();
                        }} />
                        {/* </View> */}
                        <Text style={{ color: "#000", fontSize: 20, marginRight: 25 }}>编辑资料</Text>
                        <Text style={{ color: "#000", fontSize: 15, marginRight: 25 }}>保存</Text>
                        {/* <View>

                        </View> */}
                    </View>
                </View>
                <View style={{ width: '100%', height: '26%', justifyContent: "center", alignItems: "center" }}>
                    <Image style={{ height: 100, width: 100, borderRadius: 50 }} source={{ uri: "http://pic.51yuansu.com/pic3/cover/03/99/63/5f2a55dd406ec_610.jpg!/fw/260/quality/90/unsharp/true/compress/true" }} />
                    <Text style={{ color: "#999999", marginTop: 10 }}
                        onPress={() => {
                            // 从本地相册选择单幅图像
                            // 调用多个图像
                            ImagePicker.openPicker({
                                // multiple: true,
                                width: 400,
                                height: 400,
                                cropping: true,
                                // showCropGuidelines :true
                            }).then(images => {
                                console.log(images);
                            });
                        }}
                    >点击更新图像</Text>
                </View>
                <AntDesign name={'right'} size={20} color={'#999999'} style={{ position: "absolute", right: 20 }} onPress={() => {
                }} />
                {/* </View> */}
                <View>
                    <View style={styles.button}>
                        <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>用户名</Text>
                        <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 20 }}>
                            <TextInput
                                placeholder={this.state.username}
                            />
                            <AntDesign name={'right'} size={20} color={'#999999'} />
                        </View>
                    </View>
                    <TouchableNativeFeedback
                        onPress={() => {
                            Picker.show();
                        }}
                    >
                        <View style={styles.button}>
                            <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>性别</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", paddingRight: 20 }}>
                                <Text>男</Text>
                                <AntDesign name={'right'} size={20} color={'#999999'}

                                />
                            </View>
                        </View>
                    </TouchableNativeFeedback>
                    <View style={styles.button}>
                        <Text style={{ fontSize: 15, color: "#000", marginLeft: 14 }}>简介</Text>
                        <TextInput
                            placeholder={this.state.PersonalSignature}
                        />
                    </View>

                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#EFEFEF",
        flexDirection: "column"
    },
    top: {
        height: (78) * biLi,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '6%',
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    button: {
        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 10,
        justifyContent: "space-between"
    },
    clean: {
        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 30,
        justifyContent: 'space-between',
    },
    new: {
        width: "90%",
        height: 44 * biLi,
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: 10,
        flexDirection: "row",
        marginLeft: "5%",
        marginTop: 10,
        justifyContent: 'space-between',
    }
})

