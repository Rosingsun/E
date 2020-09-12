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
  ActivityIndicator,
  TouchableWithoutFeedbackComponent,
  RefreshControl
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { storage } from '../Accessories/storage/index'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
// import { Router } from 'express';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

export default class recommend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
      imgData: [],
      selectMultiItem: [],
    }
  }
  fetchDate() {
    fetch('http://192.168.1.151:3000/api/travels/travel/queryAllRelease', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': this.state.token
      },
    }).then((response) => response.json())
      .then((json) => {
        console.log(json)
        this.setState({ data: json.data });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }
  componentDidMount() {
    storage.load('userInfo', (data) => {
      this.setState({
        username: data.username,
        head: data.head,
        token: data.token,
        user_id: data.user_id
      })
      this.fetchDate()
    })
  };
  render() {
    const { data, isLoading } = this.state;
    const { navigation } = this.props;
    function randomNum() {
      let num = Math.random() * 150 + 110;
      return (num)
    }
    function _picList(id, choice, username, head, title, location, showUserImg, prase_count, item) {
      if (id % 2 == 0 & choice == 1) {
        return (
          <View style={[styles.showContainer]}>
            {/* 图片框 */}
            <TouchableWithoutFeedback
              onPress={() => {
                console.log(item.showUserImg)
                navigation.navigate("MainText", { data: item })
              }}
            >
              <Image style={{ height: randomNum(), width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={{ uri: showUserImg.split(',')[0] }} />
            </TouchableWithoutFeedback>
            {/* 定位 */}
            <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
              <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
              {location}
            </Text>
            {/* 用户发言 */}
            <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}
            >
              {title}
            </Text>
            {/* 用户信息框 */}
            <View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 8 }}>
              <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={{ uri: head }} />
              <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>{username}</Text>
              <View style={{ position: "absolute", right: 10, bottom: 5 }}>
                <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>
                  <AntDesign name={'like2'} size={12} color={"#000"}
                    onPress={() => {
                      prase_count++;
                    }}
                  />
                  {prase_count}
                </Text>
              </View>
            </View>
          </View>
        )
      } else if (id % 2 == 1 & choice == 2) {
        return (
          <View style={[styles.showContainer]}>
            {/* 图片框 */}
            <TouchableWithoutFeedback
              onPress={() => {
                // console.log(item.showUserImg)
                navigation.navigate("MainText", { data: item })

              }}>
              <Image style={{ height: randomNum(), width: '100%', borderTopLeftRadius: 3, borderTopRightRadius: 3 }} source={{ uri: showUserImg }} />
            </TouchableWithoutFeedback>
            {/* 定位 */}
            <Text style={{ fontSize: 10, color: "#999999", padding: 5, paddingVertical: 8 }}>
              <FontAwesome name={'location-arrow'} size={13} color={'#6C6C6C'} />
              {location}
            </Text>
            {/* 用户发言 */}
            <Text style={{ fontSize: 16, color: "#000000", lineHeight: 20, paddingHorizontal: 5 }}>
              {title}
            </Text>
            {/* 用户信息框 */}
            <View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 8 }}>
              <Image style={{ height: 20, width: 20, borderRadius: 25, }} source={{ uri: head }} />
              <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}>{username}</Text>
              <View style={{ position: "absolute", right: 10, bottom: 5 }}>
                <Text style={{ fontSize: 12, color: "#999999", lineHeight: 20 }}
                  onPress={() => {
                  }}>
                  <AntDesign name={'like2'} size={12} color={"red"} />
                  {prase_count}

                </Text>
              </View>
            </View>
          </View>
        )
      }
    }

    return (
      <View style={{ backgroundColor: "#EFEFEF", borderRadius: 200, }}>
        <View style={{ flexDirection: "row", width: "94%", marginLeft: '3%' }}>
          {/* 左边这一侧的用户商品信息 */}
          <View style={{ width: "50%", flexDirection: "column", }}>
            {/* 试一下用flatlist */}
            <View style={styles.showUserlist}>
              <FlatList
                numColumns={true}
                data={data}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) =>
                  _picList(item.answer_id - 1, 1, item.username, item.head, item.title, item.location, item.showUserImg, item.prase_count, item)
                }
              />
            </View>
          </View>
          {/* 右边这一侧的用户信息 */}
          <View style={{ width: "50%", flexDirection: "column", marginLeft: "2%" }}>
            <View style={styles.showUserlist}>
              <FlatList
                numColumns={true}
                data={data}
                renderItem={({ item }) =>
                  _picList(item.answer_id - 1, 2, item.username, item.head, item.title, item.location, item.showUserImg, item.prase_count, item)
                }
              />
            </View>
          </View>
        </View>
        <ActivityIndicator
          animating={true}
          color='#999999'
          size="large"
          style={{ height: 40, width: '100%', marginTop: 20, }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showUserlist: {
    width: '100%',
    borderRadius: 3,
  },
  showContainer: {
    width: '100%',
    borderRadius: 3,
    marginTop: 10,
    backgroundColor: "#fff",
    elevation: 4,
  },
  item: {
    padding: 0,
    height: 440,
  },
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
});

