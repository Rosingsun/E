import React, { Component } from 'react';
import {
  Text, View, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity, StatusBar, FlatList, RefreshControl, ActivityIndicator,
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
  static defaultProps = {
    localdata: [
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
  }
  constructor(props) {
    super(props);
    this.state = {
      oldPostion: 0,
      stateName: "管理",
      stateFlag: true,
      mapBoxWidth: width * 0.9,
      //用来做单选
      multiData: this.props.localdata,
      selectMultiItem: 0,
    }
  }

  //单选
  _selectMultiItemPress(item) {
    this.setState({ selectMultiItem: item.CcityName })
  }
  //递交 选中 
  _submitMultiPress() {
    alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
  }
  //渲染多选标记
  _renderMultiMark() {
    let multiData = this.state.multiData;
    let len = multiData.length;
    let menuArr = [];
    for (let i = 0; i < len; i++) {
      let item = multiData[i];
      if (item.CcityName == this.state.selectMultiItem) {
        menuArr.push(
          //选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}
            activeOpacity={1}
          >
            <View style={{ height: 120, backgroundColor: '#6C9575', width: width + 20, borderWidth: 10, borderColor: "#FFFFFF60", marginBottom: 20, borderRadius: 3 }}>
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
                style={{ width: width, height: 100 }}>
                <Marker
                  title={item.id}
                  location={{ longitude: item.longitude, latitude: item.latitude }} />
              </MapView>
              <Text style={styles.placeStyle}>{item.place}</Text>
              <Text style={[styles.idStyle],{color:"red"}}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        )
      } else {
        menuArr.push(
          // 未选中状态
          <TouchableOpacity
            onPress={() => this._selectMultiItemPress(item)}
            activeOpacity={1}
          >
            <View style={{ height: 120, backgroundColor: '#6C9575', width: width + 20, borderWidth: 10, borderColor: "#FFFFFF60", marginBottom: 20, borderRadius: 3 }}>
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
                style={{ width: width, height: 100 }}>
                <Marker
                  title={item.id}
                  location={{ longitude: item.longitude, latitude: item.latitude }} />
              </MapView>
              <Text style={styles.placeStyle}>{item.place}</Text>
              <Text style={styles.idStyle}>{item.id}</Text>
            </View>
          </TouchableOpacity>
        )
      }
    }
    return (
      //讲各类状态框输出到前端页面
      <View style={styles.multiBox}>
        {menuArr}
      </View>
    );
  }
  render() {
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

            {/* {
                Data.map((item) => {
                  return (
                      drawLine(item.longitude, item.latitude, item.place, item.id, this.state.mapBoxWidth)
                  )
                })
              } */}
            {
              this._renderMultiMark()
            }
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