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
// export default function Line({ route, navigation }) {

export default class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPostion: 0,
    }
  }


  _onScroll(event) {
    let y = event.nativeEvent.contentOffset.y;
    if (this.state.oldPostion < y) {
      this.state.oldPostion = y;
      this.refs.title.setNativeProps({
        style: {
          opacity: 0,
          // height: 0
        },
      });
    } else {
      this.state.oldPostion = y;
      this.refs.title.setNativeProps({
        style: {
          opacity: 1,
          // height: 40
        },
      });
    }
  }
  render() {
    const { cityName } = this.props.route.params;
    var Data = [
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
    ]

    function drawLine(longitude, latitude, place, id) {
      return (
        <View style={{ height: 110, justifyContent: 'center', backgroundColor: '#6C9575', borderWidth: 5, borderColor: "#6C9575", marginBottom: 20, borderRadius: 3 }}>
          <MapView
            zoomControlsVisible={false} //默认true,是否显示缩放控件,仅支持android
            trafficEnabled={true} //默认false,是否显示交通线
            baiduHeatMapEnabled={false} //默认false,是否显示热力图
            mapType={MapTypes.NORMAL} //地图模式,NORMAL普通 SATELLITE卫星图
            zoomGesturesEnabled={false}//允许手势缩放
            scrollGesturesEnabled={false}//允许拖动
            zoom={40} //缩放等级,默认为10
            //根据不同传入值 更换地图中心位置
            center={{ longitude: longitude, latitude: latitude }}
            // center={20} // 地图中心位置
            style={{ width: width * 0.9, height: 100 }}>
            <Polyline
              stroke={{ width: 5, color: 'AA000000' }}
              points={[
                { longitude: longitude + 0.00001, latitude: latitude + 0.00002 },
                { longitude: longitude + 0.00002, latitude: latitude + 0.00003 },
                { longitude: longitude + 0.00003, latitude: latitude + 0.00001 },
                { longitude: longitude + 0.00004, latitude: latitude + 0.00002 },
              ]}
            />
          </MapView>

          {/* <Image style={{ width: 371, height: 104 }} source={require('./photo/hangzhou.jpg')} /> */}
          <Text style={styles.placeStyle}>{place}</Text>
          <Text style={styles.idStyle}>{id}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.Top}>
          <View style={ styles.nav_container }>
            <AntDesign name={'left'} size={25} color='#000000' style={{ marginLeft: '3%' }} onPress={() => {
              this.props.navigation.goBack()
            }} />
            <Text style={{ fontSize: 20, color: '#000000', marginLeft: '30%' }}>线路</Text>
          </View>
        </View>
        <View style={styles.list}>

          <ScrollView
            style={{ paddingTop: 40, }}
            onScroll={(event) => this._onScroll(event)}
          >
            <FlatList
              data={Data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => drawLine(item.longitude, item.latitude, item.place, item.id)}
            />
          </ScrollView>

          <View ref='title' style={{ top: 0, position: "absolute", backgroundColor: "#fff", opacity: 1, height: 40, width: '100%', opacity: 1, marginLeft: '3%', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20, color: '#000000' }}>{cityName}</Text>
          </View>
        </View>

      </View>
    );
  }
}
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  Top: {
    height: 78,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  nav_container: {
    width:'53%',
    marginLeft:'3%',
    marginTop: '6%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title_text: {
    fontSize: 20,
    color: 'white'
  },
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    flexDirection: 'row',
    fontWeight: '200',
    width:'60%',
    backgroundColor:"red",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 10
  }
});