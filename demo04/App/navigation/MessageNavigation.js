import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
            fontSize: 18,
            width:'100%',
          },
          tabStyle: {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
          style: {
            backgroundColor: '#FFB16C',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            height: 50,
            elevation:10,
            marginTop:10,
          },


        }}
      >
        <Tab.Screen
          name="thumbs"
          component={thumbs}
          options={{ title: '点赞' }}
        />
        <Tab.Screen
          name="leaveMessage"
          component={leaveMessage}
          options={{ 
            tabBarLabel: '首页',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name={'home'} size={25} color={color} />
                    ),
           }}
        />
        <Tab.Screen
          name="Message"
          component={Message}
          options={{ title: '本地' }}
        />
        <Tab.Screen
          name="trade"
          component={trade}
          options={{ title: '本地' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
