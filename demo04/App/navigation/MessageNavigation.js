import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';



import thumbs from '../News/thumbs';
import leaveMessage from '../News/leaveMessage';
import Message from '../News/Message';
import trade from '../News/trade';
const Tab = createMaterialTopTabNavigator();
export default function MessageDetails() {
  return (
    <NavigationContainer
      independent="true"

    >
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
          },
          //选中状态的选项卡的文本颜色
          activeTintColor: "#FFB16C",
          // activeTintColor: "#43949B",
          // 未选中的选项卡的颜色
          inactiveTintColor: "#fff",
          // 选中状态的背景颜色
          activeBackgroundColor: "blue",
          // 未选中状态的颜色
          inactiveBackgroundColor: "green",
          adaptive: true,
          // 导航栏状态
          tabStyle: {
            backgroundColor: "#FFB16C",
            // backgroundColor: "red",
            borderRadius: 20,
          },
          // 样式设置
          style: {
            backgroundColor: "#FFB16C",
            // backgroundColor: "#ffffff",
            overflow: "hidden",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            height: 50,
            elevation: 10,
            marginTop: 10,
            elevation: 0,
          },
          //底部横条样式设置
          indicatorStyle: {
            height: 0,
          },
          iconStyle: {
            width: '100%',
          },
          //显示标签和显示icon
          showLabel: false,
          showIcon: true,
        }}
      >
        <Tab.Screen
          name="thumbs"
          component={thumbs}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name={'like2'} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="leaveMessage"
          component={leaveMessage}
          options={{
            tabBarIcon: ({ color }) => (
              <AntDesign name={'message1'} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{
            tabBarIcon: ({ color }) => (
              <Fontisto name={'email'} size={28} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="trade"
          component={trade}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome5 name={'envelope-open-text'} size={28} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
