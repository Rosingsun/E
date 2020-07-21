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
    >
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: { 
            fontSize:20,
          },
          tabStyle: {
             width: 80,
             borderBottomColor:'red'
          },
          style: {
            backgroundColor: '#EFEFEF',
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
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
