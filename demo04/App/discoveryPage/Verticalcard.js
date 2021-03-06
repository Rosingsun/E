import React, { useRef, useState, useEffect, Component } from 'react';
// import React, {  } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
// export const sliderWidth = viewportWidth;
// export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const ENTRIES1 = [
    {
        title: '杭州上城区到下城区',

        subtitle: 'By:桥本环奈',
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597595405165&di=b8b9a6c89903508354a507cb4aefc0ab&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3768549857%2C101530550%26fm%3D214%26gp%3D0.jpg',
    },
    {
        title: '杭州上城区到下城区',
        subtitle: 'By:桥本环奈',
        illustration: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=194262224,3639052328&fm=26&gp=0.jpg',
    },
    {
        title: '杭州上城区到下城区',
        subtitle: 'By:桥本环奈',
        illustration: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142249982,2509089594&fm=26&gp=0.jpg',
    },
    {
        title: '杭州上城区到下城区',
        subtitle: 'By:桥本环奈',
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766449537&di=0d45f9687757722ba383e1ccf051a1a0&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp90995552.jpg',
        // illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
        title: '杭州上城区到下城区',
        subtitle: 'By:桥本环奈',
        illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766489234&di=aed5d40a3b8d9ac4cbc9838e73c0c462&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402003053_vKaQw.jpeg',
    },

]
const { width: screenWidth } = Dimensions.get('window');

const VerticalMyCarousel = props => {


    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);
    const goForward = () => {
        carouselRef.current.snapToNext();
    };
    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);
    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={{ height: 350 }}>
                <View style={styles.item}>
                    <TouchableOpacity style={{ flex: 1, justifyContent: "center", backgroundColor: 'transparent' }}
                        activeOpacity={1}
                        onPress={() => {
                            props.navigation.navigate("BaiduMap");
                        }}
                    >
                        {/* <View> */}
                        <ParallaxImage
                            source={{ uri: item.illustration }}
                            containerStyle={styles.imageContainer}
                            style={styles.image}
                            //   设置图片缩略大小
                            parallaxFactor={0.4}
                            hasParallaxImages={true}
                            {...parallaxProps}
                        //  firstItem={2}

                        />


                    </TouchableOpacity>
                    <Text style={{ position: "absolute", top: 3, left: 3, fontSize: 15, color: '#FFF' }} numberOfLines={1}>
                        {item.title}
                    </Text>
                    <Text style={{ position: "absolute", top: 3, right: 3, fontSize: 15, color: '#FFF' }} numberOfLines={1}>
                        {item.subtitle}
                    </Text>

                </View>
            </View>

        );
    };

    return (
        <View style={styles.container}>
            {/* <ScrollView >
            <View style={{height:300,backgroundColor:'pink'}}/> */}

            {/* <View> */}
            <Carousel
                ref={carouselRef}
                sliderWidth={390}
                sliderHeight={350}
                // 内部宽度
                // 260
                // 可以设置中间两个卡片的间隔
                itemWidth={360}
                itemHeight={120}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}

                autoplay={true}
                // itemHeight={screenWidth*0.7}
                vertical={true}
                // backgroundColor={'red'}
                useScrollView={true}
                firstItem={2}
                enableSnap={false}
                enableMomentum={false}
                inactiveSlideScale={0.75}
                inactiveSlideOpacity={0.85}
                loop={true}
                loopClonesPerSide={5}
            />
            {/* </View>  */}
            {/* </View> */}
            {/* <View style={{height:300,backgroundColor:'blue'}}/>
      </ScrollView> */}
        </View>
    );
};

export default VerticalMyCarousel;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    item: {
        width: 360,
        height: 120,
        borderWidth: 8,
        borderRadius: 10,
        borderColor: "#fff",

    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 10
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',

    },
});

