import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableWithoutFeedback,
  StatusBar,
  FlatList,
  Switch,
  ScrollView
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

var userPicInfo = [
  {
    title: "大威天龙",
    imguri: "http://pic.51yuansu.com/pic3/cover/03/99/61/5f27d102bc6dd_610.jpg!/fw/260/quality/90/unsharp/true/compress/true"

  },
  {
    title: "修罗法杖",
    imguri: "http://pic.51yuansu.com/pic3/cover/03/99/62/5f27c148b50b7_610.jpg!/fw/260/quality/90/unsharp/true/compress/true"

  },
  {
    title: "大威天龙",
    imguri: "http://pic.51yuansu.com/pic3/cover/03/99/61/5f27d102bc6dd_610.jpg!/fw/260/quality/90/unsharp/true/compress/true"

  },

]

export default class qiandao extends Component {

  constructor(props) {
    super(props);
    this.state = {
      starCount: 3,
      picChoice: require('../photo/pngc1.png'),
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {/* top */}
        <View style={[styles.top]}>
          <View style={[styles.nav_container]}>
            {/* <View style={{ flexDirection: "row" }}> */}
              <AntDesign name={'left'} size={25} color={'#fff'}
                onPress={() => {
                  Alert.alert("goback")
                  this.props.navigation.goBack();
                }} />
            {/* </View> */}
            <Text style={{ fontSize: 20, color: '#000000', marginLeft: '10%' }}>西湖</Text>
            <View style={{ flexDirection: 'row' }}>
              <SimpleLineIcons name={'notebook'} size={25} color={'#000000'} style={{ marginRight: 15 }}
                onPress={() => {
                  this.setState({ picChoice: require('../photo/pngc2.png') })
                  console.log(this.state.picChoice)
                }} />
              <Ionicons name={'md-share-social-outline'} size={25} color={'#000000'} onPress={() => {
                Alert.alert("分享")
              }} />
            </View>
          </View>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{ paddingBottom: 200 }}
        >
          <View style={{ height: 200, marginTop: 70 }}>
            <Image source={{ uri: "http://bpic.51yuansu.com/activity/20200724/5f1a52f00ffc7.jpg" }} style={{ height: "100%", width: '100%' }} />
          </View>

          {/* part one */}
          <View style={{ paddingBottom: 20, width: '94%', backgroundColor: 'white', marginTop: '-5%', marginLeft: '3%', borderRadius: 3 }}>
            <Image source={this.state.picChoice} style={{ height: 100, width: 100, marginLeft: 280, position: 'absolute', zIndex: -1 }} />
            <View style={{ width: '100%', }}>
              <View style={{ width: '100%', alignItems: 'center' }}>
                <Text style={{ fontSize: 30, marginTop: 18, }}>夕影亭</Text>
                <Text style={{ fontSize: 15, marginTop: 9, }}>"在这里看雷峰夕照简直美呆了"</Text></View>


              <View style={{ marginLeft: '3%', marginRight: '3%', }}>
                <View style={{ marginTop: 9, flexDirection: 'row', marginTop: 18, alignItems: 'center' }}>
                  <Text style={{ fontSize: 12, }}>推荐指数：</Text>
                  <View style={{ width: 100 }}>
                    <StarRating
                      disabled={false}
                      emptyStar={'star-o'}
                      fullStar={'star'}
                      halfStar={'star-half'}
                      iconSet={'FontAwesome'}
                      maxStars={5}
                      rating={this.state.starCount}
                      selectedStar={(rating) => this.onStarRatingPress(rating)}
                      fullStarColor={'#FAAF3D'}
                      starStyle={{
                        fontSize: 18
                      }}
                    />
                  </View>
                </View>
                <Text style={{ fontSize: 12, marginTop: 18 }}>推荐打卡时间：19:00-21:00</Text>
                <Text style={{ fontSize: 12, marginTop: 18 }}>名人打卡：李白、王维、白居易</Text>
                <Text style={{ fontSize: 12, marginTop: 18 }}>著名典故：《送李白》、《送王维》、《送白居易》</Text>
                <View style={{ paddingHorizontal: '3%', paddingVertical: '2%', marginTop: '2%', backgroundColor: '#EFEFEF', borderRadius: 15 }}>
                  <Text style={{ fontSize: 12 }}>“雷峰夕照”是西湖著名景点，在夕影亭能看到雷峰塔最美的
                  夕照景象。所谓“雷峰夕照”明显是一个远观之意象之景，此
                  处雷峰塔只是出现在此景画面中的背景元素而已。有关专家
找来找去，最后在长桥公园找到了一个好地方——夕影亭。</Text></View>
              </View>
            </View>
          </View>
          {/* part two */}
          <View style={{ width: '94%', marginLeft: '3%', backgroundColor: "#fff", borderRadius: 3, marginTop: 30 }}>
            {/* TOP DIFFCULT BOX */}
            <View style={{ marginTop: 20, borderWidth: 3, borderTopColor: "#2F3843", borderBottomColor: "#2F3843", borderLeftColor: "#fff", borderRightColor: "#fff", paddingVertical: 5, alignItems: "center" }}>
              <View style={{ height: 20, width: '100%', backgroundColor: "#2F3843" }}></View>
              <View style={{ position: "absolute", backgroundColor: "#fff", marginTop: -10, width: 90, }}>
                <Text style={{ padding: 10, width: '100%', textAlign: "center", fontSize: 15, alignItems: "center" }}>地点详情</Text>
                <View style={{ width: '80%', marginLeft: "10%" }}>
                  <StarRating
                    disabled={false}
                    fullStar={'star'}
                    maxStars={6}
                    rating={6}
                    fullStarColor={'#2F3843'}
                    starStyle={{
                      fontSize: 8,
                      marginTop: -5,
                      justifyContent: "space-between",
                      alignContent: "space-between",
                    }}
                  /></View>
              </View>
            </View>
            {
              userPicInfo.map((item) => {
                return (
                  <View style={{ marginTop: 20 }}>
                    <Text style={{ marginLeft: 20 }}>{item.title}</Text>
                    <Image style={{ width: '100%', height: 200 }} source={{ uri: item.imguri }} />
                  </View>
                )
              })
            }
            <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 5 }}>
              <Text>地点报错</Text>
              <Text> | </Text>
              <Text>内容举报</Text>
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
    backgroundColor: "#6C9575",
    flexDirection: "column"
  },
  top: {
    position: "absolute",
    top: 0,
    height: 78,
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 8,
    flexDirection: 'row'
  },
  nav_container: {
    flexDirection: "row",
    width: "90%",
    justifyContent: 'space-between',
    marginLeft: "5%",
    marginTop: '8%',
  },
});
