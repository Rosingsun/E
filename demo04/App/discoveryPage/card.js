import React, { PureComponent } from 'react';
import Carousel, { getInputRangeFromIndexes, ParallaxImage } from 'react-native-snap-carousel';
import {
    Text,
    View,
    SafeAreaView,
    ImageBackground,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} from 'react-native';

export default class MyCustomCarousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            carouselItems: [
                {
                    title: '西湖',
                    subtitle: 'West Lake',
                    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597595405165&di=b8b9a6c89903508354a507cb4aefc0ab&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3768549857%2C101530550%26fm%3D214%26gp%3D0.jpg',
                },
                {
                    title: '金华',
                    subtitle: 'West Lake',
                    illustration: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=194262224,3639052328&fm=26&gp=0.jpg',
                },
                {
                    title: '宝贝',
                    subtitle: 'West Lake',
                    illustration: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142249982,2509089594&fm=26&gp=0.jpg',
                },
                {
                    title: '西湖',
                    subtitle: 'West Lake',
                    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766449537&di=0d45f9687757722ba383e1ccf051a1a0&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp90995552.jpg',
                },
                {
                    title: '西湖',
                    subtitle: 'West Lake',
                    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766489234&di=aed5d40a3b8d9ac4cbc9838e73c0c462&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402003053_vKaQw.jpeg',
                },

            ]
        }
    }





    _scrollInterpolator(index, carouselProps) {
        const range = [3, 2, 1, 0, -1];
        const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
        const outputRange = range;

        return { inputRange, outputRange };
    }

    _animatedStyles(index, animatedValue, carouselProps) {
        const sizeRef = carouselProps.vertical ? carouselProps.itemHeight : carouselProps.itemWidth;
        const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

        return {
            zIndex: carouselProps.data.length - index,
            opacity: animatedValue.interpolate({
                inputRange: [2, 3],
                outputRange: [1, 0]
            }),
            transform: [{
                rotate: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: ['-25deg', '0deg', '-3deg', '1.8deg', '0deg'],
                    extrapolate: 'clamp'
                })
            }, {
                [translateProp]: animatedValue.interpolate({
                    inputRange: [-1, 0, 1, 2, 3],
                    outputRange: [
                        -sizeRef * 0.5,
                        0,
                        -sizeRef, // centered
                        -sizeRef * 2, // centered
                        -sizeRef * 3 // centered
                    ],
                    extrapolate: 'clamp'
                })
            }]
        };
    }
    _renderItem({ item, index }) {
        return (
            // <View style={{ width: '80%', height:370, }}>
            //     {/* 此高度要和下面第一个VIEW的高度一样哦，不然alart点不出来 */}
            <TouchableOpacity style={{ width: '80%', height: 400, backgroundColor: 'transparent', justifyContent: 'center', marginLeft: '10%', }}
                activeOpacity={0}
                onPress={() => {
                    Alert.alert(item.title,index)
                    // this.props.navigation.navigate("qiandao");
                }}
            >
                <View style={{
                    backgroundColor: 'white',
                    borderRadius: 5,
                    height: '75%',
                    width: '100%',
                    alignItems: 'center',
                    marginRight: 40,
                    elevation: 15
                }}>
                    <Image style={{
                        borderRadius: 5,
                        height: '48%',
                        width: '100%',
                    }} source={{ uri: item.illustration }} />
                    <View style={{ height: '22%', width: '100%' }}>
                        <Text style={{ fontSize: 24, marginTop: 10, textAlign: "center", width: '100%' }}>{item.title}</Text>
                        <Text style={{ fontSize: 15, marginTop: 5, textAlign: "center", width: '100%' }}>{item.subtitle}</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-around", height: '28%', width: '100%' }}>
                        <Image style={{
                            borderRadius: 5,
                            height: '100%',
                            width: '30%',
                        }} source={{ uri: item.illustration }} />
                        <Image style={{
                            borderRadius: 5,
                            height: '100%',
                            width: '30%',
                        }} source={{ uri: item.illustration }} />
                        <Image style={{
                            borderRadius: 5,
                            height: '100%',
                            width: '30%',
                        }} source={{ uri: item.illustration }} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render() {
        return (
            <View style={{
                width: '100%',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Carousel
                    scrollInterpolator={this._scrollInterpolator}
                    slideInterpolatedStyle={this._animatedStyles}
                    useScrollView={true}
                    sliderWidth={380}
                    itemWidth={380}
                    data={this.state.carouselItems}
                    renderItem={({item})=>
                    <TouchableOpacity style={{ width: '80%', height: 400, backgroundColor: 'transparent', justifyContent: 'center', marginLeft: '10%', }}
                    activeOpacity={0}
                    onPress={() => {
                        Alert.alert(item.title)
                    }}
                >
                    <View style={{
                        backgroundColor: 'white',
                        borderRadius: 5,
                        height: '75%',
                        width: '100%',
                        alignItems: 'center',
                        marginRight: 40,
                        elevation: 15
                    }}>
                        <Image style={{
                            borderRadius: 5,
                            height: '48%',
                            width: '100%',
                        }} source={{ uri: item.illustration }} />
                        <View style={{ height: '22%', width: '100%' }}>
                            <Text style={{ fontSize: 24, marginTop: 10, textAlign: "center", width: '100%' }}>{item.title}</Text>
                            <Text style={{ fontSize: 15, marginTop: 5, textAlign: "center", width: '100%' }}>{item.subtitle}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", height: '28%', width: '100%' }}>
                            <Image style={{
                                borderRadius: 5,
                                height: '100%',
                                width: '30%',
                            }} source={{ uri: item.illustration }} />
                            <Image style={{
                                borderRadius: 5,
                                height: '100%',
                                width: '30%',
                            }} source={{ uri: item.illustration }} />
                            <Image style={{
                                borderRadius: 5,
                                height: '100%',
                                width: '30%',
                            }} source={{ uri: item.illustration }} />
                        </View>
                    </View>
                </TouchableOpacity>
                    }
                    loop={true}
                />
            </View>

        );
    }

}