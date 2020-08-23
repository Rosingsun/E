import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

var Data = [
  {
    name: 'JK妹',
    userHead: "http://pic.51yuansu.com/pic3/cover/03/99/29/5efda46aa675b_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userWords: '一袖青衣，晚风吹彼岸。',
    place: '杭州西湖风景区',
    countNum: '11',
    showUserImg: 'http://pic.51yuansu.com/pic3/cover/03/99/29/5efda46aa675b_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
    like: 'red',
    height: 122,
  },
  {
    name: 'JK妹123213',
    userHead: "../img/a.png",
    userWords: '一袖青衣，晚风吹彼岸。',
    place: '杭州西湖风景区',
    countNum: '11',
    showUserImg: 'http://pic.51yuansu.com/pic3/cover/03/98/90/5ec62c32e30b4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
    like: 'gray',
    height: 132,
  },
  {
    name: 'JK妹123213',
    userHead: "../img/a.png",
    userWords: '一袖青衣，晚风吹彼岸。',
    place: '杭州西湖风景区',
    countNum: '11',
    showUserImg: 'http://pic.51yuansu.com/pic3/cover/03/98/90/5ec62c32e30b4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
    like: 'gray',
    height: 202,
  },
  {
    name: 'JK妹123213',
    userHead: "../img/a.png",
    userWords: '一袖青衣，晚风吹彼岸。',
    place: '杭州西湖风景区',
    countNum: '11',
    showUserImg: 'http://pic.51yuansu.com/pic3/cover/03/98/90/5ec62c32e30b4_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
    like: 'gray',
    height: 102,
  },
];
export default class recommend extends Component {

  render() {
    function _picList(name, userHead, userWords, place, countNum, showUserImg, like, height) {
      return (
        <View style={[styles.showContainer]}>
          {/* 图片框 */}
          <Image style={{ height: height, width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={{ uri: showUserImg }} />
          {/* 定位 */}
          <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
            <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
            {place}
          </Text>
          {/* 用户发言 */}
          <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}>
            {userWords}
          </Text>
          {/* 用户信息框 */}
          <View style={{ flexDirection: "row",backgroundColor:"pink",paddingHorizontal: 5, paddingVertical: 8 }}>
            <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={{ uri: userHead }} />
            <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>{name}</Text>
            <View style={{ position: "absolute", right: 10, bottom: 5 }}>
              <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}
                onPress={() => {
                  Alert.alert("you press me ")
                }}
              >
                <AntDesign name={'like2'} size={12} color={like} />
                {countNum}
              </Text>
            </View>
          </View>
         </View>
      )
    }

    return (
      <View style={{ backgroundColor: "#EFEFEF", borderRadius: 200, paddingBottom: 20 }}>
        <View style={{ flexDirection: "row", width: "94%", marginLeft: '3%' }}>
          {/* 左边这一侧的用户商品信息 */}
          <View style={{ width: "100%", flexDirection: "column", }}>
            {/* 试一下用flatlist */}
            <View style={styles.showUserlist}>
              {
                Data.map((item) => {
                  return (
                    _picList(item.name, item.userHead, item.userWords, item.place, item.countNum, item.showUserImg, item.like, item.height)
                  )
                })}
            </View>
          </View>
        </View>
        <ActivityIndicator
          animating={true}
          color='pink'
          size="large"
          style={{ width: '100%', backgroundColor: "pink" }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  showUserlist: {
    width: '100%',
    borderRadius: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  showContainer: {
    width: '49%',
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#fff",
    elevation: 4,
  },
  item: {
    padding: 0,
    height: 440,
  },
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
});

