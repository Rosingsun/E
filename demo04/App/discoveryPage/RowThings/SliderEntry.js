import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,StyleSheet, Dimensions, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
// import styles from '../styles/SliderEntry.style';
const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;
export default class SliderEntry extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even } = this.props;

        return parallax ? (
            <ParallaxImage
              source={{ uri: illustration }}
              containerStyle={[styles.imageContainer]}
              style={styles.image}
              parallaxFactor={0.6}
            //   showSpinner={true}
            //   spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
              {...parallaxProps}
            />
        ) : (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    render () {
        const { data: { title, subtitle1, subtitle2  }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title,]}
              numberOfLines={2}
            >
                { title.toUpperCase() }
            </Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              onPress={() => { alert(`You've clicked '${title}'`); }}
              >
                {/* <View style={styles.shadow} > */}
                <View style={[styles.imageContainer,]}>
                    { this.image }
                    
                    <View style={[styles.radiusMask,]} >
                { uppercaseTitle }
                </View>
                </View>
                <View style={[styles.textContainer,]}>
                    
                    <Text
                      style={[styles.subtitle, ]}
                      numberOfLines={2}
                    >
                        { subtitle1 }
                        </Text>
                        <Text
                      style={[styles.subtitle, ]}
                      numberOfLines={2}
                    >
                        { subtitle2 }
                    </Text>
                </View>
                {/* </View> */}
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    slideInnerContainer: {
        width: 288,
        height: 160,
        //  paddingHorizontal: 20,
        // marginHorizontal:10,
        // backgroundColor:'red'
        // paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
       
        shadowColor:  '#1a1917',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius:8,
        elevation:15,

    },
    imageContainer: {
        flex: 1,
        // width:288,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor:  'transparent',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    
    },
    // imageContainerEven: {
    //     backgroundColor: colors.black
    // },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,opacity:0,
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
         bottom: 0,
        left: 0,
        right: 0,
        height: 28,
        backgroundColor: '#2C2C2C90',
        justifyContent:'center'
    },
    // radiusMaskEven: {
    //     backgroundColor: colors.black
    // },
    textContainer: {
        justifyContent: 'center',
        // paddingTop: 20 - entryBorderRadius,
        // paddingBottom: 20,
        paddingVertical:5,
        paddingHorizontal: 11,
        backgroundColor: 'white',
        borderBottomLeftRadius:3,
        borderBottomRightRadius: 3,
        elevation:10,
    },

    title: {
        color: '#FFFFFF',
        fontSize: 12,
        marginLeft:'6%',
    },

    subtitle: {
        // marginTop: 6,
        color: '#484848FF',
        fontSize: 12,
        // fontStyle: 'italic'
    },

});
