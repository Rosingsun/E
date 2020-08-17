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
import AntDesign from 'react-native-vector-icons/AntDesign'
// import ImagePicker from 'react-native-image-picker';
import Picker from 'react-native-picker';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

// 上传图片/这里即头像
const photoOptions = {
    title:'请选择',
    quality: 0.8,
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    allowsEditing: true,
    noData: false,
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};
  function choosePicker(){
    ImagePicker.showImagePicker(photoOptions, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        }
        else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        }
        else {
            let source = { uri: response.uri };
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
            this.setState({
                avatarSource: source
            });
        }
    });
}


//底部选择框
let data = ['男','女'];
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
            ableInput: "写一段话介绍自己吧！",
            userName: "用户名",
        }
    }
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
                        onPress={()=>{
                            choosePicker();
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
                                placeholder={this.state.userName}
                            />
                            <AntDesign name={'right'} size={20} color={'#999999'} />
                        </View>
                    </View>
                <TouchableNativeFeedback
                onPress={()=>{
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
                            placeholder={this.state.ableInput}
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

