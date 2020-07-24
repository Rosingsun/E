import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import focus from '../HomePage/focus';
import local from '../HomePage/local';
import recommend from '../HomePage/recommend';

const Tab = createMaterialTopTabNavigator();
export default function Details() {
  return (
    <NavigationContainer
      independent="true"
      animationEnabled="false"
    >
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 20,
            borderRadius: 20,
          },
          tabStyle: {
            width: 80,
            borderRadius: 200,
            borderBottomColor: "#000000",
          },
          style: {
            backgroundColor: '#EFEFEF',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            elevation: 0,
            // 设置底部灰色色块
            borderBottomColor: "#999999",
            borderBottomWidth: 1,
            borderRadius: 24,
          },
          indicatorStyle: {
            backgroundColor: "#FFB16C",
            height: 3,
            width: 30,
            borderRadius: 111,
            marginLeft: 25,
          },
        }}
      >
        <Tab.Screen
          name="recommend"
          component={recommend}
          options={{
            title: '推荐',
          }}
        />
        <Tab.Screen
          name="focus"
          component={focus}
          options={{ title: '关注' }}
        />
        <Tab.Screen
          name="local"
          component={local}
          options={{ title: '本地' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
