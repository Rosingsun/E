import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform,
    Dimensions,
    Alert,
    StatusBar,
} from 'react-native';

import { MapView, MapTypes, Geolocation } from 'react-native-baidu-map';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
// import Dimensions from 'Dimensions';
const { width, height } = Dimensions.get('window');

export default class BaiduMap extends Component {
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
                    title: 'my name',
                }
            ],
            clickMessage: '111',
            poiMessage: '',
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
                            }}
                        />
                        <View style={{ flexDirection: "row",width:'30%',justifyContent:"space-around"}}>
                            <Ionicons name={'heart-outline'} size={30} color={'#000'}
                                onPress={() => {
                                }} />
                            <MaterialCommunityIcons name={'swap-horizontal-circle-outline'} size={30} color={'#000'}
                                onPress={() => {
                                }} />
                            <Feather name={'more-horizontal'} size={30} color={'#000'}
                                onPress={() => {
                                }} />
                        </View>
                    </View>
                </View>
                <MapView

                
                    zoomControlsVisible={this.state.zoomControlsVisible} //默认true,是否显示缩放控件,仅支持android
                    trafficEnabled={this.state.trafficEnabled} //默认false,是否显示交通线
                    baiduHeatMapEnabled={this.state.baiduHeatMapEnabled} //默认false,是否显示热力图
                    mapType={this.state.mapType} //地图模式,NORMAL普通 SATELLITE卫星图
                    zoom={this.state.zoom} //缩放等级,默认为10
                    center={this.state.center} // 地图中心位置
                    markers={this.state.markers} //地图多个标记点
                    satellite={true}
                    onMapLoaded={(e) => { //地图加载事件
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
                </MapView>

                {/* <View style={styles.list}>
                    <Text>地图缩放控件状态: </Text>
                    {this.state.zoomControlsVisible ?
                        <Text onPress={() => this.setState({ zoomControlsVisible: false })}>显示</Text>
                        :
                        <Text onPress={() => this.setState({ zoomControlsVisible: true })}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>交通线状态: </Text>
                    {this.state.trafficEnabled ?
                        <Text onPress={() => this.setState({ trafficEnabled: false })}>显示</Text>
                        :
                        <Text onPress={() => this.setState({ trafficEnabled: true })}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>热力图状态: </Text>
                    {this.state.baiduHeatMapEnabled ?
                        <Text onPress={() => this.setState({ baiduHeatMapEnabled: false })}>显示</Text>
                        :
                        <Text onPress={() => this.setState({ baiduHeatMapEnabled: true })}>关闭</Text>
                    }
                </View>
                <View style={styles.list}>
                    <Text>地图模式状态: </Text>
                    {this.state.mapType == MapTypes.NORMAL ?
                        <Text onPress={() => this.setState({ mapType: MapTypes.SATELLITE })}>普通</Text>
                        :
                        <Text onPress={() => this.setState({ mapType: MapTypes.NORMAL })}>卫星</Text>
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
                            .catch(e => {
                                console.warn(e, 'error');
                            })
                    }}>当前位置</Text>
                </View> */}
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
        height: height -138,
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