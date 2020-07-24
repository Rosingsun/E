import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
//底部颜色
import Bottom_nav from '../Accessories/Nav/bottom';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
function _showActive(pic, num, titleContain, newsTitle, newsTitleTow) {
    num=num+5;
  return (
    <View style={{ height: 158, width: 300, backgroundColor: "#fff", marginLeft: 10, borderRadius: 3, }}>
      <View style={{ height: '70%' }}>
        <Image style={{ height: '100%', width: '100%', borderRadius: 3, }} source={{ uri: pic }} />
        <View style={{ position: "absolute", flexDirection: "row", backgroundColor: "#2C2C2C90", width: '100%', height: '30%', alignItems: "center", bottom: 0, }}>
          <Text style={{ color: '#fff', marginLeft: 20 }} >第{num}期：</Text>
          <Text style={{ color: '#fff' }}>{titleContain}</Text>
        </View>
      </View>
      <View style={{ height: '100%' }}>
        <Text style={[styles.fontStyle]}>{newsTitle} </Text>
        <Text style={[styles.fontStyle]}>{newsTitleTow} </Text>
      </View>
    </View>
  )
};
export default class discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateone: '',
    };
  }
  render() {
    return (
      <View style={[styles.container]}>
        {/* 顶部输入框 */}
        <View style={[styles.top]}>
          <View style={[styles.nav_container]}>
            <View style={{ flexDirection: "row" }}>
              {/* <FontAwesome name={'map-marker'} size={30} color={'#fff'} /> */}
              <Ionicons name={'md-location-sharp'} size={30} color={'#fff'} />
              <Text style={{ lineHeight: 30, marginLeft: 10, color: "#fff", fontWeight: "bold" }}>杭州</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput placeholder="abibas" style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }} />
              <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
            </View>
            <AntDesign name={'calendar'} size={25} color={'#fff'} />
          </View>
        </View>
        {/* 第一部分 */}

        <ScrollView style={{ height: '80%' }}>
          <View style={{ width: "100%", height: 158, marginTop: 20, paddingLeft: 5, }}>
            <FlatList
              horizontal={true}
              data={[
                {
                  key: 'a',
                  pic: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f180715640af.jpg!/fw/780/quality/90/unsharp/true/compress/true",
                  newsTitle: "杭州西湖以茶会友，小阁相聚风景极好",
                  newsTitleTow: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
                  num: 1,
                  titleContain: "随白居易钱塘江春行",
                },
                {
                  key: 'a',
                  pic: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f180715640af.jpg!/fw/780/quality/90/unsharp/true/compress/true",
                  newsTitle: "杭州西湖以茶会友，小阁相聚风景极好",
                  newsTitleTow: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
                  num: 2,
                  titleContain: "随李白登黄鹤楼",
                },
              ]}
              renderItem={({ item }) =>
                _showActive(item.pic, item.num, item.titleContain, item.newsTitle, item.newsTitleTow)
              } />
          </View>
        </ScrollView>
        <Bottom_nav />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  fontStyle: {
    fontSize: 12,
    height: '15%',
    lineHeight: 23,
    marginLeft: 20,
    color: "#484848"
  },
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    width: 250 * biLi,
    borderRadius: 20,
    padding: 0,
    height: 35 * biLi,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    height: (90) * biLi,
    width: "100%",
    backgroundColor: "#6c9575",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 8,
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
});
