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
import { storage } from '../Accessories/storage/index';
const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow, HeatMap } = Overlay;
const { width, height } = Dimensions.get('window');
 var data = [
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
        {/* {
        data.map((item)=>{
          return(
            <Marker
            title={item.pointName}
            location={{ longitude: item.longitude, latitude: item.latitude }} />
          )
        })
      } */}
      </MapView>
     
      <View style={{ paddingVertical: 5, paddingHorizontal: 10, flexDirection: "row", justifyContent: "space-between" }}>
  <Text style={{ color: "#fff", fontWeight: "bold" }}>{data.create_name}</Text>
  <Text style={{ color: "#fff", fontWeight: "bold" }}
    onPress={()=>{
      console.log(data);
    }}
  >By{data.username}</Text>
        </View>
    </View>
  )
}
export default class Exianlu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_id:'',
      isLoading: true,

    };
  }
  componentDidMount() {
    storage.load('userInfo', (data) => {
      this.setState({
        head: data.head,
        token: data.token,
        user_id: data.user_id,
        username:data.username
      })
    })
    fetch('http://192.168.1.151:3000/api/travels/route/queryRouteId', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': this.state.token
      },
      body: JSON.stringify({
        user_id: this.state.user_id,
      })
    }).then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

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
