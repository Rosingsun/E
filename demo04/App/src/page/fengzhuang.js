import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Image, TouchableNativeFeedback } from 'react-native';
 
class MFImage extends Component {
    render() {
        const { 
            style = {}, 
            resizeMode = "cover", 
            source = "", 
            onPress = ()=>{},
            touchBgColor = "rgba(255,255,255,.4)"
        } = this.props;
 
        let size = {
            width: style.width,
            height: style.height,
        }
        return (
            <View style={style}>
                <Image
                    style={{
                        resizeMode: resizeMode,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        ...size
                    }}
                    source={source} 
                />
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple(touchBgColor)}
                    >
                    <View style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        ...size
                    }}/>
                </TouchableNativeFeedback>
            </View>
        )
    }
}
 
export default MFImage;