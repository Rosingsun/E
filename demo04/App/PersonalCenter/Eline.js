import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, FlatList, Image, Alert, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Transition } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { storage } from '../Accessories/storage//index';
var imgUrl = [
  {
    key: "1",
    imgUrl: "http://pic.51yuansu.com/pic3/cover/03/99/56/5f1aa3a3387aa_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
  }, {
    key: "2",
    imgUrl: "http://pic.51yuansu.com/pic3/cover/03/99/56/5f1aa3a3387aa_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
  }, {
    key: "3",
    imgUrl: "http://pic.51yuansu.com/pic3/cover/03/99/56/5f1aa3a3387aa_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
  },
]

function SwiperMainContainer(item) {
  return (
    <View style={[styles.mainBox]}>
      <View style={[styles.swiperPic]}>
        <Swiper style={{ height: '100%' }}
          autoplay={true}
          dotColor="#999999"
          activeDotColor="#43949B"
          dotStyle={{
            height: 5,
            width: 5,
          }}
          activeDotStyle={{
            height: 5,
            width: 5,
          }}
        >
          {
            imgUrl.map((item) => {
              return (
                <View style={{ height: '100%', width: "100%" }}>
                  <Image style={{ height: '100%', width: '100%', backgroundColor: "#fff" }} source={{ uri: item.imgUrl }} />
                </View>
              )
            })
          }
        </Swiper>
      </View>
      <View style={{ width: '100%', backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 10 }}>
        <View>
          <Text style={[styles.userWord]}>{item.words}</Text>
          <View style={{ width: '100%', flexDirection: "row", paddingBottom: 10, }}>
            <Text style={[styles.activeSign]}>#种豆南山下</Text>
            <Text style={[styles.activeSign]}>#种豆南山下</Text>
            <Text style={[styles.activeSign]}>#种豆南山下</Text>
          </View>
          <View style={{ width: '100%', height: 30, flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <MaterialCommunityIcons name={'share-circle'} size={30} color={'#484848'} />
            </View>
            <View style={{ flexDirection: "row", width: 130, justifyContent: "space-between" }}>
              <AntDesign name={'staro'} size={30} color={'#484848'} />
              <AntDesign name={'message1'} size={30} color={'#484848'} />
              <View style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#000000", borderRadius: 20, paddingHorizontal: 5 }}>
                <AntDesign name={'like2'} size={20} color={'#484848'} />
                <Text style={{ fontSize: 12 }}>{item.prase_count}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default class Eline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }
  }
  fetchDate() {
    fetch('http://192.168.1.151:3000/api/travels/travel/queryReleaseId', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': this.state.token
      },
      body: JSON.stringify({
        user_id: this.state.user_id
      })
    }).then((response) => response.json())
      .then((json) => {
        // console.log(json)
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidMount() {
    storage.load('userInfo', (data) => {
      this.setState({
        username: data.username,
        head: data.head,
        token: data.token,
        user_id: data.user_id
      })
      this.fetchDate()
    })
  };
  render() {
    var data = this.state.data;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ backgroundColor: "#ddd", height: Dimensions.get('window').height-350}}
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.container]}>
            {
              data.map((item) => {
                return (
                  SwiperMainContainer(item)
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '60%',
    backgroundColor: "#6C9575",
    padding: 10,
    // paddingBottom: 100,
  },
  mainBox: {
    width: '100%',
    marginTop: 10,
    // height: 310,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  swiperPic: {
    width: '100%',
    height: 200,
    backgroundColor: "#000",
    borderRadius: 10,
  },
  userWord: {
    letterSpacing: 1,
    color: "#197178",
    fontSize: 12,
    paddingBottom: 5,
  },
  activeSign: {
    padding: 3,
    backgroundColor: "#43949B28",
    fontSize: 12,
    color: "#197178",
    marginRight: 10,
    borderRadius: 3,
  },
})