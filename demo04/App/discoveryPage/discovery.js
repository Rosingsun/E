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
import Swiper from 'react-native-swiper';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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

var userMap = [
  {
    key: "1",
    backgroundColor: "#111",
  },
  {
    key: "2",
    backgroundColor: "#222",
  },
  {
    key: "3",
    backgroundColor: "#333",
  },
  {
    key: "4",
    backgroundColor: "#333",
  },
]


var userInfo = [
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/backgd/cover/00/57/07/5e71973618d64.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/99/16/5ee9d6e6d996d_610.jpg",
    nodeNum: "Kali",
    lineNum: "Kali",
    userLv: "Lv.1 资深游侠",
  },
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/99/596f3932bf9a8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/50/44/5bd146f2c29cc_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    nodeNum: "Kali",
    lineNum: "Kali",
    userLv: "Lv.2 资深游侠",
  },
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/91/596f37567f1b8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/94/91/5cee49d4eaa59_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    nodeNum: "Kali",
    lineNum: "Kali",
    userLv: "Lv.3 资深游侠",
  },
]

var weakMainTitle = [
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
  {
    key: 'a',
    pic: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f180715640af.jpg!/fw/780/quality/90/unsharp/true/compress/true",
    newsTitle: "杭州西湖以茶会友，小阁相聚风景极好",
    newsTitleTow: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
    num: 3,
    titleContain: "随李白登黄鹤楼",
  },
  {
    key: 'a',
    pic: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f180715640af.jpg!/fw/780/quality/90/unsharp/true/compress/true",
    newsTitle: "杭州西湖以茶会友，小阁相聚风景极好",
    newsTitleTow: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
    num: 4,
    titleContain: "随李白登黄鹤楼",
  },
]
export default class Discovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

        <ScrollView style={{ height: '100%' }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ width: "100%", height: 198, marginTop: 20, paddingLeft: 5, }}>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>每周专题</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {
                weakMainTitle.map((item) => {
                  return (
                    _showActive(item.pic, item.num, item.titleContain, item.newsTitle, item.newsTitleTow)
                  )
                })
              }
            </ScrollView>
          </View>


          {/* 第二部分 */}
          <View style={{ width: '94%', marginTop: 20, height: 400, marginLeft: '3%', backgroundColor: "#fff", borderRadius: 15, }}>
            {/* title line */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingTop: 10, }}>
              <Text>随诗打卡</Text>
              <Text>查看更多<FontAwesome name={'angle-right'} size={20} color={'#000'} /></Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10 }}>
              <Text style={{ width: '18%', backgroundColor: this.state.One, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C9575', Two: '#6C957550', Three: '#6C957550', Four: '#6C957550' })
                }}>  我的专属</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Two, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C9575', Three: '#6C957550', Four: '#6C957550' })
                }}
              >  历史故事</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Three, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C9575', Four: '#6C957550' })
                }}
              >  附近地点</Text>
              <Text style={{ width: '18%', backgroundColor: this.state.Four, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C957550', Four: '#6C9575' })
                }}
              >  最多人玩</Text>
            </View>
            <View>
              <View style={{ height: '100%', width: '100%' ,overflow:"hidden"}}>
                <TouchableWithoutFeedback
                style={{height:'100%',width:'100%'}}
                  onPress={()=>{
                    Alert.alert("you touch me");
                  }}
                >
                <ProjectsScreen />
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          {/* 第三部分 */}
          {/* 竖向轮播 */}
          <View style={{ marginTop: 40, padding: 10, width: '100%', backgroundColor: "red", height: 400, }}>
            <ScrollView
              horizontal={true}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {
                userMap.map((item) => {
                  return (
                    // <View style={{ height: '100%', width: 300 }}>
                    <Text style={{ backgroundColor: "skyblue", height: '30%', width: 200, color: "#fff", marginLeft: 12 }}>{item.key}</Text>
                    // </View>
                  )
                })
              }
            </ScrollView>
          </View>

          {/* 第四部分 */}
          <View style={{ marginTop: 20, padding: 10, backgroundColor: "#fff", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 20 }}>活跃玩家</Text>
              <Text style={{ fontSize: 15, color: "#999999" }}>排行榜 <FontAwesome name={'angle-right'} size={20} color={'#999999'} /></Text>
            </View>

            <ScrollView
              style={{ height: '100%' }}
              horizontal={true}
            >
              {
                userInfo.map((item) => {
                  return (
                    <View style={{ width: 260, height: 350, marginLeft: 20 }}>
                      <Image style={{ height: 184, width: '100%', }} source={{ uri: item.userBackGroundPic }} />
                      <View style={{ height: '40%', width: '100%', backgroundColor: "#fff", paddingHorizontal: 10, elevation: 2 }}>
                        <Image style={{ height: 50, width: 50, borderRadius: 25, marginTop: -25, borderWidth: 2, borderColor: "#fff" }} source={{ uri: item.userHeardImg }} />
                        <Text style={{ backgroundColor: "#fff", fontSize: 20, }}>{item.userName}</Text>
                        <View style={{ width: 110, flexDirection: "row", justifyContent: "space-between" }}>
                          <Text style={{ fontSize: 10, color: "#999" }}>{item.lineNum}条游记</Text>
                          <Text style={{ fontSize: 10, color: "#999999" }} >{item.lineNum}条路线</Text>
                        </View>
                        <Text style={{ fontSize: 15, color: "#999", marginTop: 10 }}>{item.userLv}</Text>
                        <Text style={{ borderWidth: 1, borderColor: "green", width: 50, paddingVertical: 5, height: 30, paddingHorizontal: 5, textAlign: "center" }}>关注</Text>
                      </View>
                    </View>
                  )
                })
              }
            </ScrollView>
          </View>
        </ScrollView>
      </View >
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
