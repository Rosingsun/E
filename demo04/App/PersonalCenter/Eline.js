import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, FlatList, Image, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

var userDate = [
  { key: "日落的色彩给向日葵镀上了一层金色，相间的小道" },
  { key: "2" },
  { key: "3" },
]
function userContainBox() {

}

function SwiperMainContainer(Mitem) {
  return (
    <View style={[styles.mainBox]}>
      {/* 轮播图 */}
      <View style={[styles.swiperPic]}>
        {/* 做轮播用的flatlist */}
        <FlatList
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          data={[
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
          ]}
          renderItem={({ item }) =>
            <View style={{ width: 400, height: 200, borderRadius: 3 }}>
              <Image style={{ height:'90%', width: "100%" }} source={{ uri: item.imgUrl }} />
              <View style={{ width: 10, height: 10,marginLeft:10, backgroundColor: "red"}}>
              </View>
            </View>
          }
        />

      </View>
      <View style={{ height: 125, width: '100%', backgroundColor: "#fff" }}>
        <View>
          <Text style={{ letterSpacing: 1, color: "#197178", fontSize: 12 }}>{Mitem.key}</Text>
        </View>
      </View>
    </View>
  )


}
export default function Eline() {
  return (
    // <View style={{flex:0.9}}>
    // <ScrollView style={{backgroundColor: "#43949B" ,height:'100%'}}
    // scrollEnabled={false}
    // showsVerticalScrollIndicator={false}
    // onScrollEndDrag={()=>{
    //   Alert.alert("!11");
    // }}
    // >
      <View style={[styles.container]}>
        {/* <ScrollView style={{ width: '100%',height:'10%', backgroundColor: "#FFFfff00" }}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        > */}
          {
            userDate.map((item) => {
              return (
                SwiperMainContainer(item)
              )
            })
          }
        {/* </ScrollView> */}
      </View>
    // </ScrollView>
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '60%',
    backgroundColor: "#43949B",
    padding: 10,
  },
  mainBox: {
    width: '100%',
    marginTop: 10,
    height: 310,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  swiperPic: {
    width: '100%',
    height: '60%', backgroundColor: "#fff",
  },
})