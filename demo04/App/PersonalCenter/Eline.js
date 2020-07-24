import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
export default class Eline extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View>
          {/* 轮播图 */}
          <View></View>
          {/* 文字描述 */}
          <View></View>
          {/* 底部分享，收藏，留言，点赞操作 */}
          <View></View>
        </View>
      </View>
    );
  }
}
const styles =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#43949B",
  },
})