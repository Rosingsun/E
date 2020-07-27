import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, FlatList, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Transition } from 'react-native-reanimated';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
var userDate = [
  {
    key: "日落的色彩给向日葵镀上了一层金色，相间的小道日落的色彩给向日葵镀上了一层金色，相间的小道日落的色彩给向日葵镀上了一层金色，相间的小道日落的色彩给向日葵镀上了一层金色，相间的小道",

  },
  { key: "日落的色彩给向日葵镀上了一层金色，相间的小道02" },
  { key: "日落的色彩给向日葵镀上了一层金色，相间的小道03" },
]
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
                  <Image style={{ height: '100%', width: '100%', backgroundColor: "yellow" }} source={{ uri: item.imgUrl }} />
                </View>
              )
            })
          }
        </Swiper>
      </View>
      <View style={{ width: '100%', backgroundColor: "#fff", paddingVertical: 10, paddingHorizontal: 10 }}>
        <View>
          <Text style={[styles.userWord]}>{item.key}</Text>
          <View style={{ width: '100%', flexDirection: "row", paddingBottom: 10, }}>
            <Text style={[styles.activeSign]}>#种豆南山下</Text>
          </View>
          <View style={{ width: '100%', height: 30, flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <MaterialCommunityIcons name={'share-circle'} size={30} color={'#484848'} />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name={'md-location-sharp'} size={30} color={'#484848'} />
              <Ionicons name={'md-location-sharp'} size={30} color={'#484848'} />
              <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,borderColor:"#000000",borderRadius:20,paddingHorizontal:5}}>
                <AntDesign name={'like2'} size={20} color={'#484848'} />
                <Text style={{fontSize:12}}>123</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
export default function Eshouchang() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#43949B28", height: 10 }}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container]}>
          {
            userDate.map((item) => {
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
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    height: '60%',
    backgroundColor: "#43949B",
    padding: 10,
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
  },
})