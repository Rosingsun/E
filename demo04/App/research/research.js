import React, { Component, useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Dimensions,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
export default class research extends Component {

  render() {
    return (
      <View style={{ backgroundColor: "#efefef", width: '100%', height: '100%' }}>
        <View style={[styles.topBox]}>
          <AntDesign name={'left'} size={30} color={'#000'} onPress={() => {
            this.props.navigation.goBack();
          }} />
          <View style={[styles.searchBox]}>
            <TextInput
              placeholder="请输入"
              style={{ width: '90%', height: '100%',lineHeight:35 }}
            />
            <FontAwesome style={{ lineHeight: 35, marginRight: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
          </View>
        </View>
        <View style={{ height: 117, width: '92%', marginLeft: '4%', marginTop: 10, }}>
          <View style={{ width: 100, height: 37, backgroundColor: 'white', justifyContent: 'center', borderRadius: 3 }}>
            <Text style={{ fontSize: 20, alignSelf: 'center', justifyContent: 'center' }}>历史记录</Text>
          </View>
          <View style={{ width: '100%', height: 70, marginTop: 10, flexDirection: "row", flexWrap: "wrap" }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[
                {
                  content: '1111111'
                },
              ]}
              renderItem={({ item }) =>
                <View style={{ width: 80, height: 30, backgroundColor: '#2f3843', borderRadius: 15, marginRight: 10, marginTop: 5 }}>
                  <Text style={{ color: 'white', alignSelf: 'center', paddingTop: 4, fontSize: 15 }}>{item.content}</Text>
                </View>
              }

            />
          </View>
        </View>
        <View style={{ height: 237, width: '92%', marginLeft: '4%', marginTop: 15, }}>
          <View style={{ width: 179, height: 37, backgroundColor: 'white', borderRadius: 3, alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: 20 }}>热门排行TOP10</Text></View>
          <View style={{ width: '100%', height: 185, marginTop: 15, }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[
                {
                  number: '1',
                  content: '111121'
                },
                {
                  number: '2',
                  content: '1111111'
                },
                {
                  number: '3',
                  content: '1111111'
                },
                {
                  number: '4',
                  content: '1111111'
                },
                {
                  number: '6',
                  content: '1111111'
                },
                {
                  number: '7',
                  content: '1111111'
                },

              ]}
              renderItem={({ item }) =>
                <View style={{ marginRight: '5%', flexDirection: 'row', alignItems: 'center', width: '45%' }}>
                  <View style={{ width: 25, height: 25, backgroundColor: '#faaf3d', borderRadius: 100, marginTop: 5, marginRight: 5, }}>
                    <Text style={{ color: 'white', alignSelf: 'center', fontSize: 15, }}>{item.number}</Text>
                  </View>
                  <View style={{ width: 80, height: 30,alignItems:"center", backgroundColor: '#2f3843', borderRadius: 15, marginTop: 5, flexDirection: "row" }}>
                    <Text style={{ color: '#fff',textAlign:'center', fontSize: 15,width:'100%',}}>{item.content}</Text>
                  </View>
                  <StarRating
                    disabled={false}
                    // emptyStar={'star-o'}
                    fullStar={'star'}
                    // halfStar={'star-half'}
                    iconSet={'FontAwesome'}
                    maxStars={5}
                    rating={2}
                    halfStarColor={"red"}
                    emptyStarColor={"#00000000"}
                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                    fullStarColor={'#FAAF3D'}
                    starStyle={{
                      fontSize: 18
                    }}
                  />
                </View>

              }
              numColumns={2}
            />
          </View>
        </View>
        <View style={{ height: 160, width: '92%', marginLeft: '4%', marginTop: 15, }}>
          <View style={{ width: 140, height: 37, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 3, }}><Text style={{ fontSize: 20, }}>七月清理一夏</Text></View>
          <View style={{ width: '100%', height: 108, marginTop: 15, }}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={[
                {
                  title: '1',
                  photo: '111121'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },
                {
                  title: '1',
                  photo: '1111111'
                },

              ]}
              renderItem={({ item }) =>
                <View style={{ backgroundColor: 'white', height: 108, width: 128, marginRight: 15, borderRadius: 3, }}>
                  <View style={{ backgroundColor: '#fff', height: 84, width: 128, borderTopLeftRadius: 3, borderTopRightRadius: 3 }}>
                    <Image source={{uri:"http://bpic.51yuansu.com/activity/20200911/5f5ae8bcc3e7a.jpg"}}style={{height:'100%',width:'100%'}}/>
                  </View>
                  <View style={{ width: 128, height: 24, borderBottomEndRadius: 3, borderBottomStartRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20 }}>{item.title}

                    </Text>
                  </View>

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
    height: 50,
    width: 100,
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    backgroundColor: 'orange',
  },
  searchBox: {
    height: 35,
    borderRadius: 15,
    width: '85%',
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  topBox: {
    marginTop: '8%',
    height: 35,
    width: '94%',
    marginLeft: '3%',
    flexDirection: "row",
    justifyContent: "space-around",
  },
  item: {
    height: 30,
    backgroundColor: '#2f3843',
    borderRadius: 15,
    alignSelf: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
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

