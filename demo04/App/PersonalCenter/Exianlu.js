import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow, HeatMap } = Overlay;
const { width, height } = Dimensions.get('window');
var data = [
  { key: "1" },
  { key: "2" },
]

function userMap(data) {
  return (
    <View style={{ width: '96%', marginLeft: '2%', marginTop: 10, borderWidth: 8, borderColor: "#fff", borderRadius: 1 }}>
      {/* <ImageBackground style={{ height: '100%', width: "100%", }} source={{ uri: "http://pic.51yuansu.com/backgd/cover/00/00/60/5b4c773ae26b1.jpg!/fw/780/quality/90/unsharp/true/compress/true" }}> */}
      <MapView
      style={{height:100}}
        zoomControlsVisible={false} //默认true,是否显示缩放控件,仅支持android
        trafficEnabled={true} //默认false,是否显示交通线
        baiduHeatMapEnabled={false} //默认false,是否显示热力图
        mapType={MapTypes.NORMAL} //地图模式,NORMAL普通 SATELLITE卫星图
        zoomGesturesEnabled={false}//允许手势缩放
        scrollGesturesEnabled={false}//允许拖动
        zoom={40} //缩放等级,默认为10
      >
        {/* </ImageBackground> */}
      </MapView>
      
      <View style={{ paddingVertical: 5, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>上城区到下城区</Text>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Byme</Text>
        </View>
    </View>
  )
}
export default class Exianlu extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={[styles.container]}>
        <TouchableWithoutFeedback
          onPress={()=>{
            this.props.navigation.navigate("ProductionRoute")
          }}
        >
        <View style={{ marginTop:10,width: '100%', height: 20, flexDirection: "row", justifyContent: "center" }}>
          <AntDesign name={'pluscircleo'} size={20} color={'#fff'} />
          <Text style={{marginLeft:5, color: "#Fff" }}>创建我的线路</Text>
        </View>
        </TouchableWithoutFeedback>
        {
          data.map((item) => {
            return (
              userMap(item)
            )
          })
        }

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6C9575",
  },
})
