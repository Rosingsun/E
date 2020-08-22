import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
const IS_IOS = Platform.OS === 'ios';
// const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Dimensions.get('window').width / 2.2;
const ITEM_HEIGHT = Dimensions.get('window').width * 0.35 - 20;
const viewportHeight = Dimensions.get('window').height;
const viewportWidth = Dimensions.get('window').width;
function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

// const slideHeight = viewportHeight * 0.35-20;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);
export const sliderWidth = SLIDER_WIDTH;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
// import styles from './SliderEntry.style';
export default class SliderEntry extends Component {

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object
  };

  get image() {
    const { data: { illustration }, parallax, parallaxProps, even } = this.props;

    return parallax ? (
      <ParallaxImage
        source={{ uri: illustration }}
        containerStyle={[styles.imageContainer, even ? styles.imageContainerEven : {}]}
        style={styles.image}
        //   视差因子
        parallaxFactor={0.35}
        //   显示轮转 必须要,否则点击跳转后和自动跳转时间有点差别.
        showSpinner={true}
        //   点点的颜色
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
        <ImageBackground
          source={{ uri: illustration }}
        // style={[styles.image],{height:100,width:100}}
        />
      );
  }

  render() {
    const { data: { title, subtitle, illustration, dakaFlag }, even } = this.props;

    const uppercaseTitle = title ? (
      // 涉及到文字的行数?
      <View style={{ backgroundColor: 'GREEN' }}>
        <Text
          style={[styles.title, even ? styles.titleEven : {}]}
          numberOfLines={1}
        >
          {title.toUpperCase()}
        </Text>21111</View>


    ) : false;

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() => { alert(`You've clicked '${title}'`); }}
      >
        {/* <View style={styles.shadow} /> */}
        <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
          {this.image}
          {/* <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} /> */}
          {/* <ImageBackground
            imageStyle={{
              opacity: 0.4
            }}
            style={{
              // borderRadius: 8,
              height: ITEM_HEIGHT + 3,
              //   图片宽度要小一点
              width: ITEM_WIDTH,
              backgroundColor: "#000",
            }} source={{ uri: illustration }} > */}
          <View style={{ height: ITEM_HEIGHT + 2, position: "absolute", borderRadius: 8, backgroundColor: "#00000070", width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 15, textAlign: "center", width: '100%', color: 'white' }}>{title}</Text>
            <Text style={{ fontSize: 12, textAlign: "center", width: '100%', color: 'white' }}>{subtitle}</Text>
          </View>
          {/* </ImageBackground> */}
        </View>
        <View style={{ borderBottomRightRadius: 8, borderBottomLeftRadius: 8, overflow: "hidden", backgroundColor: "#6C9575", width: ITEM_WIDTH, height: '20%', justifyContent: "center" }}>
          <ImageBackground style={{
            height: '100%',
            width: ITEM_WIDTH,
            position: "absolute",
            top: 0,
            left: 0,
            opacity: dakaFlag,
            borderBottomRightRadius: 8,
            borderBottomLeftRadius: 8,
          }}
            source={{ uri: illustration }}
          >
          </ImageBackground>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 12 }}>打卡</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 70,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'transparent',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  // 黑色卡片图片背景色
  imageContainerEven: {
    backgroundColor: 'transparent',
  },
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 8,
    // backgroundColor: 'white',
    backgroundColor: 'transparent',
  },
  // 图片下面，文字上面的那一条框
  radiusMaskEven: {
    backgroundColor: 'yellow'
    // backgroundColor:'transparent',
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - 8,
    paddingBottom: 3,
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

  },
  // 文字框的大小 位置
  textContainerEven: {
    backgroundColor: 'transparent',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: IS_IOS ? 8 : 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  slideInnerContainer: {
    width: SLIDER_WIDTH / 1.84,
    height: ITEM_WIDTH - 30,
    paddingHorizontal: 16,
  },
})
