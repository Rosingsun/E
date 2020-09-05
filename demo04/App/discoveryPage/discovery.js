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
  StatusBar
} from 'react-native';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
import Example from './Rowcard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyCustomCarousel from './card'
import ProjectsScreen from '../../lotte/cardscreen';
import Swiper from 'react-native-swiper';
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

function activityUser(userBackGroundPic, userHeardImg, userName, lineNum, userLv) {
  return (

    <View style={{ width: 260, height: 350, marginLeft: 20 }}>
      <Image style={{ height: 184, width: '100%', }} source={{ uri: userBackGroundPic }} />
      <View style={{ height: '40%', width: '100%', backgroundColor: "#fff", paddingHorizontal: 10, elevation: 2 }}>
        <Image style={{ height: 50, width: 50, borderRadius: 25, marginTop: -25, borderWidth: 2, borderColor: "#fff" }} source={{ uri: userHeardImg }} />
        <Text style={{ backgroundColor: "#fff", fontSize: 20, }}>{userName}</Text>
        <View style={{ width: 110, flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 10, color: "#999" }}>{lineNum}条游记</Text>
          <Text style={{ fontSize: 10, color: "#999999" }} >{lineNum}条路线</Text>
        </View>
        <Text style={{ fontSize: 15, color: "#999", marginTop: 10, }}>{userLv}</Text>
        <Text style={{ borderWidth: 1, borderColor: "green", width: 70, paddingVertical: 5, height: 30, paddingHorizontal: 5, textAlign: "center" }}>关注</Text>
      </View>
    </View>
  )
}

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
    backgroundColor: "#444",
  },
]


var userInfo = [
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/backgd/cover/00/57/07/5e71973618d64.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/99/16/5ee9d6e6d996d_610.jpg",
    nodeNum: "1",
    lineNum: "2",
    userLv: "Lv.1 资深游侠",
  },
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/99/596f3932bf9a8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/50/44/5bd146f2c29cc_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    nodeNum: "3",
    lineNum: "4",
    userLv: "Lv.2 资深游侠",
  },
  {
    userName: "Kali",
    userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/91/596f37567f1b8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/94/91/5cee49d4eaa59_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
    nodeNum: "5",
    lineNum: "6",
    userLv: "Lv.3 资深游侠",
  },
]

// var ENTRIES1 = [
//   {
//     key: 'a',
//     illustration: "http://pic.51yuansu.com/backgd/cover/00/57/18/5f180715640af.jpg!/fw/780/quality/90/unsharp/true/compress/true",
//     subtitle1: "杭州西湖以茶会友，小阁相聚风景极好",
//     subtitle2: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
//     num: 1,
//     title: "随白居易钱塘江春行",
//   },
//   {
//     key: 'a',
//     illustration: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2588053483,3183865902&fm=26&gp=0.jpg',
//     subtitle1: "杭州西湖以茶会友，小阁相聚风景极好",
//     subtitle2: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
//     num: 2,
//     title: "随李白登黄鹤楼",
//   },
//   {
//     key: 'a',
//     illustration:  'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2186063278,2492408580&fm=26&gp=0.jpg',
//     subtitle1: "杭州西湖以茶会友，小阁相聚风景极好",
//     subtitle2: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
//     num: 3,
//     title: "随李白登黄鹤楼",
//   },
//   {
//     key: 'a',
//     illustration:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2705126453,2771950995&fm=26&gp=0.jpg',
//     subtitle1: "杭州西湖以茶会友，小阁相聚风景极好",
//     subtitle2: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
//     num: 4,
//     title: "随李白登黄鹤楼",
//   },
//   {
//     key: 'a',
//     illustration:  'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2753143250,2580091861&fm=26&gp=0.jpg',
//     subtitle1: "杭州西湖以茶会友，小阁相聚风景极好",
//     subtitle2: "西湖国宾馆下午茶好吃bu'gui，纵享丝滑",
//     num: 5,
//     title: "随李白登黄鹤楼",
//   },
// ]
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
              <Ionicons name={'md-location-sharp'} size={30} color={'#000'} />
              <Text style={{ lineHeight: 30, color: "#000", fontWeight: "bold" }}>杭州</Text>
            </View>
            <View style={[styles.inputBox]}>
              <TextInput placeholder="搜索" style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }} />
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
          
          
          
            {/* <ScrollView
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
            </ScrollView> */}
            <Example/>
          </View>


          {/* 第二部分 */}
          <View style={{ width: '94%', marginTop: 20, paddingBottom: 10, marginLeft: '3%', backgroundColor: "#fff", borderRadius: 15, }}>
            {/* title line */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: 10, paddingTop: 10, }}>
              <Text>随诗打卡</Text>
              <Text
                onPress={() => {
                  this.props.navigation.navigate("dakaAll");
                }}
              >查看更多<FontAwesome name={'angle-right'} size={20} color={'#000'} /></Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, }}>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.One, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C9575', Two: '#6C957550', Three: '#6C957550', Four: '#6C957550' })
                }}>我的专属</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Two, color: "#fff", borderRadius: 3 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C9575', Three: '#6C957550', Four: '#6C957550' })
                }}
              >历史故事</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Three, color: "#fff", borderRadius: 3, }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C9575', Four: '#6C957550' })
                }}
              >附近地点</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Four, color: "#fff", borderRadius: 3, textAlign: "center" }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C957550', Four: '#6C9575' })
                }}
              >最多人玩</Text>
            </View>
            {/* 卡片 */}
            <View>
              <MyCustomCarousel />
            </View>
          </View>
          {/* 第三部分 */}
          {/* 竖向轮播 */}
          <View style={{ marginTop: 50, padding: 10, width: '100%', height: 400, }}>
            <View style={{ width: '100%', height: 20, alignItems: "flex-end", backgroundColor: "#fff" }}>
              <Text
                onPress={() => {
                  this.props.navigation.navigate("choiceCity")
                }}
              >更多路线<FontAwesome name={'angle-right'} size={20} color={'#000'} /></Text>
            </View>
            {
              userMap.map((item) => {
                return (
                  <Text style={{ backgroundColor: item.backgroundColor, height: '30%', width: 200, color: "#fff", marginLeft: 12 }}
                    onPress={() => {
                      this.props.navigation.navigate("BaiduMap")
                    }}
                  >{item.key}</Text>
                )
              })
            }
            {/* </ScrollView> */}
          </View>

          {/* 第四部分 */}
          <View style={{ marginTop: 20, padding: 10, backgroundColor: "#fff", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{ fontSize: 20 }}>活跃玩家</Text>
              <Text style={{ fontSize: 15, color: "#999999" }}
                onPress={() => {
                  this.props.navigation.navigate("Search");
                }}
              >排行榜 <FontAwesome name={'angle-right'} size={20} color={'#999999'} /></Text>
            </View>

            <ScrollView
              style={{ height: '100%' }}
              horizontal={true}
            >
              {
                userInfo.map((item) => {
                  return (
                    activityUser(item.userBackGroundPic, item.userHeardImg, item.userName, item.lineNum, item.userLv)
                  )
                })
              }
            </ScrollView>
          </View>
        </ScrollView>
        {/* 底部选择弹窗 */}

        <View >

        </View>
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
    backgroundColor: "#EFEFEF",
    width: '70%',
    borderRadius: 20,
    padding: 0,
    height: 35,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    height: (78),
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
    elevation: 1,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '8%',
    flexDirection: "row",
    width: "96%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "3%",
  },
});
