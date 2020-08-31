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
StatusBar.setBarStyle('dark-content');
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
      content: '',
      data: [],
      isLoading: true
    }
  }
  componentDidMount() {
    fetch('http://192.168.56.1:3000/list')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json.list });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  _onClickSendContent = () => {
    fetch('http://192.168.56.1:3000/users/list', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        content: this.state.content,
      })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      if (json.code == "200") {
        alert("发送成功")
      } else if (json.code == "400") {
        alert("发送失败")
      }
    })
  }

  render() {

    var imgData = [
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
      { photo: '../../img/1.jpg' },
    ]
    const { data, isLoading } = this.state;
    return (

      // TOP
      <View style={styles.container}>
        <View style={styles.Top}>
          <AntDesign name='left' size={32} color='#000' onPress={() => {
            this.props.navigation.goBack();
          }} />
          <Text style={{ fontSize: 20, color: "#000" }}>游记正文</Text>
          <Feather name="more-horizontal" size={40} color="#000" onPress={() => {
            Alert.alert("更多")
          }} />
        </View>
        {/* 内容 */}
        <View style={{ height: '80%' }}>
          <ScrollView style={{ backgroundColor: "#EFEFEF", borderBottomRightRadius: 15, borderBottomLeftRadius: 15, }}>

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
              <View style={{ backgroundColor: "pink", width: '96%', marginLeft: '2%', flexDirection: "row", flexWrap: "wrap" }}>
                {
                  imgData.map((item) => {
                    return (
                      <View style={styles.photolist}>
                        <Image style={styles.ninephoto} source={require('../../img/1.jpg')} />
                      </View>
                    )
                  })
                }
              </View>
              {/* 九宫格底部的定位 */}
              <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 50, color: '#EFEFEF', marginTop: -25, marginBottom: -20 }}>·····························</Text></View>
              <View style={styles.Route}>
                <Image style={{ width: '100%', height: 90 }} source={require('../..//img/1.jpg')} />
              </View>
              <View style={{ flexDirection: 'row', marginTop: 8 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 32, backgroundColor: '#FAAF3D29', marginLeft: '3%', paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 12, color: '#FAAF3D' }} onPress={() => {
                    Alert.alert("查看tag")
                  }}>#欲把西湖比西子</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', height: 32, backgroundColor: '#FAAF3D29', marginLeft: "3%", paddingHorizontal: 10 }}>
                  <Text style={{ fontSize: 12, color: '#FAAF3D' }} onPress={() => {
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
                <View style={{ justifyContent: "flex-end" }}>
                  <AntDesign name="like2" size={25} color="#999999">
                    <Text style={{ fontSize: 15, }}>111</Text>
                  </AntDesign>
                </View>
              </View>
            </View>
            {/* 评论 */}
            <View style={styles.talk}>
              <View style={styles.textTop}>
                <Text style={{ fontSize: 20, fontWeight: '300' }}>全部评论</Text>
                <View style={{ width: "100%", flexDirection: 'row', justifyContent: 'space-around' }}>
                  <Text style={{ fontSize: 50, color: '#EFEFEF', marginTop: -25, marginBottom: -15 }}>·····························</Text></View>
              </View>
              {/* 需要数据库开始用评论 */}
              {/* <View style={styles.uesrTalk}> */}
              <View >
                <FlatList
                  extraData={this.state}
                  data={data}
                  keyExtractor={({ id }, index) => id}
                  ItemSeparatorComponent={bottomLine}
                  // numColumns ={3}
                  renderItem={({ item }) =>
                    <View style={styles.talkList}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.headView} source={require('../../img/1.jpg')} />
                        <View style={{ marginLeft: 10, width: '85%' }}>
                          <Text style={{ fontSize: 12, color: '#4F4F4F' }}>{item.id}</Text>
                          <Text style={{ fontSize: 15 }}>{item.content}</Text>

                          {/* {item.ddttaa.map((item) => {
                            return (
                              <View style={{ width: "92%", backgroundColor: '#EFEFEF', flexDirection: 'row', borderRadius: 5 }}>
                                <Text style={{ marginLeft: '5%', color: '#FFB16C', fontSize: 10 }}>{item.idd}:</Text>
                                <Text style={{ color: '#000000', fontSize: 10 }}>{item.wordd}</Text>
                              </View>
                            )
                          })} */}
                          <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center', width: "100%", marginBottom: 5 }}>
                            <Text style={{ fontSize: 10, color: '#999999' }}>{item.createtime}</Text>
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
          <View style={{ height: '75%', width: '75%', backgroundColor: '#FFFFFF', borderRadius: 20, marginLeft: '3%' }}>
            <TextInput style={{ justifyContent: 'center', fontSize: 15, marginLeft: '3%' }} placeholder='评论'
              onChangeText={(text) => { this.setState({ content: text }); }} />
          </View>
          <View style={{ width: "20%", height: '76%', marginBottom: '1%', backgroundColor: "#6C9575", borderRadius: 20, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: "#fff", fontSize: 15, letterSpacing: 2 }}
              onPress={() => { this._onClickSendContent(); }}>发送</Text>
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
  },
  Top: {
    height: 78,
    backgroundColor: "#FFFFFF",
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
    width: '30%',
    marginLeft: '2%'
  },
  ninephoto: {
    width: 117,
    height: 117,
  },
  map: {
    width: "94%",
    marginLeft: "3%",
    marginTop: 8,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: '#2F3843',
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
