import React, { Component } from 'react';
 
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Dimensions,
} from 'react-native';
 
import { MapView,MapTypes,Geolocation} from 'react-native-baidu-map';
 
// import Dimensions from 'Dimensions';
const { width,height } = Dimensions.get('window');
 
export default class BaiduMapDemo extends Component {
    constructor() {
        super();
        this.state = {
            zoomControlsVisible: true,
            trafficEnabled: false,
            baiduHeatMapEnabled: true,
            mapType: MapTypes.NORMAL,
            zoom: 15,
            center: {
                longitude: 113.896198,
                latitude: 22.959144,
            },
            markers: [
                {
                    longitude: 113.896198,
                    latitude: 22.959144,
                    title: 'title',
                }
            ],
            clickMessage: '',
            poiMessage: '',
        };
    }
 
    componentDidMount() {
        
    }
 
  render() {
        return (
            <ScrollView style={styles.container}>
                <MapView 
                    zoomControlsVisible={this.state.zoomControlsVisible} //默认true,是否显示缩放控件,仅支持android
                    trafficEnabled={this.state.trafficEnabled} //默认false,是否显示交通线
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled} //默认false,是否显示热力图
                    mapType={this.state.mapType} //地图模式,NORMAL普通 SATELLITE卫星图
                    zoom={this.state.zoom} //缩放等级,默认为10
                    center={this.state.center} // 地图中心位置
                    markers={this.state.markers} //地图多个标记点
 
                    onMapLoaded={(e) => { //地图加载事件
                        Geolocation.getCurrentPosition()
                            .then(data => {
                                console.log(data)
                                // this.setState({
                                //     center: {
                                //         longitude: data.longitude,
                                //         latitude: data.latitude
                                //     },
                                //     markers: [{
                                //         longitude: data.longitude,
                                //         latitude: data.latitude,
                                //         title: data.district + data.street
                                //     }]
                                // })
                            })
                            .catch(e =>{
                                console.warn(e, 'error');
                            })
                    }}
                    
                    onMarkerClick={(e) => { //标记点点击事件
                        console.log(e)
                    }}
                    onMapClick={(e) => { //地图空白区域点击事件,返回经纬度
                        let title = '';
                        Geolocation.reverseGeoCode(e.latitude,e.longitude)
                            .then(res => {
                                console.log(res)
                                Platform.OS == 'ios' ? 
                                    title = res.district + res.streetName
                                :
                                    title = res.district + res.street;
                                this.setState({
                                    center: {
                                        longitude: e.longitude,
                                        latitude: e.latitude,
                                    },
                                    markers: [{
                                        longitude: e.longitude,
                                        latitude: e.latitude,
                                        title: title,
                                    }],
                                    clickMessage: JSON.stringify(res)
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                        
                    }}
                    onMapPoiClick={(e) => { //地图已有点点击
                        Geolocation.reverseGeoCode(e.latitude,e.longitude)
                            .then(res => {
                                res = JSON.stringify(res)
                                this.setState({
                                    center: {
                                        longitude: e.longitude,
                                        latitude: e.latitude,
                                    },
                                    markers: [{
                                        longitude: e.longitude,
                                        latitude: e.latitude,
                                        title: e.name,
                                    }],
                                    poiMessage: res
                                })
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    }}
                    style={styles.map}
                >
                </MapView>
 
                <View style={styles.list}>
                    <Text>地图缩放控件状态: </Text>
                    {this.state.zoomControlsVisible ? 
                        <Text onPress={() => this.setState({zoomControlsVisible:false})}>显示</Text>
                        :
                        <Text onPress={() => this.setState({zoomControlsVisible:true})}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>交通线状态: </Text>
                    {this.state.trafficEnabled ? 
                        <Text onPress={() => this.setState({trafficEnabled:false})}>显示</Text>
                        :
                        <Text onPress={() => this.setState({trafficEnabled:true})}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>热力图状态: </Text>
                    {this.state.baiduHeatMapEnabled ? 
                        <Text onPress={() => this.setState({baiduHeatMapEnabled:false})}>显示</Text>
                        :
                        <Text onPress={() => this.setState({baiduHeatMapEnabled:true})}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>地图模式状态: </Text>
                    {this.state.mapType == MapTypes.NORMAL ? 
                        <Text onPress={() => this.setState({mapType:MapTypes.SATELLITE})}>普通</Text>
                        :
                        <Text onPress={() => this.setState({mapType:MapTypes.NORMAL})}>卫星</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>地图空白区域点击信息: </Text>
                </View>
                <View style={styles.list}>
                    <Text>{this.state.clickMessage}</Text>
                </View>
                <View style={styles.list}>
                    <Text>地图已有点点击信息: </Text>
                </View>
                <View style={styles.list}>
                    <Text>{this.state.poiMessage}</Text>
                </View>
                <View style={styles.list}>
                    <Text onPress={() => {
                        Geolocation.getCurrentPosition()
                            .then(data => {
                                console.log(data)
                                this.setState({
                                    center: {
                                        longitude: data.longitude,
                                        latitude: data.latitude
                                    },
                                    markers: [{
                                        longitude: data.longitude,
                                        latitude: data.latitude,
                                        title: data.district + data.street
                                    }]
                                })
                            })
                            .catch(e =>{
                                console.warn(e, 'error');
                            })
                    }}>当前位置</Text>
                </View>
            </ScrollView>
        );
    }
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    map: {
        width: width,
        height: height - 300,
        marginBottom: 5,
    },
    list: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginBottom: 5,
    }
});