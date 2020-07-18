
import React, { Component, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    TextInput,
    StatusBar,
    TouchableWithoutFeedback,
    Alert,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Global from'../../global';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class Top_nav extends Component {
    render() {
        return (
            <View style={[styles.container]}>

                {/* <StatusBar
                    hidden={false}
                    backgroundColor={'#FFB16C'} /> */}
                    <StatusBar
                     barStyle='light-content' 
                     backgroundColor='rgba(0,0,0,0)'
                      translucent={true}/>
                <View style={[styles.top]}>
                    <View style={[styles.nav_container]}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome name={'map-marker'} size={30} color={'#fff'} />
                            <Text style={{ lineHeight: 30, marginLeft: 10, color: "#fff", fontWeight: "bold" }}>杭州</Text>
                        </View>
                        <View style={[styles.inputBox]}>
                            <TextInput
                                placeholder="abibas"
                                style={{fontSize:15, padding:0,letterSpacing:1,marginLeft:10,width:'85%',lineHeight:-2,}}
                            >
                            </TextInput>
                            <FontAwesome style={{lineHeight:35,marginLeft:5}} name={'search'} size={15} color={'#6C6C6C'} />
                        </View>
                        <TouchableWithoutFeedback
                        onPress={()=>{
                            Alert.alert("you presss me ")
                            
                        }}
                        >
                            <FontAwesome name={'bell'} size={25} color={'#fff'} />
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: "#ffffff",
        width: 250 * biLi,
        borderRadius: 20,
        padding:0,
        height:35*biLi,
        fontSize: 12,
        flexDirection:"row",
    },
    container: {
        flex: 1
    },
    top: {
        position: "absolute",
        top: 0,
        height: (100) * biLi,
        width: "100%",
        backgroundColor: "#FFB16C",
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        elevation: 8,
    },
    nav_container: {
        flex: 0.7,
        marginTop: '11%',
        flexDirection: "row",
        width: "90%",
        justifyContent: "space-between",
        alignItems: "center",
        marginLeft: "5%",
    },
});
