import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Dimensions, ScrollView, Image, StatusBar, FlatList, RefreshControl, ActivityIndicator,
  Alert
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
//引入百度地图模块
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
//实例化，用于绘制百度地图
const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow, HeatMap } = Overlay;
//获取用户屏幕高低
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;

//设置顶部状态栏
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

//主要的函数
export default function Line({ route, navigation }) {
  const { cityName } = route.params;
  function _onScroll(event) {
    let y = event.nativeEvent.contentOffset.y;
    if (this.state.oldPostion <y) {
        this.state.oldPostion=y;
        this.refs.title.setNativeProps({
            style: {
                opacity: 0,
            },
        });
    } else {
        this.state.oldPostion=y;
        this.refs.title.setNativeProps({
            style: {
                opacity: 1,
            },
        });
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.topStyle}>
        <AntDesign name="left" size={28} color="#000000" onPress={() => {
          navigation.navigate("choiceCity")
        }} style={{ marginLeft: '3%' }}></AntDesign>
        <Text style={{ fontSize: 20, color: '#000000' }}>线路</Text>
        <View style={{ width: 25 }}></View>

      </View>
      <View style={{ height: 40, width: '94%', marginLeft: '3%', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: '#000000' }}>{cityName}</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={[
            {
              place: '杭州上城区到下城区',
              id: 'By:石原里美',
              longitude: 116.465175,
              latitude: 39.938522
            },
            {
              place: '杭州西湖区到拱宸桥',
              id: 'By:新垣结衣',
              longitude: 117.465175,
              latitude: 39.938522
            },
            {
              place: '杭州拱宸桥到江干区',
              id: 'By:桥本环奈',
              longitude: 118.465175,
              latitude: 39.938522
            },
            {
              place: '杭州拱宸桥到江干区',
              id: 'By:桥本环奈',
              longitude: 111.465175,
              latitude: 20.938522
            },
            {
              place: '杭州拱宸桥到江干区',
              id: 'By:桥本环奈',
              longitude: 118.414175,
              latitude: 39.928592
            },
          ]}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) =>
            <View style={{ width: 386, height: 118, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6C9575', marginBottom: 20, borderRadius: 3 }}>
              <MapView
                zoomControlsVisible={false} //默认true,是否显示缩放控件,仅支持android
                trafficEnabled={true} //默认false,是否显示交通线
                baiduHeatMapEnabled={false} //默认false,是否显示热力图
                mapType={MapTypes.NORMAL} //地图模式,NORMAL普通 SATELLITE卫星图
                zoomGesturesEnabled={false}//允许手势缩放
                scrollGesturesEnabled={false}//允许拖动
                zoom={40} //缩放等级,默认为10
                //根据不同传入值 更换地图中心位置
                center={{ longitude: item.longitude, latitude: item.latitude }}
                // center={20} // 地图中心位置
                style={{ width: 371, height: 104 }}>
                <Polyline
                  stroke={{ width: 5, color: 'AA000000' }}
                  points={[
                    { longitude: item.longitude + 0.00001, latitude: item.latitude + 0.00002 },
                    { longitude: item.longitude + 0.00002, latitude: item.latitude + 0.00003 },
                    { longitude: item.longitude + 0.00003, latitude: item.latitude + 0.00001 },
                    { longitude: item.longitude + 0.00004, latitude: item.latitude + 0.00002 },
                  ]}
                />
              </MapView>

              {/* <Image style={{ width: 371, height: 104 }} source={require('./photo/hangzhou.jpg')} /> */}
              <Text style={styles.placeStyle}>{item.place}</Text>
              <Text style={styles.idStyle}>{item.id}</Text>
            </View>
          }
        />
      </View>
    </View>
  );
}
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },

  title_text: {
    fontSize: 20,
    color: 'white'
  },
  list: {
    flex: 1,
    //   paddingTop: 22,
    justifyContent: 'center', alignItems: 'center'
  },
  placeStyle: {
    padding: 10,
    fontSize: 15,
    height: 44,
    position: 'absolute',
    fontWeight: "900",
    color: '#000',
    top: 5,
    left: 5,
  },
  idStyle: {
    padding: 10,
    fontSize: 15,
    height: 44,
    position: 'absolute',
    color: '#000',
    fontWeight: '200',
    top: 5,
    right: 5,
  },
  topStyle: {
    height: 78,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    fontWeight: '200',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 10
  }
});