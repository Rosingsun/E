import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView,StyleSheet,Dimensions } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './RowThings/SliderEntry';
// import { ENTRIES1,} from './RowThings/entries';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;
const ENTRIES1 = [
    {
        key:1,
        title: '第66期：随白居易钱塘湖春行',
        subtitle1: '· 杭州西湖以茶会友，小阁相聚风景极好',
        subtitle2: '· 西湖国宾馆下午茶好吃不贵，纵享丝滑。',
        illustration: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2588053483,3183865902&fm=26&gp=0.jpg'
    },
    {
        key:2,
        title: '第65期：灵隐春色初始开',
        subtitle1: '· 古朴大殿梦回大唐',
        subtitle2: '· 素斋中领悟人生',
        illustration: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2186063278,2492408580&fm=26&gp=0.jpg'
    },
    {
        key:3,
        title: '第66期：随白居易钱塘湖春行',
        subtitle1: '· 杭州西湖以茶会友，小阁相聚风景极好',
        subtitle2: '· 西湖国宾馆下午茶好吃不贵，纵享丝滑。',
        illustration: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2705126453,2771950995&fm=26&gp=0.jpg'
    },
    {   key:4,
        title: '第66期：随白居易钱塘湖春行',
        subtitle1: '· 杭州西湖以茶会友，小阁相聚风景极好',
        subtitle2: '· 西湖国宾馆下午茶好吃不贵，纵享丝滑。',
        illustration: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2753143250,2580091861&fm=26&gp=0.jpg'
    },
    {
        key:5,
        title: '第66期：随白居易钱塘湖春行',
        subtitle1: '· 杭州西湖以茶会友，小阁相聚风景极好',
        subtitle2: '· 西湖国宾馆下午茶好吃不贵，纵享丝滑。',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
    },
    {   
        key:6,
        title: '第66期：随白居易钱塘湖春行',
        subtitle1: '· 杭州西湖以茶会友，小阁相聚风景极好',
        subtitle2: '· 西湖国宾馆下午茶好吃不贵，纵享丝滑。',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
    }
];

export default class Example extends Component {

    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM
        };
    }

    _renderItem ({item, index}) {
        return <SliderEntry data={item} even={(index + 1) % 2 === 0} />;
    }

    _renderItemWithParallax ({item, index}, parallaxProps) {
        return (
            <SliderEntry
              data={item}
              even={(index + 1) % 2 === 0}
              parallax={true}
              parallaxProps={parallaxProps}
            />
        );
    }

    _renderLightItem ({item, index}) {
        return <SliderEntry data={item} even={false} />;
    }

    _renderDarkItem ({item, index}) {
        return <SliderEntry data={item} even={true} />;
    }

    mainExample (number, title) {
        const { slider1ActiveSlide } = this.state;

        return (
            <View style={styles.exampleContainer}>
                {/* <Text style={styles.title}>{`Example ${number}`}</Text>
                <Text style={styles.subtitle}>{title}</Text> */}
                <Carousel
                  ref={c => this._slider1Ref = c}
                  data={ENTRIES1}
                  renderItem={this._renderItemWithParallax}
                  sliderWidth={viewportWidth}
                  itemWidth={viewportWidth*0.75}
                  hasParallaxImages={true}
                //   第一个展现的图片
                  firstItem={0}
                //   inactiveSlideScale={0.94}
                //   inactiveSlideOpacity={0.7}
                inactiveSlideScale={1}
                inactiveSlideOpacity={0.8}
                  // inactiveSlideShift={20}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                //   loop={true}
                //   loopClonesPerSide={2}
                //   autoplay={true}
                //   autoplayDelay={500}
                //   autoplayInterval={3000}
                  onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />

            </View>
        );
    }

 

    render () {
        const example1 = this.mainExample(1, 'Default layout | Loop | Autoplay | Parallax | Scale | Opacity | Pagination with tappable dots');
        return (
            <SafeAreaView style={styles.safeArea}>

                        { example1 }

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
        backgroundColor:  '#B721FF',
        
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
       marginLeft: '-10%'
    },
    exampleContainerDark: {
        backgroundColor: '#1a1917',
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },

    slider: {

        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },

});

