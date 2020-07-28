import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            padding:0,
            height:'100%',
          },
          tabStyle: {
            width: 80,
            padding:0,
            borderBottomColor: "#000000",
            height:30,

          },
          style: {
            backgroundColor: '#EFEFEF',
            height:30,
            padding:0,
            elevation: 0,
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
