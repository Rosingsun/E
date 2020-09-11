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
      markers: [
        {
          longitude: 1,
          latitude: 1,
          title: 'my name',
        }
      ],
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
        id: 0,
        place: '杭州上城区到下城区',
        name: '石原里美',
        pointName:"西湖",
        location: [
          {
            longitude: 121.467177,
            latitude: 39.937523,
          },
          {
            longitude: 111.467177,
            latitude: 39.937523,
          },
        ],
      },
      {
        id: 0,
        place: '杭州上城区到下城区',
        name: '石原里美22',
        pointName:"西湖",
        location: [
          {
            longitude: 121.467177,
            latitude: 39.937523,
          },
          {
            longitude: 101.467111,
            latitude: 39.93754,
          },
        ],
      },
    ]

    function drawLine(location, place, name) {
      return (
        <View style={{ height: 110, justifyContent: 'center', backgroundColor: '#6C9575', borderWidth: 5, borderColor: "#6C9575", marginBottom: 20, borderRadius: 3 }}>
          <MapView
            zoomControlsVisible={true} //默认true,是否显示缩放控件,仅支持android

            trafficEnabled={true} //默认false,是否显示交通线
            baiduHeatMapEnabled={true} //默认false,是否显示热力图
            mapType={MapTypes.NORMAL} //地图模式,NORMAL普通 SATELLITE卫星图
            zoomGesturesEnabled={true}//允许手势缩放
            scrollGesturesEnabled={true}//允许拖动
            // markers={{longitude: location.longitude, latitude: location.longitude}}
            zoom={20} //缩放等级,默认为10
            //根据不同传入值 更换地图中心位置
            center={{ longitude: location[0].longitude, latitude: location[0].latitude }}
            style={{ width: width * 0.9, height: 100 }}>
            {
              location.map((item) => {
                return (
                  <Marker
                    title={item.pointName}
                    location={{ longitude: item.longitude, latitude: item.latitude }} />
                )
              })
            }
          </MapView>

          {/* <Image style={{ width: 371, height: 104 }} source={require('./photo/hangzhou.jpg')} /> */}
          <Text style={styles.placeStyle}>{place}</Text>
          <Text style={styles.idStyle}>By:{name}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.Top}>
          <View style={styles.nav_container}>
            <AntDesign name={'left'} size={25} color='#000000' onPress={() => {
              this.props.navigation.goBack()
            }} />
            <Text style={{ color: "#000", fontSize: 20, position: "absolute", width: '100%', textAlign: "center" }}>线路</Text>
          </View>
        </View>
        <View style={styles.list}>
          <ScrollView
            style={{ paddingTop: 40, }}
            onScroll={(event) => this._onScroll(event)}
            showsVerticalScrollIndicator={false}>
            <FlatList
              data={Data}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => drawLine(item.location, item.place, item.name)}
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
    width: "100%",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 6,

  },
  nav_container: {
    flex: 0.7,
    marginTop: '8%',
    flexDirection: "row",
    width: "94%",
    marginLeft: '3%',
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
    // padding: 10,
    fontSize: 15,
    // height: 44,
    position: 'absolute',
    // fontWeight: "900",
    color: '#000',
    top: 3,
    left: 3,
  },
  idStyle: {
    // padding: 10,
    fontSize: 15,
    // height: 44,
    position: 'absolute',
    color: '#000',
    // fontWeight: '200',
    top: 3,
    right: 3,
  },
  topStyle: {
    height: 78,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    fontWeight: '200',
    width: '60%',
    backgroundColor: "red",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 10
  }
});