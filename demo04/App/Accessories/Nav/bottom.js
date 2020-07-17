
import React, { Component, useEffect } from 'react';
import {
    View,
    StyleSheet,

} from 'react-native';

export default class Bottom_nav extends Component {
    render() {
        return (
            <View style={[styles.container]}>
                <View style={[styles.bottom]}>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    bottom: {
        position: "absolute",
        bottom: 0,
        height: 50,
        width: "100%",
        backgroundColor: "#ffffff",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 0,
        margin: 0,
    }
});
