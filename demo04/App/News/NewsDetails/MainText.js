import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, StatusBar, FlatList, ItemDivideComponent, TextInput, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('light-content');
function bottomLine() {
  return (
    <View style={{ width: '100%', alignItems: 'center' }}>
      <View style={{ height: 1, backgroundColor: '#EFEFEF', width: '73%', marginLeft: '5%' }} />
    </View>
  );
};
export default class MainText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOn: true,
      turnOff: false
    }
  }
  render() {
    return (

      // TOP
      <View style={styles.container}>
        <View style={styles.Top}>
          <AntDesign name='leftcircle' size={32} color='#fff' onPress={() => {
            Alert.alert("返回")
          }} />
          <Text style={{ fontSize: 20, color: "#FFFFFF" }}>游记正文</Text>
          <Feather name="more-horizontal" size={40} color="#FFFFFF" onPress={() => {
            Alert.alert("更多")
          }} />
        </View>
        {/* 内容 */}
        <View style={{ height: '80%' }}>
          <ScrollView style={{ backgroundColor: "#43949B", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, }}>

            {/* 九宫格 */}
            <View style={styles.ninePicture}>
              {/* 九宫格信息 */}
              <View style={styles.nineInformation}>
                {/* 用户头像设置，注意，因为是网络图片，所以引用的时候需要规定大小 */}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                  <View style={styles.userHead}>
                    <Image source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595171534094&di=3c41f9bdff8f3feef2ead6f9bc39ccff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201709%2F03%2F20170903163511_rwWLJ.jpeg' }}
                      style={{ width: 40 * biLi, height: 40 * biLi, borderRadius: 30 * biLi, }}></Image>
                  </View>
                  <View style={styles.userId}>
                    <Text style={{ fontSize: 15, color: '#000000', }}>石原里美</Text>
                    <Text style={{ fontSize: 10, color: '#999999', }}>2020.7.19.20:25</Text>
                  </View>
                  <Ionicons name="eye-outline" size={25} color="#000000" style={{ position: "absolute", right: 20 * biLi }}
                    onPress={() => {
                      Alert.alert("查看详情")
                    }}
                  />
                </View>
              </View>
              {/* 九宫格下面的用户文字 */}
              <View style={styles.word}>
                <Text style={{ color: "#FFB16C", fontSize: 15 }}>#话题：论如何迷倒万千少女#</Text>
                <Text style={{ fontSize: 15 }}>文字:成为杰哥。这段话要凑到三行，我也不知道杰哥怎么想的，咱也不敢说咱也不敢问,咱只能默默码代码，希望杰哥饶了我。</Text>
              </View>
              <FlatList
                data={[
                  { photo: '../../img/1.jpg' },
                  { photo: '../../img/1.jpg' },
                  { photo: '../../img/1.jpg' },
                  { photo: '../../img/1.jpg' },
                  { photo: '../../img/1.jpg' },
                  { photo: '../../img/1.jpg' },
                ]}

                numColumns={3}
                renderItem={({ item }) =>
                  <View style={styles.photolist}>
                    <Image style={styles.ninephoto} source={require('../../img/1.jpg')} />
                  </View>
                } />
              {/* 九宫格底部的定位 */}
              <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 50, color: '#43949B', marginTop: -25, marginBottom: -20 }}>·····························</Text></View>
              <View style={styles.Route}>
                <Image style={{ width: '100%', height: 90 }} source={require('../..//img/1.jpg')} />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 32, backgroundColor: '#43949B30', marginLeft: '3%', paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 12, color: '#197178' }} onPress={() => {
                    Alert.alert("查看tag")
                  }}>#欲把西湖比西子</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 32, backgroundColor: '#43949B30', marginLeft: "3%", paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 12, color: '#197178' }} onPress={() => {
                    Alert.alert("查看tag")
                  }}>#古诗打卡大赛</Text>
                </View>
              </View>

              <View style={styles.map}>
                <Feather name="map-pin" size={25} color="#999999" onPress={() => {
                  Alert.alert("查看定位")
                }}>
                  <Text style={{ fontSize: 15, color: '#999999' }}>杭州西湖风景区</Text>
                </Feather>

              </View>
            </View>
            {/* 评论 */}
            <View style={styles.talk}>
              <View style={styles.textTop}>
                <Text style={{ fontSize: 20, fontWeight: '300' }}>全部评论</Text>
                <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Text style={{ fontSize: 50, color: '#43949B', marginTop: -25, marginBottom: -15 }}>·····························</Text></View>
              </View>
              {/* 需要数据库开始用评论 */}
              {/* <View style={styles.uesrTalk}> */}
              <View >
                <FlatList
                  data={[
                    {
                      head: '../../img/1.jpg',
                      id: "桥本环奈",
                      time: '2020.7.20.16.14',
                      word: "这是我发表的评论",
                      ddttaa:[
                        { idd: "user01" ,wordd: "这是小评论01"},
                        {idd: "user02" ,wordd: "这是小评论02" },
                      ]
                    },
                    {
                      head: '../../img/1.jpg',
                      id: "桥本环奈",
                      time: '2020.7.20.16.14',
                      word: "这是我发表的评论",
                      ddttaa:[
                        { idd: "user03" ,wordd: "这是小评论03"},
                        {idd: "user04" ,wordd: "这是小评论04" },
                        {idd: "user05" ,wordd: "这是小评论05" },
                        { idd: "user03" ,wordd: "这是小评论03"},
                        {idd: "user04" ,wordd: "这是小评论04" },
                        {idd: "user05" ,wordd: "这是小评论05" },
                      ]
                    },
                  ]}
                  ItemSeparatorComponent={bottomLine}
                  // numColumns ={3}
                  renderItem={({ item }) =>
                    <View style={styles.talkList}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.headView} source={require('../../img/1.jpg')} />
                        <View style={{ marginLeft: 10, width: '85%' }}>
                          <Text style={{ fontSize: 12, color: '#4F4F4F' }}>{item.id}</Text>
                          <Text style={{ fontSize: 15 }}>{item.word}</Text>

                          {item.ddttaa.map((item) => {
                            return(
                            <View style={{ width: "92%", backgroundColor: '#EFEFEF', flexDirection: 'row', borderRadius: 5 }}>
                              <Text style={{ marginLeft: '5%', color: '#FFB16C', fontSize: 10 }}>{item.idd}:</Text>
                              <Text style={{ color: '#000000', fontSize: 10 }}>{item.wordd}</Text>
                            </View>
                          )})}
                          <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: "100%", marginBottom: 5 }}>
                            <Text style={{ fontSize: 10, color: '#999999' }}>{item.time}</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', }}>
                              <Ionicons name="chatbox-ellipses-outline" size={15} color="#999999" style={{ paddingRight: 12 * biLi, }} onPress={() => { Alert.alert("评论") }}></Ionicons>
                              <AntDesign name="like2" size={15} color="#999999" onPress={() => {
                                Alert.alert("点赞")
                              }}></AntDesign>
                              <Text style={{ fontSize: 12, color: '#999999', marginLeft: 2 }}>200</Text>
                            </View>
                          </View>
                        </View>
                      </View >
                      <View style={{ height: 10 }}></View>

                    </View>
                  } />
              </View>
            </View>

          </ScrollView>
        </View>
        {/* 底部输入栏 */}
        <View style={styles.bottomText}>
          <View style={{ height: '75%', width: '60%', backgroundColor: '#FFFFFF', borderRadius: 20, marginLeft: '3%' }}>
            <TextInput style={{ justifyContent: 'center', fontSize: 15, marginLeft: '3%' }} placeholder='评论'></TextInput>
          </View>
          <AntDesign name="staro" size={28} color="#FFFFFF" onPress={() => {
            Alert.alert('收藏成功')
          }}></AntDesign>
          <FontAwesome5 name="share-square" size={25} color="#FFFFFF"
            onPress={() => { Alert.alert("转发成功") }} ></FontAwesome5>
          <View style={{ height: 28, width: 60, borderColor: '#FFFFFF', borderWidth: 1, borderRadius: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <AntDesign name="like2" size={20} color="#FFFFFF" onPress={() => {
              Alert.alert("点赞")
            }}></AntDesign>
            <Text style={{ fontSize: 12, color: '#FFFFFF', marginLeft: 3 }}>200</Text>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
  Top: {
    height: 90,
    backgroundColor: "#FFB16C",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
    paddingLeft: '3%',
    paddingRight: '3%'
  },
  userNote: {
    alignItems: "center",

  },
  ninePicture: {
    width: '94%',
    marginLeft: '3%',
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginTop: 30,
  },
  nineInformation: {

    height: 60 * biLi,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    justifyContent: 'space-around'


  },
  userHead: {
    paddingLeft: "3%",
    paddingTop: 10
  },
  userId: {
    justifyContent: 'flex-start',
    paddingLeft: 12,
    marginTop: 5,
  },
  talk: {
    height: '100%',
    borderRadius: 15,
    backgroundColor: 'white',
    width: "94%",
    marginLeft: "3%",
    marginTop: 20 * biLi,
  },
  word: {
    width: "94%",
    marginLeft: "3%",
    flexDirection: "row",
    flexWrap: 'wrap',


  },
  photo: {
    width: "94%",
    marginLeft: "3%",
    flexDirection: "row",
    flexWrap: 'wrap',
    backgroundColor: "#FFFFFF",
    alignItems: 'center',

  },
  photolist: {
    paddingTop: 6,
    marginLeft: 9 * biLi,
    flexDirection: "row",
  },
  ninephoto: {
    width: 117 * biLi,
    height: 117 * biLi,
  },
  map: {
    width: "94%",
    marginLeft: "3%",
    marginTop: 8,
    marginBottom: 20
  },
  textTop: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70
  },
  talkList: {
    width: '94%',
    marginLeft: '3%',
  },
  headView: {
    width: 40,
    height: 40,
    borderRadius: 40
  },
  bottomText: {
    position: 'absolute',
    height: 50,
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFB16C',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Route: {
    justifyContent: "center",
    alignItems: 'center',
    borderColor: '#FFB16C',
    borderWidth: 5, borderRadius: 5,
    width: '94%',
    marginLeft: '3%'
  },
})
