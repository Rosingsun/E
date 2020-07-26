import React, { Component } from 'react';
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

// export default class Eline extends Component {
export default function Eline() {
  function SwiperMainContainer() {
    return (
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
            <Image style={{ height: '100%', width: "100%" }} source={{ uri: item.imgUrl }} />
          </View>
        }
      />
    )
  }


  return (
    <View style={[styles.container]}>
      <View style={[styles.mainBox]}>
        {/* 轮播图 */}
        <View style={[styles.swiperPic]}>
          {SwiperMainContainer()}
        </View>
        {/* 文字描述 */}
        <View style={{ height: 125, width: '100%', backgroundColor: "#fff" }}>
          {/* 适应轮播的点 */}
          <View></View>
          {/* 用户发表言论 */}
          <View>
            <Text style={{ letterSpacing: 1, color: "#197178", fontSize: 12 }}>日落的色彩给向日葵镀上了一层金色，相间的小道</Text>
          </View>
          {/* 底部分享，收藏，留言，点赞操作 */}
          <View>
          </View>
        </View>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#43949B",
    padding: 10,
  },
  mainBox: {
    width: '100%',
    // marginLeft:'2%',
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