import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Dimensions,
    Alert,
    Image,
    StatusBar,
} from 'react-native';

import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native-gesture-handler';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
// import Dimensions from 'Dimensions';

const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow, HeatMap } = Overlay;
const { width, height } = Dimensions.get('window');


var imgDate = [
    {
        key: "1",
        imgUri: "http://pic.51yuansu.com/pic3/cover/03/98/30/5e7ab67256496_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        placeName: "断壁残垣",
        placeHoldName: "杭州西溪湿地",
        distance: 2,
        preTime: 52,
    },
    {
        key: "1",
        imgUri: "http://pic.51yuansu.com/pic3/cover/03/98/30/5e7ac1694ca6a_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        placeName: "断壁残垣",
        distance: 4,
        preTime: 52,
    },
    {
        key: "1",
        imgUri: "http://pic.51yuansu.com/pic3/cover/03/98/30/5e7ab67673734_610.jpg!/fw/260/quality/90/unsharp/true/compress/true",
        placeName: "断壁残垣",
        distance: 3,
        preTime: 52,
    },
]

export default class BaiduMap extends Component {
    constructor() {
        super();
        this.state = {
            zoomControlsVisible: false,
            trafficEnabled: true,
            baiduHeatMapEnabled: false,
            mapType: MapTypes.NORMAL,
            zoom: 19,
            center: {
                longitude: 116.465175,
                latitude: 39.938522
            },
            markers: [
                {
                    longitude: 116.465175,
                    latitude: 39.938522,
                    title: 'my name',
                }
            ],
            clickMessage: '10221',
            poiMessage: '109',
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={[styles.top]}>
                    <View style={{ flexDirection: "row", width: '90%', marginLeft: '5%', height: 39, marginTop: 30, justifyContent: "space-between" }}>
                        <AntDesign name={'left'} size={20} color={'#000'}
                            onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        <View style={{ flexDirection: "row", width: '30%', justifyContent: "space-around" }}>
                            <Ionicons name={'heart-outline'} size={30} color={'#000'} />
                            <MaterialCommunityIcons name={'swap-horizontal-circle-outline'} size={30} color={'#000'} />
                            <Feather name={'more-horizontal'} size={30} color={'#000'} />
                        </View>
                    </View>
                </View>
                <MapView
                    pinColor={{}}
                    zoomControlsVisible={this.state.zoomControlsVisible} //默认true,是否显示缩放控件,仅支持android
                    trafficEnabled={this.state.trafficEnabled} //默认false,是否显示交通线
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled} //默认false,是否显示热力图
                    mapType={this.state.mapType} //地图模式,NORMAL普通 SATELLITE卫星图
                    zoom={this.state.zoom} //缩放等级,默认为10
                    center={this.state.center} // 地图中心位置
                    markers={this.state.markers} //地图多个标记点
                    // satellite={true}
                    onMapLoaded={(e) => { //地图加载事件
                        //定位用户位置，并且设置为中心点
                        Geolocation.getCurrentPosition()
                            .then(data => {
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
                            .catch(e => {
                                console.warn(e, 'error');
                            })
                    }}

                    onMarkerClick={(e) => { //标记点点击事件
                        console.log(e)
                    }}
                    onMapClick={(e) => { //地图空白区域点击事件,返回经纬度
                        let title = '';
                        Geolocation.reverseGeoCode(e.latitude, e.longitude)
                            .then(res => {
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
                        Geolocation.reverseGeoCode(e.latitude, e.longitude)
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
                    <Marker
                        title='中心'
                        location={{ longitude: 116.465175, latitude: 39.938522 }} />
                    <Marker
                        title='中心2'
                        location={{ longitude: 116.467176, latitude: 39.939522 }} />
                    <Marker
                        title='中心3'
                        location={{ longitude: 116.467177, latitude: 39.937524 }} />
                    <Polyline
                        stroke={{ width: 5, color: 'AA000000' }}
                        points={[
                            { longitude: 116.467176, latitude: 39.939522 },
                            { longitude: 116.465175, latitude: 39.938522 },
                            { longitude: 116.467177, latitude: 39.937524 },
                        ]}
                    />
                </MapView>

                {/* 底部地图滑动提示 */}
                <View style={{ height: 240, width: "100%", }}>
                    <View style={{ position: "absolute", height: 30, backgroundColor: "#2F3843", paddingVertical: 5, top: -35, left: 0 }}>
                        <Text style={{ color: "#fff", fontSize: 20, lineHeight: 25 }}>大家都打卡了</Text>
                    </View>
                    <ScrollView
                        style={{ width: '100%', height: 100, }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            imgDate.map((item) => {
                                return (
                                    <View style={{ marginLeft: 10 }}>
                                        <View style={{ width: 138, height: 93 }}>
                                            <Image style={{ height: 100, width: '100%' }} source={{ uri: item.imgUri }} />
                                        </View>
                                        <Text style={{ marginTop: -15 }}>距离此路线仅{item.distance}km</Text>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                    <Text style={{ fontSize: 20 }}>杭州西溪湿地 </Text>
                    <ScrollView
                        style={{ width: '100%', height: 100, }}
                        horizontal={false}
                        showsVerticalScrollIndicator={false}
                    >
                        {
                            imgDate.map((item) => {
                                return (
                                    <View style={{ justifyContent: "space-between" }}>
                                        <View style={{ width: '100%', height: 20, backgroundColor: "green" }}>
                                            {/* <Image style={{ height: 100, width: '100%' }} source={{ uri: item.imgUri }} /> */}
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
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
        height: height - 380,
        marginBottom: 5,
    },
    list: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginBottom: 5,
    },
    top: {
        height: 78,
        width: "100%",
        backgroundColor: "#fff",
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        elevation: 8,
        flexDirection: "row"
    },
});