
import React, { Component, useEffect } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert,
    Image,
    Text,
    Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Globla from '../Global/global.js'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class UserShop extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                {/* 图片框 */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        Alert.alert("YOU PRESS ME!");
                    }}>
                    <Image style={{ height: 240, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={require('../../img/b.png')} />
                </TouchableWithoutFeedback>
                {/* 定位 */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        Alert.alert("your press the text");
                    }}>
                    <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
                        <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
                        杭州西湖风景区
                    </Text>
                </TouchableWithoutFeedback>

                {/* 用户发言 */}
                <TouchableWithoutFeedback
                    onPress={() => {
                        Alert.alert("your press the text");
                    }}>
                    <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}>
                        天色很好,远处的夕阳真的很美!
                    </Text>
                </TouchableWithoutFeedback>
                {/* 用户信息框 */}
                <View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 8 }}>
                    <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={require('../../img/a.png')} />
                    <TouchableWithoutFeedback
                        onPress={() => {
                            Alert.alert("your press the Name");
                        }}>
                        <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>
                            Jk妹$
                    </Text>
                    </TouchableWithoutFeedback>
                    <View style={{ position: "absolute", right: 10, bottom: 5 }}>
                        <TouchableWithoutFeedback >
                            <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>
                                <FontAwesome name={'heart'} size={12} color={'red'} />
                                17
                            </Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        width:185*biLi,
        backgroundColor:"blue",
        backgroundColor: "#FFF",
        borderRadius:3,
        marginTop:5,
    },
});
