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
  Alert,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProjectsScreen from '../../lotte/cardscreen';
//底部颜色
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
function _showActive(pic, num, titleContain, newsTitle, newsTitleTow) {
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
      One: '#6C9575',
      Two: '#6C957559',
      Three: '#6C957550',
      Four: '#6C957550',
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
              <Ionicons name={'md-location-sharp'} size={30} color={'#000'} />
              <Text style={{ lineHeight: 30, marginLeft: 10, color: "#000", fontWeight: "bold" }}>杭州</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput placeholder="abibas" style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }} />
              <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
            </View>
            <AntDesign name={'calendar'} size={25} color={'#000'} />
          </View>
        </View>
        {/* 第一部分 */}

        <ScrollView style={{ height: '80%' }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", height: 158, marginTop: 20, paddingLeft: 5, }}>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>每周专题</Text>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
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


          {/* 第二部分 */}
          <View style={{ width: '94%', marginTop: 20, height: 340, marginLeft: '3%', backgroundColor: "#fff", borderRadius: 15, }}>
            {/* title line */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingTop: 10, }}>
              <Text>随诗打卡</Text>
              <Text>查看更多<FontAwesome name={'angle-right'} size={20} color={'#000'} /></Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
              <Text style={{ width: '18%', backgroundColor: this.state.One, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C9575' })
                  this.setState({ Two: '#6C957550' })
                  this.setState({ Three: '#6C957550' })
                  this.setState({ Four: '#6C957550' })
                }}>  我的专属</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Two, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550' })
                  this.setState({ Two: '#6C9575' })
                  this.setState({ Three: '#6C957550' })
                  this.setState({ Four: '#6C957550' })
                }}
              >  历史故事</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Three, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550' })
                  this.setState({ Two: '#6C957550' })
                  this.setState({ Three: '#6C9575' })
                  this.setState({ Four: '#6C957550' })
                }}
              >  附近地点</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Four, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550' })
                  this.setState({ Two: '#6C957550' })
                  this.setState({ Three: '#6C957550' })
                  this.setState({ Four: '#6C9575' })
                }}
              >  最多人玩</Text>
            </View>
            <View>
              {/* <View>
                <View style={{ height: '100%', width: '100%', backgroundColor: "red" }}>
                  <ProjectsScreen/>
                </View>
              </View> */}
            </View>
          </View>
        </ScrollView>
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
    backgroundColor: "#EFEFEF",
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
    height: (78) * biLi,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
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
