
import React, { Component, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableWithoutFeedback,
  Alert,
  TextInput,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Bottom_nav from '../../Accessories/Nav/bottom';
import UserShop from '../../Accessories/HomePage/userShop';
// import Global from '../global';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../../News/generalNews';

export default function Setting() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const Stack = createStackNavigator();
const SettingsStack = createStackNavigator();
// export default class Home extends Component {
function Main({navigation}) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // };

  // render() {
  return (

    //导入底部和顶部组件
    <View style={[styles.container]}>
      <StatusBar barStyle='light-content' backgroundColor='rgba(0,0,0,0)' translucent={true}></StatusBar>
      {/* 顶部输入框 */}
      <View style={[styles.top]}>
        <View style={[styles.nav_container]}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome name={'map-marker'} size={30} color={'#fff'} />
            <Text style={{ lineHeight: 30, marginLeft: 10, color: "#fff", fontWeight: "bold" }}>杭州</Text>
          </View>
          <View style={[styles.inputBox]}>
            <TextInput
              placeholder="abibas"
              style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }}
            >
            </TextInput>
            <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              navigation.navigate('Message');

            }}
          >
            <FontAwesome name={'bell'} size={25} color={'#fff'} />
          </TouchableWithoutFeedback>
        </View>
      </View>


      {/* 中部自己写 */}
      <ScrollView style={[styles.mainBox]} showsVerticalScrollIndicator={false}>
        {/* 第一大框 */}
        <View style={[styles.firstBox]}>
          <View style={[styles.imgShow]}>
            <View style={[styles.imgShowBox]}>
              <Image style={{ height: 123 * biLi, width: "94%", marginLeft: "3%" }} source={require('../../img/a.jpg')} />
              <View style={{ width: "100%", flexDirection: "row", padding: 6, justifyContent: "center" }}>
                <Text style={{ fontSize: 15, }}>今日热议：</Text>
                <TouchableWithoutFeedback
                  onPress={() => {

                  }}
                >
                  <Text style={{ fontSize: 12, lineHeight: 20, color: "#FFB16C" }}>#横看成岭侧成峰，远近高低各不同#</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            {/* 1-2排行框 */}
            <View style={{ width: "96%", flexDirection: "row", justifyContent: "space-around", alignItems: 'center', marginLeft: "2%" }}>
              {/* firest View Box */}
              <View style={[styles.list]}>
                {/* 用户头像 */}
                <View>
                  <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../../img/a.jpg')} />
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <Text>每周活跃用户</Text>
                  <Text>排行榜</Text>
                </View>
              </View>
              {/* Second View Box */}
              <View style={[styles.list]}>
                {/* 用户头像 */}
                <View>
                  <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../../img/a.png')} />
                </View>
                <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                  <Text>每周活跃用户</Text>
                  <Text>排行榜</Text>
                </View>
              </View>
              {/* The Second Box End */}
            </View>
          </View>
          <View>
          </View>
        </View>
        {/* 第二个框 */}
        <View style={[styles.userShopBox]}>
          {/* 顶部三个选项 */}
          <View style={{
            flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1,
            borderBottomColor: '#CCC', borderBottomRightRadius: 30, borderBottomStartRadius: 30
          }}>
            <View style={{ flexDirection: "row" }}>
              <TouchableWithoutFeedback >
                <Text style={[styles.choice], [styles.fontSize]}>推荐</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback >
                <Text style={[styles.choice]}>关注</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback >
                <Text style={[styles.choice]}>本地</Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={{ height: 30, width: 80, borderRadius: 20, backgroundColor: "#FFB16C", justifyContent: "center", marginTop: 8, marginRight: 10 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  Alert.alert("your press me")
                }}>
                <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>更多游记</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={{ flexDirection: "row", width: "94%", marginLeft: '3%' }}>
            <View style={{ width: "49%", paddingTop: 5, flexDirection: "column", }}>
              <UserShop />
            </View>
            <View style={{ width: "49%", paddingTop: 5, flexDirection: "column", marginLeft: "2%" }}>
              <UserShop />
            </View>
          </View>

          {/* 底部 */}
          <View style={{ width: '100%' }}>
            <Text style={{ textAlign: "center", padding: 10, color: "#666666", }}>
              <Text style={{ textDecorationLine: 'line-through' }}>               </Text>
              <Text>     </Text>
                  每一场旅行，都是一次成长。
                  <Text>     </Text>
              <Text style={{ textDecorationLine: 'line-through' }}>               </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
      <Bottom_nav />
    </View>
  )
}
// }
const styles = StyleSheet.create({
  fontSize: {
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color: "#484848",
  },
  choice: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#484848",
  },
  userShopBox: {
    width: "100%",
    marginTop: 15 * biLi,
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
  },
  list: {
    width: "48%",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    height: 50,
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
  },
  imgShowBox: {
    width: '100%',
    padding: 0,
  },
  imgShow: {
    height: 233 * biLi,
    width: '100%',
    marginTop: 20
  },
  mainBox: {
    width: "94%",
    marginLeft: "3%",
    height: "73%",
    marginTop: -20,
    borderRadius: 20,
  },
  firstBox: {
    width: "100%",
    marginTop: 45 * biLi,
    backgroundColor: "#EFEFEF",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#43949B",
  },
  inputBox: {
    backgroundColor: "#ffffff",
    width: 250 * biLi,
    borderRadius: 20,
    padding: 0,
    height: 35 * biLi,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    // position: "absolute",
    height: (90) * biLi,
    width: "100%",
    backgroundColor: "#FFB16C",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    elevation: 8,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '5%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});

