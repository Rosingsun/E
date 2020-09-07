import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class research extends Component {

  render() {
      return (
        <View style={{backgroundColor:"#efefef",width:'100%',height:'100%'}}>
          <View style={[styles.topBox]}>
            <View style={{height:'100%',backgroundColor:'green',width:"5%",position:"absolute",marginLeft:0,}}></View>
            <View style={[styles.searchBox]}>
            </View>
          </View>
      <View style={{height:117,width:'92%',marginLeft:'4%',marginTop:10,}}>
        <View style={{width:100,height:37,backgroundColor:'white',justifyContent:'center',borderRadius:3}}>
        <Text style={{fontSize:20,alignSelf:'center',justifyContent:'center'}}>历史记录</Text>
        </View>
            <View style={{width:'100%',height:70,marginTop:10,flexDirection:"row",flexWrap:"wrap"}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                        data={[
                            {
                                content:'1111111'
                            },
                            {
                                content:'1111111'
                            },
                            {
                                content:'1111111'
                            },
                            {
                                content:'1111111'
                            },
                            {
                                content:'1111111'
                            },
                            {
                                content:'1111111'
                            },
                              ]}
                              renderItem={({ item }) =>
                                  <View style={{width:80,height:30,backgroundColor:'#2f3843',borderRadius:15,marginRight:10,marginTop:5}}>
                                    <Text style={{color:'white',alignSelf:'center',paddingTop:4,fontSize:15}}>{item.content}</Text>
                                  </View>
                              }
                              numColumns = {4}
                              // horizontal={true}
                              // contentContainerStyle={{flexWrap:'wrap',alignItems:'center',}}
                              
                    />
            </View>   
          </View>
          <View style={{height:237,width:'92%',marginLeft:'4%',marginTop:15,}}>
            <View style={{width:179,height:37,backgroundColor:'white',borderRadius:3,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20}}>热门排行TOP10</Text></View>
            <View style={{width:'100%',height:185,marginTop:15,}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                        data={[
                            {
                                number:'1',
                                content:'111121'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {  
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            {
                                number:'1',
                                content:'1111111'
                            },
                            
                              ]}
                              renderItem={({ item }) =>
                                  <View style={{marginRight:'5%',flexDirection:'row',alignItems:'center',width:'45%'}}>
                                    <View style={{width:25,height:25,backgroundColor:'#faaf3d',borderRadius:100,marginTop:5,marginRight:5,}}>
                                    <Text style={{color:'white',alignSelf:'center',fontSize:15,}}>{item.number}</Text>
                                    </View>
                                    <View style={{width:80,height:30,backgroundColor:'#2f3843',borderRadius:15,marginTop:5,}}>
                                    <Text style={{color:'white',alignSelf:'center',paddingTop:4,fontSize:15}}>{item.content}</Text>
                                    </View>
                                  </View>
                                  
                              }
                              numColumns = {2}
                              // horizontal={true}
                              // contentContainerStyle={{flexDirection:'column',flexWrap:'wrap',alignItems:'center',}}
                              
                    />
            </View>      
          </View>
          <View style={{height:160,width:'92%',marginLeft:'4%',marginTop:15,}}>
            <View style={{width:140,height:37,backgroundColor:'white',alignItems:'center',justifyContent:'center',borderRadius:3,}}><Text style={{fontSize:20,}}>七月清理一夏</Text></View>
            <View style={{width:'100%',height:108,marginTop:15,}}>
            <FlatList
                    showsVerticalScrollIndicator={false}
                        data={[
                            {
                                title:'1',
                                photo:'111121'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {  
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            {
                                title:'1',
                                photo:'1111111'
                            },
                            
                              ]}
                              renderItem={({ item }) =>
                            <View style={{backgroundColor:'white',height:108,width:128,marginRight:15,borderRadius:3,}}>
                              <View style={{backgroundColor:'green',height:84,width:128,borderTopLeftRadius:3,borderTopRightRadius:3}}><Text>{item.photo}</Text></View>
                            <View style={{width:128,height:24,borderBottomEndRadius:3,borderBottomStartRadius:3,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20}}>{item.title}</Text></View>
                            </View>
                              }
                              horizontal={true}
                              showsHorizontalScrollIndicator={false}
                              // horizontal={true}
                              // contentContainerStyle={{flexDirection:'column',flexWrap:'wrap',alignItems:'center',}}
                              
                    />
            </View>   
          </View>
        </View>
      )
    }
  }
const styles = StyleSheet.create({
  itemm: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    height:50,
    width:100,
  },
  circle:{
  height:20,
  width:20,
  borderRadius:100,
  backgroundColor:'orange',
  },
  searchBox:{
  height:35,
  borderRadius:15,
  marginLeft:'10%',
  width:'90%',
  backgroundColor:'white',
  elevation:6,
  },
  topBox:{
    marginTop:40,
    height:35,
    width: '92%',
    marginLeft: '4%',
  },
  item: {
    height:30,
    backgroundColor:'#2f3843',
    borderRadius:15,
    alignSelf:'flex-start',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:3,
  },
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
  title: {
    fontSize: 32,
  },
});

