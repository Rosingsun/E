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
// 单选多选框
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
//设置顶部状态栏
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

//主要的函数
// export default function Line({ route, navigation }) {

export default class wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPostion: 0,
      stateName: "管理",
      stateFlag: true,
      mapBoxWidth: width * 0.9,
    }
  }
  render() {
    // const { cityName } = this.props.route.params;
    var Data = [
      {
        place: '杭州上城区到下城区',
        id: 'By:石原里美1',
        longitude: 116.465175,
        latitude: 39.938522
      },
      {
        place: '杭州西湖区到拱宸桥',
        id: 'By:新垣结衣2',
        longitude: 117.465175,
        latitude: 39.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈3',
        longitude: 118.465175,
        latitude: 39.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈4',
        longitude: 111.465175,
        latitude: 20.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈5',
        longitude: 118.414175,
        latitude: 39.928592
      },
      {
        place: '杭州上城区到下城区',
        id: 'By:石原里美6',
        longitude: 116.465175,
        latitude: 39.938522
      },
      {
        place: '杭州西湖区到拱宸桥',
        id: 'By:新垣结衣7',
        longitude: 117.465175,
        latitude: 39.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈8',
        longitude: 118.465175,
        latitude: 39.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈9',
        longitude: 111.465175,
        latitude: 20.938522
      },
      {
        place: '杭州拱宸桥到江干区',
        id: 'By:桥本环奈10',
        longitude: 118.414175,
        latitude: 39.928592
      },
    ]

    function drawLine(longitude, latitude, place, id, width) {
      return (
        <View style={{ height: 120, backgroundColor: '#6C9575', width: width + 20, borderWidth: 10, borderColor: "#FFFFFF60", marginBottom: 20, borderRadius: 3 }}>
          {/* <View style={{height:20,width:20,borderWidth:1,backgroundColor:"red",borderColor:"#fff",borderRadius:20,}}/> */}

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
            style={{ width: width, height: 100 }}>
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
          <View style={styles.nav_container}>
            <AntDesign name={'left'} size={25} color='#000000' onPress={() => {
              this.props.navigation.goBack()
            }} />
            <Text style={{ fontSize: 20, color: '#000000', position: "absolute", width: '100%', zIndex: -1, textAlign: "center" }}>愿望单</Text>
            <Text style={{ fontSize: 15, color: '#fff', backgroundColor: "#2F3843", paddingVertical: 5, paddingHorizontal: 15, borderRadius: 24 }}
              onPress={() => {
                if (this.state.stateFlag) {
                  this.setState({ stateName: "完成", mapBoxWidth: width * 0.8, stateFlag: false })
                } else {
                  this.setState({ stateName: "管理", mapBoxWidth: width * 0.9, stateFlag: true })
                }

              }}
            >{this.state.stateName}</Text>
          </View>
        </View>
        <View style={[styles.list, { alignSelf: "flex-end", marginRight: (width * 0.1 - 20) / 2 }]}>

          <ScrollView
            style={{ paddingTop: 10 }}
            showsVerticalScrollIndicator={false}
          >
            <RadioGroup
              size={20}
              thickness={1}
              color='#FAAF3D'
              selectedIndex={0}
              onSelect={(index, value) => console.log(index)} >

              {
                Data.map((item) => {
                  return (
                    <RadioButton value={'item3'}
                    >
                      {
                      drawLine(item.longitude, item.latitude, item.place, item.id, this.state.mapBoxWidth)
                    }
                    </RadioButton>
                  )
                })
              }
            </RadioGroup>
          </ScrollView>
        </View>

      </View>
    );
  }
}
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6C9575',
  },
  Top: {
    height: 78,
    width: "100%",
    backgroundColor: "#fff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 10,
  },
  nav_container: {
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