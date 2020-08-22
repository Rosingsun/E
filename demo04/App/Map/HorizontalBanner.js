import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, StyleSheet, Dimensions, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
// import { sliderWidth, itemWidth } from './styles/SliderEntry.style';
import SliderEntry from './SliderEntry';
import {
  scrollInterpolator,
  animatedStyles,
  TRANSLATE_VALUE,
} from './animations3';
// import {ENTRIES1} from './baiduMap'
const sliderWidth = Dimensions.get('window').width;
const itemWidth = Dimensions.get('window').width * 0.35;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.3 - 20;
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const ENTRIES1 = [
  {
    title: '断壁残垣',
    subtitle: 'The Broken Wall',
    dakaFlag: 0,

    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597595405165&di=b8b9a6c89903508354a507cb4aefc0ab&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3768549857%2C101530550%26fm%3D214%26gp%3D0.jpg',
  },
  {
    title: '西湖',
    subtitle: 'West Lake',
    dakaFlag: 0,
    illustration: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=194262224,3639052328&fm=26&gp=0.jpg',
  },
  {
    title: '西湖',
    subtitle: 'West Lake',
    dakaFlag: 0,
    illustration: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2142249982,2509089594&fm=26&gp=0.jpg',
  },
  {
    title: '西湖',
    subtitle: 'West Lake',
    dakaFlag: 1,
    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766449537&di=0d45f9687757722ba383e1ccf051a1a0&imgtype=0&src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp90995552.jpg',
  },
  {
    title: '西湖',
    subtitle: 'West Lake',
    dakaFlag: 1,
    illustration: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597766489234&di=aed5d40a3b8d9ac4cbc9838e73c0c462&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F02%2F20180402003053_vKaQw.jpeg',
  },

];
const DATA = [];
for (let i = 0; i < 30; i++) {
  DATA.push(i);
}

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: 1,
      activeIndex: 0,
      index: 0,
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
        {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text>  */}
        <Carousel
          ref={c => this._slider1Ref = c}
          // data={ENTRIES1}
          data={ENTRIES1}
          renderItem={this._renderItemWithParallax}
          // sliderWidth={sliderWidth}
          // itemWidth={itemWidth}
          sliderWidth={sliderWidth}
          itemWidth={sliderWidth / 1.5}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.85}
          inactiveSlideOpacity={0.5}

          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={false}
          // loopClonesPerSide={1}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}


          // onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
          onSnapToItem={index => this.setState({ index })}
          // onSnapToItem={index => this.setState({ index })}
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
        <Text style={styles.counter}>{this.state.index}</Text>

      </View>
    );
  }



  get gradient() {
    return (
      <LinearGradient
        colors={['#fff', '#fff']}
        startPoint={{ x: 1, y: 0 }}
        endPoint={{ x: 0, y: 1 }}
        style={styles.gradient}
      />
    );
  }

  render() {
    const Example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');

    return (
      <SafeAreaView style={styles.safeArea}>
        {/* <View style={styles.container}> */}
          {/* 状态栏 */}
          {/* <StatusBar
            translucent={true}
            backgroundColor={'rgba(0, 0, 0, 0.3)'}
            barStyle={'light-content'}
          /> */}
          {this.gradient}
          {/* <ScrollView
            style={styles.scrollview}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          > */}
          {Example1}

          {/* </ScrollView> */}
        {/* </View> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  safeArea: {
    height:'100%',
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
    // marginTop: 100,
    overflow: 'visible' // for custom animations
    //自定义动画
  },
  // 点点距离轮播的距离
  sliderContentContainer: {
    paddingVertical: 0,
    // marginLeft: -sliderWidth /5,

  },
  // 点点距离轮播的距离
  paginationContainer: {
    paddingVertical: 0
  },
  // 点点
  // paginationDot: {
  //     width: 8,
  //     height: 8,
  //     borderRadius: 4,
  //     marginHorizontal: 8
  // },
  counter: {
    // marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#FFF',
    
  },
});
