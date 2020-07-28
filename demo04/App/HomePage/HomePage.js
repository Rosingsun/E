

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StatusBar,
  ImageBackground,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Details from '../navigation/HomePageNavigation';
import Bottom_nav from '../Accessories/Nav/bottom';
const { width, scale } = Dimensions.get("window");
const biLi = width * scale / 1125;
StatusBar.setBackgroundColor("transparent");
StatusBar.setTranslucent(true);
StatusBar.setBarStyle('dark-content');

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Message from '../News/Message';
const Stack = createStackNavigator();
export default function Home() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator mode="modal" headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Message" component={Message} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default class Home extends Component {
const Main = ({ navigation }) => {
  return (
    //导入底部和顶部组件
    <View style={[styles.container]}>
      {/* 顶部输入框 */}
      <View style={[styles.top]}>
        <View style={[styles.nav_container]}>
          <View style={{ flexDirection: "row" }}>
            <Ionicons name={'md-location-sharp'} size={30} color={'#000'}
            />

            <Text style={{ lineHeight: 30, marginLeft: 10, color: "#000", fontWeight: "bold" }}>杭州</Text>
          </View>
          <View style={[styles.inputBox]}>
            <TextInput
              placeholder="abibas"
              style={{ fontSize: 15, padding: 0, letterSpacing: 1, marginLeft: 10, width: '85%', lineHeight: -2, }}
            >
            </TextInput>
            <FontAwesome style={{ lineHeight: 35, marginLeft: 5 }} name={'search'} size={15} color={'#6C6C6C'} />
          </View>
          <AntDesign name={'calendar'} size={25} color={'#000'} />
        </View>
      </View>


      {/* 中部自己写 */}
      <ScrollView style={[styles.mainBox]} showsVerticalScrollIndicator={false}>
        {/* 第一大框 */}
        <View style={[styles.firstBox]}>
          <View style={[styles.imgShow]}>
            <View style={[styles.imgShowBox]}>
              <Image style={{ height: 140 * biLi, width: "94%", marginLeft: "3%" }} source={require('../img/a.jpg')} />
              <View style={{ width: "100%", flexDirection: "row", padding: 6, justifyContent: "center" }}>
                <Text style={{ fontSize: 15, }}>今日热议：</Text>
                <Text style={{ fontSize: 12, lineHeight: 20, color: "#FFB16C" }}>#横看成岭侧成峰，远近高低各不同#</Text>
              </View>
            </View>
            {/* 1-2排行框 */}
            <View style={{ flexDirection: "row", width: '100%' }}>
              <View style={{ width: '49%', height: '100%', overflow: "hidden" }}>
                <ImageBackground style={{ height: 110, marginTop: 10, width: '100%', borderRadius: 3, overflow: "hidden" }} source={require('../img/Photo/hangzhou.jpg')} />

                <View style={{ position: "absolute", width: '100%', height: '100%', marginBottom: '-40%', marginLeft: 0, borderRadius: 400, backgroundColor: "#fff", bottom: 0, }}></View>
                {/* <Text>1111</Text> */}
              </View>
              <View style={{ width: "49%", flexDirection: "column", justifyContent: "space-around", alignItems: 'center', marginLeft: '2%' }}>
                {/* firest View Box */}
                <View style={[styles.list]}>
                  {/* 用户头像 */}
                  <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../img/a.jpg')} />
                  <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                    <Text>每周活跃用户</Text>
                    <Text>排行榜</Text>
                  </View>
                </View>
                {/* Second View Box */}
                <View style={[styles.list]}>
                  {/* 用户头像 */}
                  <Image style={{ height: 34, width: 34, borderRadius: 25, }} source={require('../img/a.png')} />
                  <View style={{ alignItems: "center", marginHorizontal: 10 }}>
                    <Text>每周活跃用户</Text>
                    <Text>排行榜</Text>
                  </View>
                </View>
                {/* The Second Box End */}
              </View>
            </View>
          </View>
          <View>
          </View>
        </View>

        {/* 第二个框 */}
        <View style={[styles.userShopBox]}>
          {/* <View style={{ width: 50, height: 20, borderRadius: 20, }}>

          </View> */}
          <Details />
        </View>
        {/* 第二部分完 */}
      </ScrollView>
    </View>
  )
}
// }
const styles = StyleSheet.create({
  showUserlist: {
    width: '100%',
    borderRadius: 3,
  },
  showContainer: {
    width: 185 * biLi,
    borderRadius: 3,
    marginTop: 5,
    backgroundColor: "#fff",
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
  choice: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "#484848",
  },
  userShopBox: {
    width: "100%",
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
  },
  list: {
    width: "100%",
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
    backgroundColor: "#fff",
  },
  imgShow: {
    height: 290 * biLi,
    width: '100%',
  },
  mainBox: {
    width: "100%",
    height: "73%",
    borderRadius: 3,
  },
  firstBox: {
    width: "100%",
    backgroundColor: "#6C9575",
    padding: 13,
    borderRadius: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
  },
  inputBox: {
    backgroundColor: "#EFEFEF",
    width: 250 * biLi,
    borderRadius: 20,
    padding: 0,
    height: 35 * biLi,
    fontSize: 12,
    flexDirection: "row",
  },
  top: {
    height: (80) * biLi,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
    elevation: 1,
  },
  nav_container: {
    flex: 0.7,
    marginTop: '8%',
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "5%",
  },
});

