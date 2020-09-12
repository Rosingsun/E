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
  StatusBar,
  TouchableOpacity
} from 'react-native';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
import Example from './Rowcard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MyCustomCarousel from './card';
import VerticalMyCarousel from './Verticalcard'
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

function activityUser(userBackGroundPic, userHeardImg, userName, lineNum, userLv, select) {
  return (

    <View style={{ width: 260, height: 350, marginLeft: 20 }}>
      <Image style={{ height: 184, width: '100%', }} source={{ uri: userBackGroundPic }} />
      <View style={{ height: '40%', width: '100%', backgroundColor: "#fff", paddingHorizontal: 10, elevation: 2 }}>
        <Image style={{ height: 50, width: 50, borderRadius: 50, marginTop: -25, borderWidth: 2, borderColor: "#fff", marginLeft: '3%' }} source={{ uri: userHeardImg }} />
        <Text style={{ backgroundColor: "#fff", fontSize: 20, marginLeft: '3%', marginTop: 6 }}>{userName}</Text>
        <View style={{ width: 110, flexDirection: "row", marginLeft: '3%', marginTop: 2 }}>
          <Text style={{ fontSize: 10, color: "#999" }}>{lineNum}条游记</Text>
          <Text style={{ fontSize: 10, color: "#999999", marginLeft: 10 }} >{lineNum}条路线</Text>
        </View>
        <View style={{ marginLeft: '3%' }}>
          <Text style={{ fontSize: 10, color: "#999", marginTop: 10, marginTop: 6 }}>{userLv}</Text>
          <Text style={{ borderWidth: 1, borderRadius: 2, alignSelf: "flex-start", borderColor: "#6C9575", color: select ? '#6C9575' : "#fff", backgroundColor: select ? '#fff' : "#6C9575", fontSize: 10, paddingHorizontal: 25, paddingVertical: 5, marginTop: 10 }}>
            {select ? '关注' : '已关注'}</Text>
        </View>
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



export default class Discovery extends Component {
  static defaultProps = {
    multiList: [
      {
        id: 0,
        userName: "Kali",
        userHeardImg: "http://pic.51yuansu.com/backgd/cover/00/57/07/5e71973618d64.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/99/16/5ee9d6e6d996d_610.jpg",
        nodeNum: "1",
        lineNum: "2",
        userLv: "Lv.1 资深游侠",
        select: true
      },
      {
        id: 1,
        userName: "Kali",
        userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/99/596f3932bf9a8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/50/44/5bd146f2c29cc_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        nodeNum: "3",
        lineNum: "4",
        userLv: "Lv.2 资深游侠",
        select: false
      },
      {
        id: 2,
        userName: "Kali",
        userHeardImg: "http://pic.51yuansu.com/pic3/cover/01/79/91/596f37567f1b8_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        userBackGroundPic: "http://pic.51yuansu.com/pic3/cover/03/94/91/5cee49d4eaa59_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        nodeNum: "5",
        lineNum: "6",
        userLv: "Lv.3 资深游侠",
        select: true
      },
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      One: '#6C9575',
      Two: '#6C957559',
      Three: '#6C957550',
      Four: '#6C957550',
      multiData: this.props.multiList,
      selectMultiItem: [],
    };
  }


  //多选
  _selectMultiItemPress(item) {
    if (!item.select) {
      this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
        return x === item.id;
      }), 1);
    } else {
      this.state.selectMultiItem.push(item.id);
    }
    this.state.multiData[item.id].select = !item.select;
    this.setState({ multiData: this.state.multiData });
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
      if (item.select) {
        menuArr.push(
          //选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}>
            {activityUser(item.userBackGroundPic, item.userHeardImg, item.userName, item.lineNum, item.userLv, true)}
            {/* <View style={{backgroundColor:"red",height:100,width:100,borderRadius:100,}}></View> */}
          </TouchableOpacity>
        )
      } else {
        menuArr.push(

          // 未选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}>
            {/* <View style={{backgroundColor:"green",height:100,width:100,borderRadius:100,}}></View> */}
            {activityUser(item.userBackGroundPic, item.userHeardImg, item.userName, item.lineNum, item.userLv, false)}
          </TouchableOpacity>
        )
      }
    }
    return (
      //讲各类状态框输出到前端页面
      <View style={{ flexDirection: "row" }}>
        {menuArr}
      </View>
    );
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
            <Example />
          </View>


          {/* 第二部分 */}
          <View style={{ width: '94%', marginTop: 20, paddingBottom: 10, marginLeft: '3%', backgroundColor: "#fff", borderRadius: 15, }}>
            {/* title line */}
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', paddingHorizontal: '3%', paddingTop: 10, }}>
              <Text style={{ fontSize: 15 }}>随诗打卡</Text>

              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#999999', fontSize: 12, marginRight: 5 }}
                  onPress={() => {
                    this.props.navigation.navigate("dakaAll");
                  }}
                >查看更多</Text>
                <FontAwesome name={'angle-right'} size={20} color={'#999999'} onPress={() => {
                  this.props.navigation.navigate("dakaAll");
                }} />
              </View>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 10, }}>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.One, color: "#fff", borderRadius: 3, fontSize: 15, padding: 5 }}
                onPress={() => {
                  this.setState({ One: '#6C9575', Two: '#6C957550', Three: '#6C957550', Four: '#6C957550' })
                }}>我的专属</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Two, color: "#fff", borderRadius: 3, fontSize: 15, padding: 5 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C9575', Three: '#6C957550', Four: '#6C957550' })
                }}
              >历史故事</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Three, color: "#fff", borderRadius: 3, fontSize: 15, padding: 5 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C9575', Four: '#6C957550' })
                }}
              >附近地点</Text>
              <Text style={{ width: '20%', textAlign: "center", backgroundColor: this.state.Four, color: "#fff", borderRadius: 3, textAlign: "center", fontSize: 15, padding: 5 }}
                onPress={() => {
                  this.setState({ One: '#6C957550', Two: '#6C957550', Three: '#6C957550', Four: '#6C9575' })
                }}
              >最多人玩</Text>
            </View>
            {/* 卡片 */}
            <View>
              {/* <MyCustomCarousel {...this.props} /> */}
              <MyCustomCarousel {...this.props} />
            </View>
          </View>
          {/* 第三部分 */}
          {/* 竖向轮播 */}
          <View style={{ padding: 10, width: '94%', marginTop: 20, marginLeft: '3%', backgroundColor: "#fff", borderRadius: 15, }}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: 'center', }}>
              <Text style={{ fontSize: 15 }}>浙E路线</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "#999999", marginRight: 5 }}
                  onPress={() => {
                    this.props.navigation.navigate("choiceCity")
                  }}
                >更多路线</Text><FontAwesome name={'angle-right'} size={20} color={'#999999'} onPress={() => {
                  this.props.navigation.navigate("choiceCity")
                }} />
              </View>
            </View>
            <View style={{ backgroundColor: '#fff', borderRadius: 15, }}>
              <VerticalMyCarousel {...this.props} />
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ height: 1, width: '80%', backgroundColor: '#70707038' }} />
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 6 }}>
                <Ionicons name={'add-circle-outline'} size={25} color={'#000000'}
                  onPress={() => {
                    this.props.navigation.navigate("ProductionRoute");
                  }} />
                <Text style={{ fontSize: 15, Color: '#000000', marginLeft: 3 }}
                  onPress={() => {
                    this.props.navigation.navigate("ProductionRoute");
                  }}>我也要规划线路</Text>
              </View>
            </View>
          </View>

          {/* 第四部分 */}
          <View style={{ marginTop: 20, backgroundColor: "#fff", }}>
            <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: '5%', paddingVertical: '3%', }}>
              <Text style={{ fontSize: 15 }}>活跃玩家</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, color: "#999999", marginRight: 5 }}
                  onPress={() => {
                    this.props.navigation.navigate("Search");
                  }}
                >排行榜
              </Text>
                <FontAwesome name={'angle-right'} size={20} color={'#999999'} onPress={() => {
                  this.props.navigation.navigate("Search");
                }} />
              </View>
            </View>

            <ScrollView
              style={{ height: '100%', width: '100%' }}
              horizontal={true}>
              {
                this._renderMultiMark()
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
