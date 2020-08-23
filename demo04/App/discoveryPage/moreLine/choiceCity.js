import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, StatusBar, FlatList, ItemDivideComponent, TextInput, Alert, TouchableHighlight } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MFImage from "./fengzhuang";
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');


var cityInfo = [
  {
    key: 0,
    CcityName: "杭州",
    EcityName: "Hang Zhou",
    backImgSrc: require("./photo/hangzhou.jpg"),
  },
  {
    key: 1,
    CcityName: "宁波",
    EcityName: "Ning Bo",
    backImgSrc: require("./photo/ningbo.jpg"),
  },
  {
    key: 2,
    CcityName: "嘉兴",
    EcityName: "Ja Xing",
    backImgSrc: require("./photo/jiaxing.jpg"),
  },
  {
    key: 3,
    CcityName: "绍兴",
    EcityName: "Shao Xing",
    backImgSrc: require("./photo/shaoxing.jpg"),
  },
  {
    key: 4,
    CcityName: "舟山",
    EcityName: "Zhou Shan",
    backImgSrc: require("./photo/zhoushan.jpg"),
  },
  {
    key: 5,
    CcityName: "温州",
    EcityName: "Wen Zhou",
    backImgSrc: require("./photo/wenzhou.jpg"),
  },
  {
    key: 6,
    CcityName: "湖州",
    EcityName: "Hu Zhou",
    backImgSrc: require("./photo/huzhou.jpg"),
  },
  {
    key: 7,
    CcityName: "丽水",
    EcityName: "Li Shui",
    backImgSrc: require("./photo/lishui.jpg"),
  },
  {
    key: 8,
    CcityName: "金华",
    EcityName: "Jin Hua",
    backImgSrc: require("./photo/jinhua.jpg"),
  },
  {
    key: 9,
    CcityName: "衢州",
    EcityName: "Qu Zhou",
    backImgSrc: require("./photo/quzhou.jpg"),
  },
  {
    key: 10,
    CcityName: "台州",
    EcityName: "Tai Zhou",
    backImgSrc: require("./photo/taizhou.jpg"),
  },
]
export default class choiceCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      turnOn: true,
      turnOff: false
    }
  }
  render() {
    return (

      <View style={styles.container}>

        <View style={styles.Top}>
          <AntDesign name={'left'} size={32} color='#000000' style={{ marginLeft: '3%' }} onPress={() => {
            this.props.navigation.goBack()
          }} />
          <Text style={{ fontSize: 20, color: '#000000', marginLeft: '30%' }}>选择城市</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>


          <View style={styles.someTouch}>
            {
              cityInfo.map((item) => {
                return (
                  <View style={styles.Citystyle} >
                    <TouchableHighlight
                      style={{ height: '100%', width: '100%' }}
                      onPress={() => {
                        this.props.navigation.navigate("Line", { cityName: item.CcityName })
                      }}
                    >
                      <View style={{ height: '100%', width: '100%' }}>
                        <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={item.backImgSrc} />
                        <Text style={styles.photoWord} pointerEvents="none">{item.CcityName}</Text>
                        <Text style={styles.photoEnglish} pointerEvents="none"> {item.EcityName}</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                )
              })
            }
          </View>


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  Top: {
    height: 78,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  Citystyle: {
    width: "94%",
    height: 110,
    backgroundColor: "#000",
    borderWidth: 6,
    borderRadius: 3,
    borderColor: "#6C9575",
    marginTop: 20
  },
  someTouch: {
    alignItems: 'center'
  },
  photoWord: {
    marginTop: '-18%',
    zIndex: 10,
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
  },
  photoEnglish: {
    width: '100%',
    textAlign: 'center',
    zIndex: 100,
    color: '#FFFFFF',
    fontSize: 15
  },
})