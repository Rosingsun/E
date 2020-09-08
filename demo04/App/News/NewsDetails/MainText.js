import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, StatusBar, FlatList, ItemDivideComponent, TextInput, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { storage } from '../../Accessories/storage/index'

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
      isSplit:true,
      isLoading: true,
      selectMultiItem: [],
    }
  }
  componentDidMount() {
    storage.load('userInfo', (data) => {
      this.setState({
        username: data.username,
        head: data.head,
        token: data.token,
        user_id: data.user_id
      })
    })
    fetch('http://192.168.1.151:3000/api/travels/comment/queryAllcomment', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': this.state.token
      },
    }).then((response) => response.json())
      .then((json) => {
        // console.log(json.data)
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    const { route } = this.props;
    if(this.state.isSplit){
   route.params.data.showUserImg.split(',').map((word) =>{
      this.state.selectMultiItem.push(word)
      this.setState({isSplit:false})
   })}
    var imgData = this.state.selectMultiItem
    const { data, isLoading } = this.state;
    const _onClickSendContent = () => {
      fetch('http://192.168.1.151:3000/api/travels/comment/addComment', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'token': this.state.token,
        },
        body: JSON.stringify({
          content: this.state.content,
          user_id: this.state.user_id,
          answer_id: route.params.data.answer_id,
          username: this.state.username,

        })
      }).then(function (res) {
        return res.json();
      }).then(function (json) {
        if (json.errno == 0) {
          alert("保存成功")
        } else if (json.errno == -1) {
          alert("保存失败")
        }
      })
    }

    return (
      <View style={styles.container}>
        <View style={styles.Top}>
          <View style={[styles.nav_container]}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
                this.props.navigation.goBack()
              }} />
            </View>
            <Text style={{ color: "#000", fontSize: 18 }}>游记详情</Text>
            <View>
              <Feather name="more-horizontal" size={25} color="#000" onPress={() => {
                Alert.alert("更多")
              }} />
            </View>
          </View>
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
                    <Image source={{ uri: route.params.data.head }}
                      style={{ width: 40, height: 40, borderRadius: 30 }}></Image>
                  </View>
                  <View style={styles.userId}>
                    <Text style={{ fontSize: 15, color: '#000000', }}>{route.params.data.username}</Text>
                    <Text style={{ fontSize: 10, color: '#999999', }}>{route.params.data.createTime}</Text>
                  </View>
                  <Ionicons name="eye-outline" size={25} color="#000000" style={{ position: "absolute", right: 20 * biLi }} />
                </View>
              </View>
              {/* 九宫格下面的用户文字 */}
              <View style={styles.word}>
                <Text style={{ color: "#FFB16C", fontSize: 15 }}>#话题：论如何迷倒万千少女#</Text>
                <Text style={{ fontSize: 15 }}>{route.params.data.words}</Text>
              </View>
              <View style={{ backgroundColor: "pink", width: '96%', marginLeft: '2%', flexDirection: "row", flexWrap: "wrap" }}>
                {
                  imgData.map((item) => {
                    return (
                      <View style={styles.photolist}>
                        <Image style={styles.ninephoto} source={{ uri: item }} />
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
                  <Text style={{ fontSize: 15, color: '#999999' }}>{route.params.data.location}</Text>
                </Feather>
                <View style={{ justifyContent: "flex-end" }}>
                  <AntDesign name="like2" size={25} color="#999999">
                    <Text style={{ fontSize: 15, }}>{route.params.data.prase_count}</Text>
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
              <View >
                <FlatList
                  extraData={this.state}
                  data={data}
                  keyExtractor={({ answer_id }, index) => answer_id}
                  ItemSeparatorComponent={bottomLine}
                  // numColumns ={3}
                  renderItem={({ item }) =>
                    <View style={styles.talkList}>
                      <View style={{ flexDirection: 'row' }}>
                        <Image style={styles.headView} source={{ uri: route.params.data.head }} />
                        <View style={{ marginLeft: 10, width: '85%' }}>
                          <Text style={{ fontSize: 12, color: '#4F4F4F' }}>{item.username}</Text>
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
                            <Text style={{ fontSize: 10, color: '#999999' }}>{item.createTime}</Text>
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
              onPress={() => { _onClickSendContent(); }}>发送</Text>
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
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 8,
  },
  nav_container: {
    // flex: 0.7,
    marginTop: '8%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
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
    backgroundColor: "#efefef"
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
