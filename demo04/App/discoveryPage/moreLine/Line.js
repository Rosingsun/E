import React, { Component } from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, Image,StatusBar,FlatList,RefreshControl,ActivityIndicator,
 Alert} from 'react-native';
 import AntDesign from 'react-native-vector-icons/AntDesign';
 import Fontisto from 'react-native-vector-icons/Fontisto'; 
const {width,scale}=Dimensions.get("window");
const biLi=width*scale/1080;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');
export default class Line extends Component {
    constructor(props) {
      super(props);
      this.state = {
        turnOn: true,
        turnOff: false
      }
    }
    render() {
        return (
          <View style = {styles.container}>
            <View style={styles.topStyle}>         
             <AntDesign name="left" size={28} color="#000000"  onPress={() => {
            Alert.alert("更多") }} style={{marginLeft:'3%'}}></AntDesign>
             <Text style={{fontSize:20,color:'#000000'}}>线路</Text>
            <Fontisto name="map-marker-alt" size={28} color="#000000" onPress={() => {
            Alert.alert("更多") }}style={{ marginRight:'3%', }}/>
  
            </View>
            <View style={{height:40,width:'94%',marginLeft:'3%',justifyContent:'center'}}>
              <Text style={{fontSize:20,color:'#000000'}}>杭州</Text>
            </View>
            <View style={styles.list}>
              <FlatList
                data = {[
                  {place: '杭州上城区到下城区',
                   id:'By:石原里美' },
                  {place: '杭州西湖区到拱宸桥',
                  id:'By:新垣结衣' },
                  {place: '杭州拱宸桥到江干区',
                  id:'By:桥本环奈' },
                  {place: '杭州上城区到下城区',
                  id:'By:石原里美' },
                  {place: '杭州上城区到下城区',
                  id:'By:石原里美' },
                  {place: '杭州上城区到下城区',
                  id:'By:石原里美' },
                  {place: '杭州上城区到下城区',
                  id:'By:石原里美' },
                ]}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item})=>
                <View style={{width:386,height:118,justifyContent:'center',alignItems:'center',backgroundColor:'#6C9575',marginBottom:20,borderRadius:3}}>

                <Image style={{width:371,height:104}} source={require('../picture/zhoushan.jpg')} />
                      <Text style = {styles.placeStyle}>{item.place}</Text> 
                      <Text style = {styles.idStyle}>{item.id}</Text> 
                </View>
            }
              />
            </View>
          </View> 
        );
      }
    }
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#EFEFEF',
        },

        title_text: {
          fontSize:20,
          color:'white'
        },
        list: {
          flex: 1,
        //   paddingTop: 22,
          justifyContent:'center',alignItems:'center'
        },
        placeStyle: {
          padding: 10,
          fontSize: 15,
          height: 44,
         position:'absolute',
         color:'#FFFFFF',
         top:5,
         left:5,
        },
        idStyle: {
            padding: 10,
            fontSize: 15,
            height: 44,
           position:'absolute',
           color:'#FFFFFF',
           fontWeight:'200',
           top:5,
           right:5,
          },
          topStyle:{
              height:78,
              backgroundColor:'#FFFFFF',
              justifyContent:'space-between',
              alignItems:'center',
              flexDirection:'row',
              fontWeight:'200',
              borderRadius:15,
              elevation:10
          }
      });