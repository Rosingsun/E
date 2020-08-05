import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image, StatusBar, FlatList, ItemDivideComponent, TextInput,Alert} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MFImage from "./fengzhuang";
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1080;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');


var cityInfo=[
  {
    CcityName:"杭州",
    EcityName:"Hang Zhou",
    backImgSrc:"./photo/hangzhou.jpg",
  },
  {
    CcityName:"宁波",
    EcityName:"Ning Bo",
    backImgSrc:"./photo/ningbo.jpg",
  },
  {
    CcityName:"嘉兴",
    EcityName:"Ja Xing",
    backImgSrc:"./photo/jiaxing.jpg",
  },
  {
    CcityName:"绍兴",
    EcityName:"Shao Xing",
    backImgSrc:"./photo/shaoxing.jpg",
  },
  {
    CcityName:"舟山",
    EcityName:"Zhou Shan",
    backImgSrc:"./photo/zhoushan.jpg",
  },
  {
    CcityName:"温州",
    EcityName:"Wen Zhou",
    backImgSrc:"./photo/wenzhou.jpg",
  },
  {
    CcityName:"湖州",
    EcityName:"Hu Zhou",
    backImgSrc:"./photo/huzhou.jpg",
  },
  {
    CcityName:"丽水",
    EcityName:"Li Shui",
    backImgSrc:"./photo/lishui.jpg",
  },
  {
    CcityName:"金华",
    EcityName:"Jin Hua",
    backImgSrc:"./photo/jinhua.jpg",
  },
  {
    CcityName:"衢州",
    EcityName:"Qu Zhou",
    backImgSrc:"./photo/quzhou.jpg",
  },
  {
    CcityName:"台州",
    EcityName:"Tai Zhou",
    backImgSrc:"./photo/taizhou.jpg",
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
            {/* {
              cityInfo.map((item)=>{
                return(
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',width: '100%' }} touchBgColor={'#00000030'} source={{require(item.backImgSrc)}} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>{item.CcityName}</Text>
                <Text style={styles.photoEnglish}>{item.EcityName}</Text>
          </View>
                )
              })
            } */}



          

  
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/ningbo.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>宁波</Text>
            <Text style={styles.photoEnglish}>Ning Bo</Text>
          </View>       
             <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/jiaxing.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>嘉兴</Text>
            <Text style={styles.photoEnglish}>Ja Xing</Text>
          </View>
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/shaoxing.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>绍兴</Text>
            <Text style={styles.photoEnglish}>Shao Xing</Text>
          </View>      
            <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/zhoushan.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>舟山</Text>
            <Text style={styles.photoEnglish}>Zhou Shan</Text>
          </View>
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',  width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/wenzhou.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>温州</Text>
            <Text style={styles.photoEnglish}>Wen Zhou</Text>
          </View>
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',  width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/huzhou.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>湖州</Text>
            <Text style={styles.photoEnglish}>Hu Zhou</Text>
          </View>
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%',width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/lishui.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>丽水</Text>
            <Text style={styles.photoEnglish}>Li Shui</Text>
          </View>
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/jinhua.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>金华</Text>
            <Text style={styles.photoEnglish}>Zhou Shan</Text>
          </View>    
          <View style={styles.Citystyle}>
            <MFImage style={{ height: '100%', width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/quzhou.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>衢州</Text>
            <Text style={styles.photoEnglish}>Qu Zhou</Text>
          </View>    
                <View style={[styles.Citystyle,{marginBottom:20}]}>
            <MFImage style={{ height: '100%',width: '100%' }} touchBgColor={'#00000030'} source={require('./photo/taizhou.jpg')} onPress={() => { Alert.alert("111") }} />
            <Text style={styles.photoWord}>台州</Text>
            <Text style={styles.photoEnglish}>Tai Zhou</Text>
          </View>
    
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
    height: 90,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
    borderRadius:15
  },
  Citystyle:{width: "94%",
  height: 110, 
  backgroundColor: "#ffffff",
   borderWidth: 6, 
   borderRadius: 3,
    borderColor: "#6C9575", 
    marginTop:20},
  someTouch: {
    alignItems: 'center'
  },
  photoWord:{
     marginTop: '-18%',
     zIndex: 10,
     textAlign:'center',
     color:'#FFFFFF',
     fontSize:20 ,
     fontWeight:'900',
  },
  photoEnglish:{
    width:'100%',
    textAlign:'center',
     zIndex: 100,
     color:'#FFFFFF',
     fontSize:15
  },
})