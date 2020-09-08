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
    SafeAreaView,
} from 'react-native';

import { MapView, MapTypes, Geolocation, Overlay } from 'react-native-baidu-map';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Example from './HorizontalBanner'
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
// import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import {
    scrollInterpolator,
    animatedStyles,
    TRANSLATE_VALUE,
} from './animations3';



StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
// import Dimensions from 'Dimensions';

const { Marker, Cluster, Arc, Circle, Polyline, Polygon, InfoWindow, HeatMap } = Overlay;
const { width, height } = Dimensions.get('window');
const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width * 0.35;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.3 - 20;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const DATA = [];
for (let i = 0; i < 30; i++) {
    DATA.push(i);
}



const ENTRIES1 = [
    {
        title: '断壁残垣',
        subtitle: 'The Broken Wall',
        dakaFlag: 0,
        longitude: 117.465175,
        latitude: 39.938522,
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597595405165&di=b8b9a6c89903508354a507cb4aefc0ab&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3768549857%2C101530550%26fm%3D214%26gp%3D0.jpg',
    },
    {
        title: '西湖',
        subtitle: 'West Lake',
        dakaFlag: 0,
        longitude: 118.467177,
        latitude: 39.939524,
        illustration: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=194262224,3639052328&fm=26&gp=0.jpg',
    },
    {
        title: '西湖',
        subtitle: 'West Lake',
        dakaFlag: 0,
        longitude: 119.467177,
        latitude: 39.937523,
        illustration: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142249982,2509089594&fm=26&gp=0.jpg',
    },
    {
        title: '西湖',
        subtitle: 'West Lake',
        dakaFlag: 1,
        longitude: 120.467171,
        latitude: 31.937524,
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766449537&di=0d45f9687757722ba383e1ccf051a1a0&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp90995552.jpg',
    },
    {
        title: '西湖',
        subtitle: 'West Lake',
        dakaFlag: 1,
        longitude: 121.467177,
        latitude: 39.937523,
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766489234&di=aed5d40a3b8d9ac4cbc9838e73c0c462&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402003053_vKaQw.jpeg',
    },
    {
        title: '断壁残垣',
        subtitle: 'The Broken Wall',
        dakaFlag: 0,
        longitude: 110.465175,
        latitude: 39.938522,
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597595405165&di=b8b9a6c89903508354a507cb4aefc0ab&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3768549857%2C101530550%26fm%3D214%26gp%3D0.jpg',
    },
];


export default class BaiduMap extends Component {
    constructor() {
        super();
        this.state = {

            slider1ActiveSlide: 1,
            activeIndex: 0,
            zoomControlsVisible: false,
            trafficEnabled: true,
            baiduHeatMapEnabled: false,
            mapType: MapTypes.NORMAL,
            index: 0,
            zoom: 19,
            center: {
                longitude: ENTRIES1[0].longitude,
                latitude: ENTRIES1[0].latitude,
            },
            markers: [
                {
                    longitude: ENTRIES1[0].longitude,
                    latitude: ENTRIES1[0].latitude,
                    title: 'my name',
                }
            ],
            clickMessage: '10221',
            poiMessage: '109',
        };
    }
    _renderItemWithParallax({ item, index }, parallaxProps) {
        return (
            <SliderEntry
                data={item}
                even={(index + 1) % 2 === 0}
                parallax={true}
                parallaxProps={parallaxProps}
            />
        );
    }
    mainExample(number, title) {
        const { slider1ActiveSlide } = this.state;
        return (
            <View style={styles.exampleContainer}>
                <Carousel
                    ref={c => this._slider1Ref = c}
                    data={ENTRIES1}
                    renderItem={this._renderItemWithParallax}
                    sliderWidth={sliderWidth}
                    itemWidth={sliderWidth / 1.5}
                    hasParallaxImages={true}
                    firstItem={0}
                    inactiveSlideScale={0.85}
                    inactiveSlideOpacity={0.5}
                    containerCustomStyle={styles.slider}
                    contentContainerCustomStyle={styles.sliderContentContainer}
                    loop={false}
                    autoplay={true}
                    autoplayDelay={500}
                    autoplayInterval={3000}
                    onSnapToItem={index =>
                        // this.setState({ index })
                        this.setState({
                            center: {
                                longitude: ENTRIES1[index].longitude,
                                latitude: ENTRIES1[index].latitude,
                            },
                        })

                    }
                    scrollInterpolator={scrollInterpolator}
                    slideInterpolatedStyle={(index, animatedValue, carouselProps) => {
                        return animatedStyles(
                            index,
                            animatedValue,
                            carouselProps,
                            this.state.index
                        );
                    }}
                    layout={'default'}
                    removeClippedSubviews={false}
                    useScrollView={true}
                />
            </View>
        );
    }
    get gradient() {
        return (
            <LinearGradient
                colors={['#fff', '#000']}
                startPoint={{ x: 1, y: 0 }}
                endPoint={{ x: 0, y: 1 }}
                style={styles.gradient}
            />
        );
    }
    render() {
        const Example1 = this.mainExample(0, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return (
            <ScrollView style={styles.container}>
                <View style={[styles.top]}>
                    <View style={{ flexDirection: "row", width: '94%', marginLeft: '3%',  marginTop: '8%', justifyContent: "space-between" }}>
                        <AntDesign name={'left'} size={20} color={'#000'}
                            onPress={() => {
                                this.props.navigation.goBack()
                            }} />
                        <View style={{ flexDirection: "row", width: '30%', justifyContent: "space-around" }}>
                            <Ionicons name={'heart-outline'} size={30} color={'#000'} />
                            <MaterialCommunityIcons name={'swap-horizontal-circle-outline'} size={30} color={'#000'} 
                                onPress={()=>{
                                   this.props.navigation.navigate("exchange",{ENTRIES1:ENTRIES1});
                                }}
                            />
                            <Feather name={'more-horizontal'} size={30} color={'#000'} />
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
                    onMarkerClick={(e) => { //标记点点击事件
                        console.log(e)
                    }}
                    style={styles.map}
                >
                    {/* 用来画点 */}
                    {
                        ENTRIES1.map((item) => {
                            return (
                                <Marker
                                    title='中心4'
                                    location={{ longitude: item.longitude, latitude: item.latitude }} />
                            )
                        })
                    }
                </MapView>

                {/* 底部地图滑动提示 */}
                <View style={{ height: 140, width: "100%", position: "absolute", bottom: 0, }}>
                    <View style={{ position: "absolute", height: 30, backgroundColor: "#2F3843", paddingVertical: 5, top: -35, left: 0 }}>
                        <Text style={{ color: "#fff", fontSize: 20, lineHeight: 25 }}
                            onPress={() => {
                                this.setState({
                                    center: {
                                        longitude: 0,
                                        latitude: 0,
                                    },
                                    markers: [{
                                        longitude: 0,
                                        latitude: 0,
                                        title: 'haha',
                                    }],
                                })
                            }}
                        >杭州西溪湿地风景区</Text>
                    </View><Text style={{
                        position: "absolute",
                        fontSize: 30,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        left: 20,
                        color: "#fff",
                        top: -100,
                        backgroundColor: '#000',
                    }}>{this.state.index}</Text>
                    {/* 这下面的东西很重要 */}
                    <SafeAreaView style={styles.safeArea}>
                        {Example1}
                    </SafeAreaView>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    map: {
        width: width,
        height: height - 90,
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
    safeArea: {
        height: '100%',
        // backgroundColor: colors.black
    },
    container: {
        flex: 1,
        // backgroundColor:' colors.background1'
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1,
    },

    slider: {
        // 距离上部分有多高
        overflow: 'visible' // for custom animations
        //自定义动画
    },
    // 点点距离轮播的距离
    sliderContentContainer: {
        paddingVertical: 0,
    },
    // 点点距离轮播的距离
    paginationContainer: {
        paddingVertical: 0
    },
    counter: {
        position: "absolute",
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#FFF',

    },
});